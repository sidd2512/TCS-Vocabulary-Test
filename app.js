// App state
let currentPage = 'sets'; // 'sets', 'view', 'test'
let currentSetIndex = null;

// DOM elements
const main = document.getElementById('main-content');

// sets is now imported from words.js

// Helper: Load user set status from localStorage or initialize
function loadUserSetStatus() {
    const saved = localStorage.getItem('userSetStatus');
    if (saved) {
        return JSON.parse(saved);
    } else {
        // Initialize from sets
        return sets.map(set => ({ status: set.status, progress: set.progress }));
    }
}

// Helper: Save user set status to localStorage
function saveUserSetStatus(statusArr) {
    localStorage.setItem('userSetStatus', JSON.stringify(statusArr));
}

let userSetStatus = loadUserSetStatus();

function renderSetsPage() {
    let html = `<header>\
        <div class="logo"><i class="fas fa-book-open"></i></div>\
        <h1>TCS Vocabulary Builder</h1>\
        <p class="subtitle">Master essential words for TCS Verbal Ability Section with our interactive learning and testing platform</p>\
    </header>\
    <div class="sets-list">`;
    sets.forEach((set, idx) => {
        const status = userSetStatus[idx]?.status || set.status;
        const progress = userSetStatus[idx]?.progress ?? set.progress;
        html += `<div class="set-item" data-idx="${idx}">\
            <div class="set-header">\
                <div class="set-name">${set.name}</div>\
                <div class="set-status status-${status.replace(/\s/g, '-').toLowerCase()}">${status}</div>\
            </div>\
            <div class="progress-container"><div class="progress-bar" style="width: ${progress}%"></div></div>\
            <div class="actions">\
                <button class="btn btn-secondary" onclick="event.stopPropagation();viewSet(${idx})"><i class="fas fa-eye"></i> View</button>\
                <button class="btn btn-primary" onclick="event.stopPropagation();testSet(${idx})"><i class="fas fa-play"></i> ${status === 'Not Started' ? 'Start' : (status === 'In Progress' ? 'Test' : 'Retest')}</button>\
            </div>\
        </div>`;
    });
    html += '</div>';
    main.innerHTML = html;
    // Make set-item clickable for viewSet
    document.querySelectorAll('.set-item').forEach(div => {
        div.addEventListener('click', function() {
            const idx = this.getAttribute('data-idx');
            viewSet(Number(idx));
        });
    });
}

function viewSet(idx) {
    currentSetIndex = idx;
    currentPage = 'view';
    const set = sets[idx];
    let html = `<button class="btn btn-secondary" onclick="renderSetsPage()"><i class="fas fa-arrow-left"></i> Back</button>\
        <h2 class="content-title">${set.name}</h2>\
        <div class="word-grid">`;
    set.words.forEach(wordObj => {
        html += `<div class="word-card">\
            <div class="word-header">\
                <div class="word">${wordObj.word}</div>\
                
            </div>\
            <div class="meaning">${wordObj.meaning}<div class="hindi">${wordObj.hindi}</div></div>\
            <div class="synonyms"><strong>Synonyms:</strong> ${wordObj.synonyms.map(s=>`<span>${s}</span>`).join('')}</div>\
            <div class="antonyms"><strong>Antonyms:</strong> ${wordObj.antonyms.map(a=>`<span>${a}</span>`).join('')}</div>\
        </div>`;
    });
    html += '</div>\
        <div class="actions" style="margin-top:30px;"><button class="btn btn-primary" onclick="testSet(' + idx + ')"><i class="fas fa-play"></i> Test</button></div>';
    main.innerHTML = html;
}

// Utility: Shuffle array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// State for test
let testState = null;

