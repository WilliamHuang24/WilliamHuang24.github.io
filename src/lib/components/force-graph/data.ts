export type Project = {
    name: string;
    nodeRadius: number;
    category: string;
    tools: string[];
    url: string;
    github: string;
    description: string;
}

export const getColor = (category: string) => {
    switch (category.toLowerCase()) {
        case "web":
            return "#ff2056";

        case "java":
            return "#00a6f4";

        case "python":
            return "#7ccf00";

        default:
            return "#fd9a00";
    }
}

const categories = [
    "java",
    "web",
    "python",
    "C/C++",
];

export const getX = (category: string, width: number) => {
    // category groups
    const bucketSize = width / (categories.length + 1);
    return bucketSize * (categories.indexOf(category) + 1);
};

export const projects: Project[] = [
    {
        name: 'my-site',
        nodeRadius: 35,
        category: 'web',
        tools: ['javascript', 'typescript', 'svelte', 'd3', 'web'],
        url: '/projects/personal-site',
        github: '',
        description: 'This site, designed to showcase projects.'
    },
    {
        name: 'c-compiler',
        nodeRadius: 40,
        category: 'java',
        tools: ['java', 'junit', 'c', 'mips', 'apache ant'],
        url: '/projects/ccompiler',
        github: '',
        description: 'Compiled C source files to MIPS assembly.'
    },
    {
        name: 'minesweeper solver',
        nodeRadius: 30,
        category: 'python',
        tools: ['python', 'numpy', 'stable baselines3', 'ai'],
        url: '/projects/minesweepersolver',
        github: '',
        description: 'Trained reinforcement learning agent to play minesweeper.'
    },
    {
        name: 'metro simulation',
        nodeRadius: 20,
        category: 'java',
        tools: ['java', 'concurrency'],
        url: '/projects/metrosimulation',
        github: '',
        description: 'Synchronizing global state through 4 concurrent stations and one overseer.'
    },
    {
        name: 'concurrent simulation',
        nodeRadius: 25, 
        category: 'java',
        tools: ['java', 'concurrency'],
        url: '/projects/concurrentsimulation',
        github: '',
        description: 'Multiple threads simulate sea creatures moving through 3D space.'
    },
    {
        name: 'dialogue analysis',
        nodeRadius: 20,
        category: 'python',
        tools: ['python', 'data science'],
        url: '/projects/dialogueanalysis',
        github: '',
        description: 'Insights and analysis with regards to dialogue in a show.'
    },
    {
        name: '311 analysis',
        nodeRadius: 25,
        category: 'python',
        tools: ['python', 'data science', 'matplotlib'],
        url: '/projects/311analysis',
        github: '',
        description: 'Analyse 311 data from 2023 to answer and visualise stakeholder questions'
    },
    {
        name: 'web-scraper',
        nodeRadius: 20,
        category: 'python',
        tools: ['python', 'data science', 'bs4'],
        url: '/projects/webscraper',
        github: '',
        description: 'Fetch the top new stories from the Montreal Gazette with bs4 for parsing and caching to avoid duplicate requests.'
    },
    {
        name: 'messaging app',
        nodeRadius: 30,
        category: 'web',
        tools: ['javascript', 'react', 'nodejs', 'mongodb', 'nginx'],
        url: '/projects/messagingapp',
        github: '',
        description: 'Full stack messaging application with multiple chatrooms, admin features and profile customization.'
    },
    {
        name: 'unix shell',
        nodeRadius: 40,
        category: 'C/C++',
        tools: ['c', 'gdb', 'pthreads'],
        url: '/projects/shell',
        github: '',
        description: 'Unix style command line shell, with process spawning and multithreaded script execution'
    },
    {
        name: 'nlp-text simplifier',
        nodeRadius: 30,
        category: 'python',
        tools: ['python', 'ai', 'nlp', 'rnn'],
        url: '/projects/textsimplification',
        github: '',
        description: 'Trained and applied machine translation model to apply text simplification'
    },
    {
        name: 'learning crm',
        nodeRadius: 35,
        category: 'web',
        tools: ['javascript', 'typescript', 'svelte', 'supabase'],
        url: '/projects/crm',
        github: '',
        description: 'Learning center management web application'
    },
    {
        name: 'chip8 emulator',
        nodeRadius: 30,
        category: "C/C++",
        tools: ['c++', 'SDL', 'make'],
        url: '/projects/chip8',
        github: '',
        description: 'Chip-8 emulator with input and display.'
    }
];