export type Project = {
    name: string;
    category: string;
    tools: string[];
    url: string;
}

export const data: Project[] = [
    {
        name: 'personal site',
        category: 'web development',
        tools: ['javascript', 'typescript', 'svelte', 'd3'],
        url: '/projects/personal-site'
    }
];