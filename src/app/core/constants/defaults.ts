import { Resource, ResponseItem } from '../models/response.model';

export const ResponseListDefault: { [key: string]: ResponseItem } =  {
    videos: {
        isLoading: false,
        data: [],
    },
    courses: {
        isLoading: false,
        data: [],
    },
    blogs: {
        isLoading: false,
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
