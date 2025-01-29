import { forceSimulation } from "d3";

export type Project = {
    name: string;
    category: string;
    tools: string[];
    url: string;
    github: string;
}

export const getColor = (category: string) => {
    switch (category.toLowerCase()) {
        case "web":
            return "#ff2056";

        case "programs":
            return "#00a6f4";

        case "ai":
            return "#7ccf00";

        default:
            return "#fd9a00";
    }
}

export const projects: Project[] = [
    {
        name: 'my site',
        category: 'web',
        tools: ['javascript', 'typescript', 'svelte', 'd3'],
        url: '/projects/personal-site',
        github: ''
    },
    {
        name: 'c compiler',
        category: 'programs',
        tools: ['java', 'c', 'mips'],
        url: '/projects/ccompiler',
        github: ''
    },
    {
        name: 'minesweeper',
        category: 'ai',
        tools: ['python', 'numpy'],
        url: '/projects/minesweepersolver',
        github: ''
    }
];