import { getProfile } from "../uitls/user-helper";
import axios from "./axios";

const USERS_API_URL = "/users";

const getUsers = async () => {
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

const isUserExistService = async (username) => {
  if (username) {
    const response = await axios.get(
      `${USERS_API_URL}/isexist?username=${username}`,
      {
        withCredentials: true,
      }
    );
    return response?.data?.data;
  }
  return null;
};

const registerUserService = async (name, username, password) => {
  if (name && username && password) {
    const response = await axios.post(
      `${USERS_API_URL}/register`,
      {
        username,
        password,
        name,
      },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    return response?.data?.data;
  }
  return null;
};

export { getUsers, isUserExistService, registerUserService };
