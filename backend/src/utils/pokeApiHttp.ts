import axios, { AxiosError } from "axios";
console.log(process.env.URL_API_POKEMON)
const axiosPokeApi = axios.create({
    baseURL: process.env.URL_API_POKEMON,
    timeout: 40000,
    headers: {
        "Content-Type": "application/json",
    },
})
const httpPokeApi = {
   get: async <T>(url: string, config = {}): Promise<T> => {
    try {
      const response = await axiosPokeApi.get<T>(url, config);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error; // re-throw so caller can handle if needed
    }
  },
};

function handleError(error: unknown) {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    console.error("API Error:", axiosError.response?.status, axiosError.response?.data);
  } else {
    console.error("Unexpected Error:", error);
  }
  // Optional: show toast notification, log to external service, etc.
}

export { httpPokeApi } 