import axios from "axios";

export const loginUser = async ({ username, password }) => {
  try {
    return await axios.post("https://registro-login.onrender.com/auth/login", {
      username,
      password,
    });
  } catch (error) {
    throw error;
  }
};
