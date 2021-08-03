import { ResourceTypes } from '../constants/defaults';
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
    type: ResourceTypes;
    data: CardItem[];
}

export interface Resource {
    id: string;
    title: string;
    channel: string;
    description: string;
    rating: number;
    url: string;
    comments: Comment[];
}

export interface Comment {
    name: string;
    comment: string;
}
