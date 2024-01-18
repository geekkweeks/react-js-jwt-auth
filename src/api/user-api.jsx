import { getProfile } from "../uitls/user-helper";
import axios from "./axios";

const USERS_API_URL = "/users";

export const getUsers = async () => {
  const profile = getProfile();
  if (Object.keys(profile).length > 0) {
    const response = await axios.get(`${USERS_API_URL}`, {
      //   headers: { Authorization: `Bearer ${profile.accessToken}` },
      withCredentials: true,
    });
    return response?.data?.data;
  }
  return null;
};
