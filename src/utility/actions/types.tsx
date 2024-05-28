export interface Post {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    date: string;
    author: number;
    featured_media: number;
    featured_image?: string;
    link: string;
    excerpt: {
        rendered: string;
    };
    categories: number[];
    _embedded?: {
        'wp:featuredmedia'?: [{ source_url: string }];
        'wp:term'?: Array<{ id: number; name: string; taxonomy: string }[]>;
    };
}