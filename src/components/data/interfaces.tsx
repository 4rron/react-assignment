export interface HNPost {
    by: string;
    descendants: number;
    id: number;
    kids?: Array<number>;
    score: number;
    time: number;
    title: string;
    type: string;
    url?: string;
    rank?: number | null;
}