function testSet(idx) {
    currentSetIndex = idx;
    currentPage = 'test';
    const set = sets[idx];
    // Prepare questions in random order
    if (!testState || testState.setIdx !== idx) {
        // Build a mixed array of question objects: type: 'meaning', 'synonym', 'antonym'
        let questions = [];
        set.words.forEach(wordObj => {
            questions.push({ type: 'meaning', wordObj });
            if (wordObj.synonyms && wordObj.synonyms.length > 0) {
                questions.push({ type: 'synonym', wordObj });
            }
            if (wordObj.antonyms && wordObj.antonyms.length > 0) {
                questions.push({ type: 'antonym', wordObj });
            }
        });
        // Ensure double the number of questions as words (repeat/reshuffle if needed)
        let targetCount = set.words.length * 2;
        let allQuestions = shuffleArray([...questions]);
        while (allQuestions.length < targetCount) {
            allQuestions = allQuestions.concat(shuffleArray([...questions]));
        }
        allQuestions = shuffleArray(allQuestions).slice(0, targetCount);
        testState = {
            setIdx: idx,
            questions: allQuestions,
            current: 0,
            score: 0,
            answered: Array(allQuestions.length).fill(null)
        };
    }
    renderTestQuestion();
    // Mark set as In Progress if not already
    if (userSetStatus[idx].status !== 'Completed') {
        userSetStatus[idx].status = 'In Progress';
        userSetStatus[idx].progress = Math.max(userSetStatus[idx].progress, 10); // Example: 10% on test start
        saveUserSetStatus(userSetStatus);
    }
}

function renderTestQuestion() {
    const idx = currentSetIndex;
    const set = sets[idx];
    const qIdx = testState.current;
    const q = testState.questions[qIdx];
    let options = [];
    let questionText = '';
    if (q.type === 'meaning') {
        // Prepare options: correct + 3 random wrong meanings
        let wrongs = set.words.filter(w => w.word !== q.wordObj.word);
        wrongs = shuffleArray([...wrongs]).slice(0, 3);
        options = [
            { text: q.wordObj.meaning, correct: true }
        ];
        wrongs.forEach(w => options.push({ text: w.meaning, correct: false }));
        options = shuffleArray(options);
        questionText = `Q${qIdx+1}. What is the meaning of the word "${q.wordObj.word}"?`;
    } else if (q.type === 'synonym') {
        // Prepare options: correct synonym + 3 random wrong synonyms from other words
        let correct = q.wordObj.synonyms[0];
        let wrongs = set.words.filter(w => w.word !== q.wordObj.word && w.synonyms && w.synonyms.length > 0)
            .map(w => w.synonyms[0]);
        wrongs = shuffleArray(wrongs).slice(0, 3);
        options = [
            { text: correct, correct: true }
        ];
        wrongs.forEach(w => options.push({ text: w, correct: false }));
        options = shuffleArray(options);
        questionText = `Q${qIdx+1}. Which is a synonym of "${q.wordObj.word}"?`;
    } else if (q.type === 'antonym') {
        // Prepare options: correct antonym + 3 random wrong antonyms from other words
        let correct = q.wordObj.antonyms[0];
        let wrongs = set.words.filter(w => w.word !== q.wordObj.word && w.antonyms && w.antonyms.length > 0)
            .map(w => w.antonyms[0]);
        wrongs = shuffleArray(wrongs).slice(0, 3);
        options = [
            { text: correct, correct: true }
        ];
        wrongs.forEach(w => options.push({ text: w, correct: false }));
        options = shuffleArray(options);
        questionText = `Q${qIdx+1}. Which is an antonym of "${q.wordObj.word}"?`;
    }
    // Render
    let html = `<button class="btn btn-secondary" onclick="viewSet(${idx})"><i class="fas fa-arrow-left"></i> Back</button>\
        <h2 class="content-title">${set.name} - Test</h2>\
        <div class="test-container">\
            <div class="question">${questionText}</div>\
            <div class="options">`;
    options.forEach((opt, i) => {
        html += `<div class="option" data-correct="${opt.correct}" data-idx="${i}">${String.fromCharCode(65+i)}) ${opt.text}</div>`;
    });
    html += `</div>\
            <div class="navigation" style="margin-top:30px;">`;
    if (qIdx > 0) {
        html += `<button class="btn btn-secondary nav-btn" onclick="prevTestQuestion()"><i class='fas fa-arrow-left'></i> Previous</button>`;
    }
    if (qIdx < testState.questions.length - 1) {
        html += `<button class="btn btn-primary nav-btn" onclick="nextTestQuestion()">Next <i class='fas fa-arrow-right'></i></button>`;
    } else {
        html += `<button class="btn btn-primary nav-btn" onclick="finishTest()">Finish</button>`;
    }
    html += `</div>\
            <div class="progress-info">Question ${qIdx+1} of ${testState.questions.length}</div>\
        </div>`;
    main.innerHTML = html;
    // Option selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.addEventListener('click', function() {
            if (testState.answered[qIdx] !== null) return; // Already answered
            const isCorrect = this.getAttribute('data-correct') === 'true';
            testState.answered[qIdx] = isCorrect;
            if (isCorrect) {
                this.style.background = '#4caf50';
                this.style.color = '#fff';
                testState.score++;
            } else {
                this.style.background = '#f44336';
                this.style.color = '#fff';
                // highlight correct
                document.querySelectorAll('.option').forEach(o => {
                    if (o.getAttribute('data-correct') === 'true') {
                        o.style.background = '#4caf50';
                        o.style.color = '#fff';
                    }
                });
            }
            // Disable all
            document.querySelectorAll('.option').forEach(o => o.style.pointerEvents = 'none');
        });
    });
    // If already answered, show feedback
    if (testState.answered[qIdx] !== null) {
        document.querySelectorAll('.option').forEach(opt => {
            const isCorrect = opt.getAttribute('data-correct') === 'true';
            if (isCorrect) {
                opt.style.background = '#4caf50';
                opt.style.color = '#fff';
            } else if (testState.answered[qIdx] === false && opt.classList.contains('selected')) {
                opt.style.background = '#f44336';
                opt.style.color = '#fff';
            }
            opt.style.pointerEvents = 'none';
        });
    }
}

