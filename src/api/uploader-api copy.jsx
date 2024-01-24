import axios from "./axios";

const USERS_API_URL = "/files";

const uploadService = async (file) => {
  if (file) {
    const response = await axios.post(`${USERS_API_URL}`, file);
    return response?.data?.data;
  }
  return null;
};

export { uploadService };
