import axiosClient from ".";

interface Post {
  title: string;
  content: string;
}

const POST_API = {
  CREATE: async (data: Post) => {
    const response = await axiosClient.post(`/articles`, data);
    return response.data;
  },
  READ_ALL: async () => {
    const response = await axiosClient.get(`/articles/`);
    return response.data;
  },
  READ_ONE: async (id: number) => {
    const response = await axiosClient.get(`/articles/${id}`);
    return response.data;
  },
  UPDATE: async (id: number, data: Post) => {
    const response = await axiosClient.patch(`articles/${id}`, data);
    return response.data;
  },
  DELETE: async (id: number) => {
    const response = await axiosClient.delete(`articles/${id}`);
    return response.data;
  },
};

export default POST_API;