window.prevTestQuestion = function() {
    if (testState.current > 0) {
        testState.current--;
        renderTestQuestion();
    }
};
window.nextTestQuestion = function() {
    if (testState.current < testState.questions.length - 1) {
        testState.current++;
        renderTestQuestion();
    }
};
window.finishTest = function() {
    // Mark set as completed only if score >= 90%
    const percent = (testState.score / testState.questions.length) * 100;
    if (percent >= 90) {
        completeSet(currentSetIndex);
    } else {
        // In Progress
        userSetStatus[currentSetIndex].status = 'In Progress';
        userSetStatus[currentSetIndex].progress = Math.round(percent);
        saveUserSetStatus(userSetStatus);
        renderSetsPage();
    }
    // Show result
    let html = `<div class="result-container">\
        <h2 class="content-title">Test Completed!</h2>\
        <div class="score">${testState.score}/${testState.questions.length}</div>\
        <div class="score-text">${percent >= 90 ? 'Excellent work! You\'ve mastered this set.' : 'Score at least 90% to complete the set.'}</div>\
        <div class="navigation" style="margin-top: 40px;">\
            <button class="btn btn-secondary nav-btn" onclick="testSet(${currentSetIndex})"><i class="fas fa-redo"></i> Retake Test</button>\
            <button class="btn btn-primary nav-btn" onclick="viewSet(${currentSetIndex})">Review Words</button>\
        </div>\
    </div>`;
    main.innerHTML = html;
}

// Example: Call this when a set is completed (you can call this after test is finished)
function completeSet(idx) {
    userSetStatus[idx].status = 'Completed';
    userSetStatus[idx].progress = 100;
    saveUserSetStatus(userSetStatus);
    renderSetsPage();
}

// Initial render
window.onload = () => {
    // Ensure userSetStatus is initialized for all sets
    if (userSetStatus.length !== sets.length) {
        userSetStatus = sets.map(set => ({ status: set.status, progress: set.progress }));
        saveUserSetStatus(userSetStatus);
    }
    renderSetsPage();
};
