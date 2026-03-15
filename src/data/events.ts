export interface Activity {
    time: string;
    name: string;
}

export interface Coordinator {
    name: string;
    phone: string;
}

export interface Round {
    name: string;
    description: string;
}

export interface Event {
    id: string;
    day: string;
    date: string;
    title: string;
    subtitle: string;
    badge?: string;
    shortDescription: string;
    fullDescription: string;
    icon: string;
    image?: string;
    location: string;
    clue: string;
    activities: Activity[];
    teamSize?: string;
    rounds?: Round[];
    rules?: string[];
    coordinators?: Coordinator[];
    showLogoInsteadOfTimeline?: boolean;
    registrationLink?: string;
    evidenceImage?: string;
}

export const eventsData: Event[] = [
    {
        id: "day1",
        day: "Day 1",
        date: "20 March 2026",
        badge: "ONLY FOR SAIRAM POLYTECHNIC STUDENTS",
        title: "Sabotage Quest",
        subtitle: "Trace the hidden clues",
        image: "/sabotage-quest-logo.jpg",
        evidenceImage: "/posters/sabotage-quest-poster.jpg",
        showLogoInsteadOfTimeline: true,
        shortDescription: "A mystery-based investigative challenge where teams work together to uncover the truth behind carefully crafted sabotage scenarios.",
        fullDescription: "Sabotage Quest is a mystery-based investigative challenge where teams work together to uncover the truth behind carefully crafted sabotage scenarios. Participants must analyze clues, solve puzzles, decode hidden messages, and follow a series of QR-based trails to progress through the challenge.\n\nEach stage tests observation, logical reasoning, and teamwork as participants move through different levels of the investigation. Teams must carefully connect pieces of evidence and track the clues left behind in order to uncover the final truth.",
        icon: "Search",
        location: "Dr.Abdul Kalam Digital Library",
        rules: [
            "Only for Sairam Polytechnic Students",
            "Participants must follow the QR-based investigation trail in sequence",
            "Clues and materials provided during the event must not be damaged or removed",
            "Teams must work together to analyze clues and solve puzzles",
            "The final solution must be submitted within the given time limit",
            "The decision of the organizing team will be final"
        ],
        clue: "One hidden message leads directly to the final solution.",
        coordinators: [
            { name: "Raghav G S", phone: "+91 86107 37914" },
            { name: "Hemamalar D", phone: "+91 93424 14331" }
        ],
        activities: [
            { time: "09:00 AM", name: "Inauguration & Event Briefing" },
            { time: "10:00 AM", name: "Investigation Challenge Begins" },
            { time: "11:30 AM", name: "QR Trail & Puzzle Stage" },
            { time: "12:30 PM", name: "Final Evidence Submission" },
            { time: "01:00 PM", name: "Case Reveal & Results" }
        ]
    },
    {
        id: "day2",
        day: "Day 2",
        date: "23 March 2026",
        badge: "ONLY FOR SAIRAM STUDENTS",
        title: "Clavis Enigma",
        subtitle: "Detective Investigation Challenge",
        image: "/clavis-enigma-logo.png",
        evidenceImage: "/posters/clavis-enigma-poster.jpg",
        showLogoInsteadOfTimeline: true,
        registrationLink: "https://forms.gle/fHcdznZ9SMw7mx9m6",
        teamSize: "3 Members per team (participants register individually and will be grouped into teams).",
        shortDescription: "Clavis Enigma is an immersive detective-themed investigation challenge where participants step into a mysterious case.",
        fullDescription: "Clavis Enigma is an immersive detective-themed investigation challenge conducted under Inquesta 2.0, where participants step into a mysterious case that demands observation, deduction, and logical thinking.\n\nA crime has taken place, and teams must carefully analyze hidden clues, examine evidence, and piece together information to uncover the truth. With multiple suspects and scattered leads, every detail becomes important in identifying the real culprit.\n\nParticipants must collaborate, communicate effectively, and apply critical reasoning to connect the evidence and solve the case. Only teams with sharp observation and strong teamwork will successfully reveal the mystery.",
        icon: "Search",
        location: "Dr.Abdul Kalam Digital Library",
        clue: "Three suspects stand before the truth… but only one hides the real secret.",
        activities: [
            { time: "10:00 AM", name: "Briefing: The Library Mystery" },
            { time: "11:30 AM", name: "Team Formation & Round 1" },
            { time: "02:00 PM", name: "Round 2: Unmask the Culprit" },
            { time: "05:00 PM", name: "Results & Awards" }
        ],
        rounds: [
            {
                name: "Pre-Event",
                description: "Participants register individually. Each will receive a team name, a Google Drive link, and a password containing unique clues/evidence, making teamwork essential."
            },
            {
                name: "Round 1 – The Gathering of Minds",
                description: "Locate assigned teammates through an interactive activity at the venue to proceed."
            },
            {
                name: "Round 2 – Unmask the Culprit",
                description: "At the library crime scene, analyze the environment and combine clues with pre-event evidence to logically deduce the real culprit."
            }
        ],
        rules: [
            "Participants must follow the instructions given by the event coordinators.",
            "Kindly register only if you are available on 23 March 2026.",
            "External help or unfair practices will lead to immediate disqualification.",
            "This event is exclusively for students of Sairam Engineering College.",
            "Students from other colleges can participate in other Inquesta events.",
            "The decision of judges and organizers will be final."
        ],
        coordinators: [
            { name: "Nivekhitha R H", phone: "+91 82483 86668" },
            { name: "Yuvasri V", phone: "+91 93607 96450" }
        ]
    },
    {
        id: "day3",
        day: "Day 3",
        date: "24 March 2026",
        badge: "ONLY FOR OTHER COLLEGES",
        title: "Spotlight Saga",
        subtitle: "Open Stage Talent Event",
        image: "/spotlight-saga-logo.png",
        evidenceImage: "/posters/spotlight-saga-poster.jpg",
        showLogoInsteadOfTimeline: true,
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScaGuM4vXjLzOJncdJ2LxOOd3c-4rsx0HJKPFHyZcfsN28xFQ/viewform",
        teamSize: "Solo or as a team of maximum 2 members.",
        shortDescription: "Spotlight Saga is an open-stage talent event where participants step into the spotlight to showcase their creativity.",
        fullDescription: "Spotlight Saga is an open-stage talent event where participants step into the spotlight to showcase their creativity and stage presence. From singing and poetry to stand-up comedy and beatboxing, performers will take the microphone and present their talent before a live audience.\n\nParticipants will be given limited time to captivate the crowd with their unique performance. The stage becomes a platform for expression, confidence, and creativity as individuals and teams bring their ideas to life.\n\nWhether it is music, storytelling, humor, or spoken word, Spotlight Saga celebrates performers who can engage the audience and leave a lasting impression.",
        icon: "Mic",
        location: "Sri Sairam Engineering College",
        clue: "The spotlight reveals talent that words alone cannot describe.",
        activities: [
            { time: "09:00 AM", name: "Registration & Event Briefing" },
            { time: "10:00 AM", name: "Performance Round Begins" },
            { time: "01:00 PM", name: "Lunch Break" },
            { time: "02:00 PM", name: "Final Performance Session" },
            { time: "04:00 PM", name: "Judges’ Results & Closing" }
        ],
        rounds: [
            {
                name: "Registration",
                description: "Participants register and confirm their performance category before the event begins."
            },
            {
                name: "Performance Round",
                description: "Participants perform on stage in their selected category such as singing, poetry, storytelling, stand-up comedy, or musical performance."
            },
            {
                name: "Final Evaluation",
                description: "Judges evaluate performances based on creativity, stage presence, audience engagement, and originality."
            }
        ],
        rules: [
            "Participants may perform solo or as a team of maximum 2 members.",
            "Each performance must be completed within the time limit given by the organizers.",
            "This event is only for participants from other colleges (Inter-College Event).",
            "Dance performances are not allowed as this is a microphone-based event.",
            "Participants must bring their own instruments or props if required.",
            "Performances must be respectful and appropriate (no offensive content).",
            "Judges’ decisions will be final."
        ],
        coordinators: [
            { name: "Ramya S", phone: "9381355702" },
            { name: "Poojasri SS", phone: "96002 41911" }
        ]
    },
    {
        id: "day4",
        day: "Day 4",
        date: "25 March 2026",
        badge: "ONLY FOR OTHER COLLEGES",
        title: "Gazette: The Press Challenge",
        subtitle: "Uncover the Hidden Truth",
        image: "/gazette-logo.jpg",
        evidenceImage: "/posters/gazette-poster.jpg",
        showLogoInsteadOfTimeline: true,
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSezyk0PRTxw4sOCAal7pI3OjhMy9blS99uv3fvulxIjyr40Uw/viewform",
        teamSize: "3 Members",
        shortDescription: "Gazette is an investigative media event where participants step into the role of journalists chasing the truth.",
        fullDescription: "Gazette: The Press Challenge is an investigative media event where participants step into the role of journalists chasing the truth behind a developing corporate crisis.\n\nA viral video has triggered widespread controversy, and news agencies must uncover what really happened. Teams will analyze digital evidence, question powerful figures, and piece together verified information to expose the real story.\n\nFrom investigating leaked documents to confronting the company’s leadership, participants must combine research, logic, and communication skills to reveal the truth and deliver the final headline before the deadline.",
        icon: "FileText",
        location: "Sri Sairam Engineering College",
        clue: "The truth isn't always viral — sometimes it must be investigated.",
        activities: [
            { time: "09:00 AM", name: "Event Briefing & Case Introduction" },
            { time: "10:00 AM", name: "Round 1: Digital Truth Challenge" },
            { time: "12:30 PM", name: "Round 2: Mock Press Conference" },
            { time: "02:30 PM", name: "Round 3: Front Page Creation" },
            { time: "04:00 PM", name: "Final Evaluation & Results" }
        ],
        rounds: [
            {
                name: "Round 1 — Digital Truth Challenge",
                description: "Teams analyze a viral video and access a secure chatbot to retrieve leaked documents and case files. Participants must verify information and submit an investigative report."
            },
            {
                name: "Round 2 — The Algorithm vs. You",
                description: "Teams confront the company’s CEO in a simulated press conference and use their investigation to ask evidence-based questions."
            },
            {
                name: "Round 3 — The Front Page",
                description: "Participants compile their findings into a one-page digital newspaper using Canva with a headline, article, and supporting visuals."
            }
        ],
        rules: [
            "Teams must consist of 3 members.",
            "Laptops are mandatory for participation.",
            "Participants must follow instructions given by the event coordinators.",
            "All investigation work must be completed within the given time.",
            "External help or unfair practices will lead to disqualification.",
            "Judges’ and organizers’ decisions will be final.",
            "No registration fee is required."
        ],
        coordinators: [
            { name: "Dilli Ganesan K", phone: "+91 93617 21767" },
            { name: "Yuvabharathi R", phone: "+91 90427 61954" },
            { name: "Hemapriya SJ", phone: "+91 95001 26142" }
        ]
    },
    {
        id: "day5",
        day: "Day 5",
        date: "26 March 2026",
        badge: "ONLY FOR NDLI MEMBERS",
        title: "Mission Unsolved",
        subtitle: "The NDLI Mystery Challenge",
        image: "/mission-unsolved-logo.jpg",
        evidenceImage: "/posters/mission-unsolved-poster.jpg",
        showLogoInsteadOfTimeline: true,
        teamSize: "Grouped during the event.",
        shortDescription: "Mission Unsolved is an NDLI-based mystery challenge where participants investigate clues using resources from the NDLI platform.",
        fullDescription: "Mission Unsolved is an NDLI-based mystery challenge where participants investigate clues and solve criminal-themed questions using resources from the NDLI (National Digital Library of India) platform.\n\nTeams must carefully explore the provided digital files, analyze information, and logically connect the clues to uncover the correct answers. Each step of the challenge requires observation, research, and teamwork to progress through the investigation.\n\nTo unlock additional hints, teams can attempt the Guess the Movie – Emoji Challenge, where correctly identifying the movie reveals a clue that helps move the investigation forward.",
        icon: "Library",
        location: "Sri Sairam Engineering College",
        clue: "Every clue hides within the pages — only careful minds will uncover it.",
        activities: [
            { time: "09:30 AM", name: "Event Briefing & Team Formation" },
            { time: "10:00 AM", name: "Investigation Begins (NDLI Resource Search)" },
            { time: "12:00 PM", name: "Emoji Movie Challenge for Bonus Clues" },
            { time: "01:30 PM", name: "Final Answer Submission" },
            { time: "02:00 PM", name: "Results & Closing" }
        ],
        rounds: [
            {
                name: "Investigation Phase",
                description: "Participants analyze the given criminal logic and investigation-based questions and explore NDLI resources to identify the correct answers."
            },
            {
                name: "Knowledge Search",
                description: "Participants continue the investigation by locating relevant information through NDLI resources and connecting the clues logically."
            },
            {
                name: "SDG Intelligence Phase",
                description: "In the final stage, participants will answer questions related to the United Nations Sustainable Development Goals (SDGs). This phase tests participant's awareness and understanding of global development goals and their impact on society."
            }
        ],
        rules: [
            "Only NDLI Members of Sri Sairam Engineering College can participate.",
            "Participants must complete their NDLI members registeration",
            "Participants must follow all instructions given by the event coordinators.",
            "Participants will be grouped during the event.",
            "Answers must be found using the provided NDLI resources.",
            "External help is not allowed.",
            "Judges’ decisions will be final."
        ],
        coordinators: [
            { name: "Pragathi", phone: "8778448268" },
            { name: "Dheepika", phone: "8523957677" },
            { name: "Pasunuri Harshini", phone: "9962145261" }
        ]
    }
];
