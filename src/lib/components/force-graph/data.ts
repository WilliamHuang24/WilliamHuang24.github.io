import { forceSimulation } from "d3";

export type Project = {
    name: string;
    nodeRadius: number;
    category: string;
    tools: string[];
    url: string;
    github: string;
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
    // "C/C++",
];

export const getX = (category: string, width: number) => {
    // category groups
    const bucketSize = width / (categories.length + 1);
    return bucketSize * (categories.indexOf(category) + 1);
};

export const projects: Project[] = [
    {
        name: 'my-site',
        nodeRadius: 30,
        category: 'web',
        tools: ['javascript', 'typescript', 'svelte', 'd3'],
        url: '/projects/personal-site',
        github: ''
    },
    {
        name: 'c-compiler',
        nodeRadius: 40,
        category: 'java',
        tools: ['java', 'c', 'mips'],
        url: '/projects/ccompiler',
        github: ''
    },
    {
        name: 'minesweeper solver',
        nodeRadius: 30,
        category: 'python',
        tools: ['python', 'numpy'],
        url: '/projects/minesweepersolver',
        github: ''
    }
];