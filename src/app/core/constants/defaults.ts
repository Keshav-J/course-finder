import { ResponseItem } from '../models/response.model';

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
