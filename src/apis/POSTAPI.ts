import axiosClient from ".";

interface Post {
  id?: number;
  title: string;
  content: string;
  createdAt?: string;
  modifiedAt?: string;
  author?: string;
}

const POST_API = {
  CREATE: async (data: Post) => {
    const response = await axiosClient.post(`/articles`, data);
    return response.data;
  },
  READ_ALL: async () => {
    const response = await axiosClient.get(`/articles`);
    return response.data;
    // const response = await axiosClient.get(``);
    // return response.data.articles;
  },
  READ_ONE: async (id: number) => {
    const response = await axiosClient.get(`/articles/${id}`);
    // return response.articles.id;
    // const response = await axiosClient.get(``);
    return response.data;
  },
  UPDATE: async (id: number, data: Post) => {
    const response = await axiosClient.patch(`articles/${id}`, data);
    return response.data;
  },
  DELETE: async (id: number) => {
    await axiosClient.delete(`articles/${id}`);
  },
};

export default POST_API;
