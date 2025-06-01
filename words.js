// words.js - Vocabulary for TCS NQT Verbal Preparation (10 sets of 10 words each)
const sets = [
    {
        "name": "Set 1:",
        "status": "Not Started",
        "progress": 0,
        "words": [
            {
                "word": "Latent",
                "meaning": "Existing but not yet developed",
                "hindi": "गुप्त (Gupt)",
                "synonyms": ["Dormant", "Hidden"],
                "antonyms": ["Overt", "Apparent"]
            },
            {
                "word": "Dispel",
                "meaning": "Make (a doubt, feeling, or belief) disappear",
                "hindi": "दूर करना (Door karna)",
                "synonyms": ["Scatter", "Disperse"],
                "antonyms": ["Attract", "Gather"]
            },
            {
                "word": "Manifestation",
                "meaning": "An event, action, or object that embodies something",
                "hindi": "प्रकट रूप (Prakat roop)",
                "synonyms": ["Expression", "Display"],
                "antonyms": ["Concealment", "Obscuration"]
            },
            {
                "word": "Echelon",
                "meaning": "A level or rank in an organization",
                "hindi": "पद (Pad)",
                "synonyms": ["Rank", "Level"],
                "antonyms": ["Base", "Lowly"]
            },
            {
                "word": "Deprecate",
                "meaning": "Express disapproval of",
                "hindi": "निंदा करना (Ninda karna)",
                "synonyms": ["Condemn", "Deplore"],
                "antonyms": ["Approve", "Praise"]
            },
            {
                "word": "Covetous",
                "meaning": "Having a great desire to possess something",
                "hindi": "लालची (Lalchi)",
                "synonyms": ["Greedy", "Envious"],
                "antonyms": ["Generous", "Content"]
            },
            {
                "word": "Admonish",
                "meaning": "Warn or reprimand firmly",
                "hindi": "चेतावनी देना (Chetavni dena)",
                "synonyms": ["Reprimand", "Scold"],
                "antonyms": ["Praise", "Commend"]
            },
            {
                "word": "Discretion",
                "meaning": "The quality of behaving to avoid causing offense",
                "hindi": "विवेक (Vivek)",
                "synonyms": ["Prudence", "Caution"],
                "antonyms": ["Indiscretion", "Carelessness"]
            },
            {
                "word": "Diligence",
                "meaning": "Careful and persistent work",
                "hindi": "परिश्रम (Parishram)",
                "synonyms": ["Hard work", "Industriousness"],
                "antonyms": ["Laziness", "Negligence"]
            },
            {
                "word": "Circumspect",
                "meaning": "Wary and unwilling to take risks",
                "hindi": "सावधान (Savdhan)",
                "synonyms": ["Cautious", "Prudent"],
                "antonyms": ["Reckless", "Careless"]
            }
        ]
    },
    {
        "name": "Set 2:",
        "status": "Not Started",
        "progress": 0,
        "words": [
            {
                "word": "Dogmatic",
                "meaning": "Inclined to lay down principles as undeniably true",
                "hindi": "कट्टर (Kattar)",
                "synonyms": ["Opinionated", "Doctrinaire"],
                "antonyms": ["Flexible", "Open-minded"]
            },
            {
                "word": "Impetus",
                "meaning": "The force that makes something happen",
                "hindi": "प्रेरणा (Prerna)",
                "synonyms": ["Momentum", "Impulse"],
                "antonyms": ["Inertia", "Stagnation"]
            },
            {
                "word": "Fallible",
                "meaning": "Capable of making mistakes",
                "hindi": "भ्रांतिपूर्ण (Bhrantipoorn)",
                "synonyms": ["Imperfect", "Unreliable"],
                "antonyms": ["Infallible", "Perfect"]
            },
            {
                "word": "Acronym",
                "meaning": "A word formed from the initial letters of a name",
                "hindi": "संक्षिप्त रूप (Sankshipt roop)",
                "synonyms": ["Abbreviation", "Initialism"],
                "antonyms": ["Whole word", "Phrase"]
            },
            {
                "word": "Abysmal",
                "meaning": "Extremely bad; appalling",
                "hindi": "बहुत खराब (Bahut kharab)",
                "synonyms": ["Terrible", "Dreadful"],
                "antonyms": ["Superb", "Excellent"]
            },
            {
                "word": "Conciliation",
                "meaning": "Action of stopping someone from being angry",
                "hindi": "संधि (Sandhi)",
                "synonyms": ["Appeasement", "Pacification"],
                "antonyms": ["Incitement", "Provocation"]
            },
            {
                "word": "Harbinger",
                "meaning": "A person or thing that announces the approach of another",
                "hindi": "अग्रदूत (Agradoot)",
                "synonyms": ["Forerunner", "Precursor"],
                "antonyms": ["Follower", "Consequence"]
            },
            {
                "word": "Illustrious",
                "meaning": "Well known, respected, and admired",
                "hindi": "प्रसिद्ध (Prasiddh)",
                "synonyms": ["Famous", "Renowned"],
                "antonyms": ["Inglorious", "Obscure"]
            },
            {
                "word": "Intermittent",
                "meaning": "Occurring at irregular intervals",
                "hindi": "रुक-रुक कर (Ruk-ruk kar)",
                "synonyms": ["Sporadic", "Occasional"],
                "antonyms": ["Constant", "Continuous"]
            }
        ]
    },
    {
        "name": "Set 3:",
        "status": "Not Started",
        "progress": 0,
        "words": [
            {
                "word": "Mitigate",
                "meaning": "Make less severe or painful",
                "hindi": "कम करना (Kam karna)",
                "synonyms": ["Alleviate", "Reduce"],
                "antonyms": ["Aggravate", "Intensify"]
            },
            {
                "word": "Motley",
                "meaning": "Varied in appearance or character",
                "hindi": "विविध (Vividh)",
                "synonyms": ["Mixed", "Diverse"],
                "antonyms": ["Uniform", "Homogeneous"]
            },
            {
                "word": "Pensive",
                "meaning": "Engaged in serious thought",
                "hindi": "विचारमग्न (Vicharmagn)",
                "synonyms": ["Thoughtful", "Reflective"],
                "antonyms": ["Unconcerned", "Carefree"]
            },
            {
                "word": "Prolific",
                "meaning": "Producing much fruit or offspring",
                "hindi": "उत्पादक (Utpadak)",
                "synonyms": ["Productive", "Fertile"],
                "antonyms": ["Unproductive", "Sparse"]
            },
            {
                "word": "Relinquish",
                "meaning": "Voluntarily cease to keep or claim",
                "hindi": "त्याग करना (Tyaag karna)",
                "synonyms": ["Surrender", "Abandon"],
                "antonyms": ["Retain", "Keep"]
            },
            {
                "word": "Solicit",
                "meaning": "Ask for or try to obtain something",
                "hindi": "निवेदन करना (Nivedan karna)",
                "synonyms": ["Request", "Seek"],
                "antonyms": ["Refuse", "Deny"]
            },
            {
                "word": "Tractable",
                "meaning": "Easy to control or influence",
                "hindi": "वश में रहने वाला (Vash mein rehne वाला)",
                "synonyms": ["Docile", "Obedient"],
                "antonyms": ["Intractable", "Stubborn"]
            },
            {
                "word": "Veer",
                "meaning": "Change direction suddenly",
                "hindi": "दिशा बदलना (Disha badलना)",
                "synonyms": ["Swerve", "Turn"],
                "antonyms": ["Stay", "Continue"]
            },
            {
                "word": "Vehement",
                "meaning": "Showing strong feeling",
                "hindi": "तीव्र (Teever)",
                "synonyms": ["Passionate", "Fervent"],
                "antonyms": ["Apathetic", "Calm"]
            },
            {
                "word": "Caprice",
                "meaning": "Sudden and unaccountable change of mood",
                "hindi": "मनमौजीपन (Manmaujipan)",
                "synonyms": ["Whim", "Impulse"],
                "antonyms": ["Stability", "Constancy"]
            }
        ]
    },
    {
        "name": "Set 4:",
        "status": "Not Started",
        "progress": 0,
        "words": [
            {
                "word": "Stifle",
                "meaning": "Restrain or stop oneself",
                "hindi": "दम घुटना (Dam ghutना)",
                "synonyms": ["Suppress", "Smother"],
                "antonyms": ["Release", "Encourage"]
            },
            {
                "word": "Concur",
                "meaning": "Be of the same opinion",
                "hindi": "सहमत होना (Sahmat hona)",
                "synonyms": ["Agree", "Assent"],
                "antonyms": ["Disagree", "Dissent"]
            },
            {
                "word": "Lethargy",
                "meaning": "Lack of energy",
                "hindi": "सुस्ती (Susti)",
                "synonyms": ["Fatigue", "Inactivity"],
                "antonyms": ["Alertness", "Energy"]
            },
            {
                "word": "Efface",
                "meaning": "Erase from a surface",
                "hindi": "मिटाना (Mitana)",
                "synonyms": ["Erase", "Obliterate"],
                "antonyms": ["Engrave", "Imprint"]
            },
            {
                "word": "Pretentious",
                "meaning": "Attempting to impress",
                "hindi": "दिखावटी (Dikhawati)",
                "synonyms": ["Showy", "Ostentatious"],
                "antonyms": ["Modest", "Humble"]
            },
            {
                "word": "Compunction",
                "meaning": "A feeling of guilt",
                "hindi": "पछतावा (Pachhtawa)",
                "synonyms": ["Remorse", "Guilt"],
                "antonyms": ["Indifference", "Shamelessness"]
            },
            {
                "word": "Cacophony",
                "meaning": "A harsh discordant mixture of sounds",
                "hindi": "कर्कशता (Karkashata)",
                "synonyms": ["Din", "Racket"],
                "antonyms": ["Harmony", "Silence"]
            },
            {
                "word": "Divulge",
                "meaning": "Make known private information",
                "hindi": "प्रकट करना (Prakat karna)",
                "synonyms": ["Reveal", "Disclose"],
                "antonyms": ["Conceal", "Hide"]
            },
            {
                "word": "Aberration",
                "meaning": "A departure from what is normal",
                "hindi": "विचलन (Vichlan)",
                "synonyms": ["Anomaly", "Deviation"],
                "antonyms": ["Normality", "Conformity"]
            },
            {
                "word": "Transient",
                "meaning": "Lasting only for a short time",
                "hindi": "क्षणिक (Kshanik)",
                "synonyms": ["Temporary", "Fleeting"],
                "antonyms": ["Permanent", "Enduring"]
            }
        ]
    },
    {
        "name": "Set 5:",
        "status": "Not Started",
        "progress": 0,
        "words": [
            {
                "word": "Aberration",
                "meaning": "Departure from normality",
                "hindi": "विपथन",
                "synonyms": ["Anomaly", "Deviation"],
                "antonyms": ["Normality", "Conformity"]
            },
            {
                "word": "Benevolent",
                "meaning": "Kindly and well-meaning",
                "hindi": "परोपकारी",
                "synonyms": ["Charitable", "Compassionate"],
                "antonyms": ["Malevolent", "Cruel"]
            },
            {
                "word": "Cacophony",
                "meaning": "Harsh mixture of sounds",
                "hindi": "कोलाहल",
                "synonyms": ["Discord", "Dissonance"],
                "antonyms": ["Harmony", "Concord"]
            },
            {
                "word": "Debilitate",
                "meaning": "To weaken severely",
                "hindi": "दुर्बल करना",
                "synonyms": ["Enfeeble", "Weaken"],
                "antonyms": ["Strengthen", "Fortify"]
            },
            {
                "word": "Ephemeral",
                "meaning": "Lasting briefly",
                "hindi": "अल्पकालिक",
                "synonyms": ["Transient", "Fleeting"],
                "antonyms": ["Permanent", "Enduring"]
            },
            {
                "word": "Fastidious",
                "meaning": "Excessively attentive to details",
                "hindi": "विवेकी",
                "synonyms": ["Meticulous", "Punctilious"],
                "antonyms": ["Sloppy", "Careless"]
            },
            {
                "word": "Garrulous",
                "meaning": "Overly talkative",
                "hindi": "बातूनी",
                "synonyms": ["Loquacious", "Verbose"],
                "antonyms": ["Taciturn", "Reticent"]
            },
            {
                "word": "Hegemony",
                "meaning": "Dominance over others",
                "hindi": "प्रभुत्व",
                "synonyms": ["Supremacy", "Dominion"],
                "antonyms": ["Weakness", "Submission"]
            },
            {
                "word": "Incessant",
                "meaning": "Uninterrupted",
                "hindi": "निरंतर",
                "synonyms": ["Ceaseless", "Unremitting"],
                "antonyms": ["Interrupted", "Occasional"]
            },
            {
                "word": "Juxtapose",
                "meaning": "Place side-by-side for contrast",
                "hindi": "साथ रखना",
                "synonyms": ["Compare", "Collate"],
                "antonyms": ["Separate", "Disconnect"]
            }
        ]
    },
    {
        "name": "Set 6:",
        "status": "Not Started",
        "progress": 0,
        "words": [
            {
                "word": "Knell",
                "meaning": "Sound of a bell for death",
                "hindi": "मृत्यु घंटा",
                "synonyms": ["Death knell", "Toll"],
                "antonyms": ["Birth", "Inception"]
            },
            {
                "word": "Laconic",
                "meaning": "Using very few words",
                "hindi": "संक्षिप्त",
                "synonyms": ["Concise", "Terse"],
                "antonyms": ["Verbose", "Wordy"]
            },
            {
                "word": "Meticulous",
                "meaning": "Showing great attention to detail",
                "hindi": "सूक्ष्मदर्शी",
                "synonyms": ["Thorough", "Precise"],
                "antonyms": ["Careless", "Negligent"]
            },
            {
                "word": "Nefarious",
                "meaning": "Wicked or criminal",
                "hindi": "कुटिल",
                "synonyms": ["Villainous", "Heinous"],
                "antonyms": ["Virtuous", "Honorable"]
            },
            {
                "word": "Obfuscate",
                "meaning": "Deliberately make unclear",
                "hindi": "अस्पष्ट करना",
                "synonyms": ["Bewilder", "Confuse"],
                "antonyms": ["Clarify", "Illuminate"]
            },
            {
                "word": "Paradigm",
                "meaning": "Typical example or pattern",
                "hindi": "प्रतिमान",
                "synonyms": ["Model", "Archetype"],
                "antonyms": ["Exception", "Deviation"]
            },
            {
                "word": "Querulous",
                "meaning": "Complaining in a petulant manner",
                "hindi": "बड़बड़ाने वाला",
                "synonyms": ["Peevish", "Fretful"],
                "antonyms": ["Contented", "Cheerful"]
            },
            {
                "word": "Reticent",
                "meaning": "Not revealing thoughts",
                "hindi": "मितभाषी",
                "synonyms": ["Reserved", "Taciturn"],
                "antonyms": ["Garrulous", "Talkative"]
            },
            {
                "word": "Sycophant",
                "meaning": "Person who acts obsequiously",
                "hindi": "चाटुकार",
                "synonyms": ["Flatterer", "Toady"],
                "antonyms": ["Critic", "Rebel"]
            },
            {
                "word": "Trepidation",
                "meaning": "Feeling of fear or agitation",
                "hindi": "घबराहट",
                "synonyms": ["Apprehension", "Dread"],
                "antonyms": ["Calmness", "Confidence"]
            }
        ]
    },
    {
        "name": "Set 7:",
        "status": "Not Started",
        "progress": 0,
        "words": [
            {
                "word": "Ubiquitous",
                "meaning": "Present everywhere simultaneously",
                "hindi": "सर्वव्यापी",
                "synonyms": ["Omnipresent", "Pervasive"],
                "antonyms": ["Rare", "Scarce"]
            },
            {
                "word": "Vacillate",
                "meaning": "Waver between different opinions",
                "hindi": "डगमगाना",
                "synonyms": ["Hesitate", "Fluctuate"],
                "antonyms": ["Decide", "Persist"]
            },
            {
                "word": "Whet",
                "meaning": "Sharpen or stimulate",
                "hindi": "तेज़ करना",
                "synonyms": ["Stimulate", "Arouse"],
                "antonyms": ["Dull", "Blunt"]
            },
            {
                "word": "Xenophobia",
                "meaning": "Dislike of foreign people",
                "hindi": "विदेशी-भीति",
                "synonyms": ["Racism", "Chauvinism"],
                "antonyms": ["Tolerance", "Acceptance"]
            },
            {
                "word": "Yoke",
                "meaning": "Join together; bondage",
                "hindi": "जुड़ाव",
                "synonyms": ["Harness", "Connect"],
                "antonyms": ["Liberate", "Free"]
            },
            {
                "word": "Zealot",
                "meaning": "Fanatically committed person",
                "hindi": "कट्टरपंथी",
                "synonyms": ["Fanatic", "Extremist"],
                "antonyms": ["Moderate", "Pragmatist"]
            },
            {
                "word": "Ambiguous",
                "meaning": "Open to multiple interpretations",
                "hindi": "अस्पष्ट",
                "synonyms": ["Vague", "Equivocal"],
                "antonyms": ["Clear", "Definite"]
            },
            {
                "word": "Belligerent",
                "meaning": "Hostile and aggressive",
                "hindi": "जुझारू",
                "synonyms": ["Hostile", "Pugnacious"],
                "antonyms": ["Peaceful", "Friendly"]
            },
            {
                "word": "Capitulate",
                "meaning": "Cease to resist an opponent",
                "hindi": "आत्मसमर्पण करना",
                "synonyms": ["Surrender", "Submit"],
                "antonyms": ["Resist", "Conquer"]
            },
            {
                "word": "Dearth",
                "meaning": "Scarcity or lack",
                "hindi": "कमी",
                "synonyms": ["Shortage", "Deficiency"],
                "antonyms": ["Abundance", "Plenty"]
            }
        ]
    },
    {
        "name": "Set 8:",
        "status": "Not Started",
        "progress": 0,
        "words": [
            {
                "word": "Effervescent",
                "meaning": "Vivacious and enthusiastic",
                "hindi": "उत्साहपूर्ण",
                "synonyms": ["Bubbly", "Exuberant"],
                "antonyms": ["Lethargic", "Flat"]
            },
            {
                "word": "Frivolous",
                "meaning": "Lacking serious purpose",
                "hindi": "तुच्छ",
                "synonyms": ["Flippant", "Trivial"],
                "antonyms": ["Serious", "Solemn"]
            },
            {
                "word": "Gratuitous",
                "meaning": "Uncalled for; lacking reason",
                "hindi": "अनावश्यक",
                "synonyms": ["Unwarranted", "Unnecessary"],
                "antonyms": ["Essential", "Necessary"]
            },
            {
                "word": "Harangue",
                "meaning": "Loud aggressive speech",
                "hindi": "भाषणबाज़ी",
                "synonyms": ["Tirade", "Diatribe"],
                "antonyms": ["Praise", "Commendation"]
            },
            {
                "word": "Iconoclast",
                "meaning": "Person who attacks cherished beliefs",
                "hindi": "मूर्तिभंजक",
                "synonyms": ["Rebel", "Radical"],
                "antonyms": ["Conformist", "Traditionalist"]
            },
            {
                "word": "Jaded",
                "meaning": "Tired or bored from excess",
                "hindi": "थका हुआ",
                "synonyms": ["Weary", "Satiated"],
                "antonyms": ["Enthusiastic", "Fresh"]
            },
            {
                "word": "Kinetic",
                "meaning": "Relating to motion",
                "hindi": "गतिशील",
                "synonyms": ["Dynamic", "Energetic"],
                "antonyms": ["Static", "Inactive"]
            },
            {
                "word": "Lethargy",
                "meaning": "Lack of energy",
                "hindi": "सुस्ती",
                "synonyms": ["Sluggishness", "Torpor"],
                "antonyms": ["Vitality", "Energy"]
            },
            {
                "word": "Myriad",
                "meaning": "Countless number",
                "hindi": "असंख्य",
                "synonyms": ["Multitude", "Innumerable"],
                "antonyms": ["Few", "Limited"]
            },
            {
                "word": "Nostalgia",
                "meaning": "Sentimental longing for past",
                "hindi": "यादों की लालसा",
                "synonyms": ["Reminiscence", "Sentimentality"],
                "antonyms": ["Anticipation", "Foresight"]
            }
        ]
    },
    {
        "name": "Set 9:",
        "status": "Not Started",
        "progress": 0,
        "words": [
            {
                "word": "Ostentatious",
                "meaning": "Designed to impress or attract notice",
                "hindi": "दिखावटी",
                "synonyms": ["Showy", "Pompous"],
                "antonyms": ["Modest", "Unassuming"]
            },
            {
                "word": "Pragmatic",
                "meaning": "Dealing with things sensibly",
                "hindi": "व्यावहारिक",
                "synonyms": ["Practical", "Realistic"],
                "antonyms": ["Idealistic", "Romantic"]
            },
            {
                "word": "Quandary",
                "meaning": "State of perplexity",
                "hindi": "दुविधा",
                "synonyms": ["Dilemma", "Predicament"],
                "antonyms": ["Solution", "Resolution"]
            },
            {
                "word": "Rancor",
                "meaning": "Bitterness or resentfulness",
                "hindi": "कटुता",
                "synonyms": ["Animosity", "Hostility"],
                "antonyms": ["Amity", "Friendship"]
            },
            {
                "word": "Sagacious",
                "meaning": "Having keen mental discernment",
                "hindi": "चतुर",
                "synonyms": ["Wise", "Prudent"],
                "antonyms": ["Foolish", "Ignorant"]
            },
            {
                "word": "Tacit",
                "meaning": "Understood without being stated",
                "hindi": "मौन",
                "synonyms": ["Implied", "Unspoken"],
                "antonyms": ["Explicit", "Express"]
            },
            {
                "word": "Ubiquity",
                "meaning": "Presence everywhere at once",
                "hindi": "सर्वव्यापकता",
                "synonyms": ["Omnipresence", "Pervasiveness"],
                "antonyms": ["Scarcity", "Rarity"]
            },
            {
                "word": "Venerate",
                "meaning": "Regard with great respect",
                "hindi": "पूजा करना",
                "synonyms": ["Revere", "Adore"],
                "antonyms": ["Despise", "Scorn"]
            },
            {
                "word": "Wistful",
                "meaning": "Having sad longing",
                "hindi": "उदास",
                "synonyms": ["Yearning", "Pensive"],
                "antonyms": ["Content", "Indifferent"]
            },
            {
                "word": "Xenial",
                "meaning": "Relating to hospitality",
                "hindi": "आतिथ्य संबंधी",
                "synonyms": ["Hospitable", "Friendly"],
                "antonyms": ["Inhospitable", "Unwelcoming"]
            }
        ]
    },
    {
        "name": "Set 10:",
        "status": "Not Started",
        "progress": 0,
        "words": [
            {
                "word": "Yearn",
                "meaning": "Have intense longing",
                "hindi": "तरसना",
                "synonyms": ["Crave", "Desire"],
                "antonyms": ["Loathe", "Detest"]
            },
            {
                "word": "Zephyr",
                "meaning": "Gentle breeze",
                "hindi": "हल्की हवा",
                "synonyms": ["Breeze", "Breath"],
                "antonyms": ["Gale", "Storm"]
            },
            {
                "word": "Alacrity",
                "meaning": "Brisk and cheerful readiness",
                "hindi": "तत्परता",
                "synonyms": ["Eagerness", "Promptness"],
                "antonyms": ["Reluctance", "Slowness"]
            },
            {
                "word": "Brusque",
                "meaning": "Abrupt or offhand in manner",
                "hindi": "रूखा",
                "synonyms": ["Blunt", "Curt"],
                "antonyms": ["Polite", "Courteous"]
            },
            {
                "word": "Cajole",
                "meaning": "Persuade by flattery",
                "hindi": "चापलूसी करना",
                "synonyms": ["Coax", "Wheedle"],
                "antonyms": ["Force", "Bully"]
            },
            {
                "word": "Deleterious",
                "meaning": "Causing harm or damage",
                "hindi": "हानिकारक",
                "synonyms": ["Harmful", "Detrimental"],
                "antonyms": ["Beneficial", "Salubrious"]
            },
            {
                "word": "Esoteric",
                "meaning": "Intended for a small knowledgeable group",
                "hindi": "गूढ़",
                "synonyms": ["Arcane", "Cryptic"],
                "antonyms": ["Common", "Accessible"]
            },
            {
                "word": "Facetious",
                "meaning": "Treating serious issues with humor",
                "hindi": "हँसी-मज़ाक में",
                "synonyms": ["Flippant", "Jocular"],
                "antonyms": ["Serious", "Sincere"]
            },
            {
                "word": "Gauche",
                "meaning": "Lacking social grace",
                "hindi": "भद्दा",
                "synonyms": ["Awkward", "Tactless"],
                "antonyms": ["Graceful", "Suave"]
            },
            {
                "word": "Histrionic",
                "meaning": "Overly theatrical or dramatic",
                "hindi": "नाटकीय",
                "synonyms": ["Melodramatic", "Theatrical"],
                "antonyms": ["Unemotional", "Restrained"]
            }
        ]
    }
];
