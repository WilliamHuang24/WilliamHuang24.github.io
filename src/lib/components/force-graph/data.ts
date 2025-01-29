import { forceSimulation } from "d3";

export type Project = {
    name: string;
    category: string;
    tools: string[];
    url: string;
    github: string;
}

export const data: Project[] = [
    {
        name: 'my site',
        category: 'web development',
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
    }
];