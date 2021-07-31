import { CardItem } from './models';

export interface CourseResult {
    coursera: CourseItem[];
    edx: CourseItem[];
    udemy: CourseItem[];
}

export interface CourseItem {
    displayed_url: string;
    domain: string;
    position: number;
    snippet: string;
    title: string;
    url: string;
}

export interface ResponseItem {
    isLoading: boolean;
    data: CardItem[];
}
