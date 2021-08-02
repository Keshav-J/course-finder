import { Resource, ResponseItem } from '../models/response.model';

export enum ResourceTypes {
    videos = 'videos',
    courses = 'courses',
    blogs = 'blogs',
}

export const ResponseListDefault: { [key: string]: ResponseItem } =  {
    videos: {
        isLoading: false,
        type: ResourceTypes.videos,
        data: [],
    },
    courses: {
        isLoading: false,
        type: ResourceTypes.courses,
        data: [],
    },
    blogs: {
        isLoading: false,
        type: ResourceTypes.blogs,
        data: [],
    },
};

export const ResourceDefault: Resource = {
    id: '',
    title: '',
    channel: '',
    description: '',
    rating: 0,
    image: '',
    comments: []
};
