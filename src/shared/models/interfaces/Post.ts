export interface Post {
    id: number;
    type: string;
    title: string;
    date: string;
    abstract?: string;
    description?: string;
    image?: string;
}