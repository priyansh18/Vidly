import http from "./httpService";
import { apiUrl } from "../config.json";
import { getCurrentUser } from "./authService";
import jwtDecode from "jwt-decode";

const apiEndPoint = apiUrl + "/auth";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem("token", jwt);
}

export function logout(email, password) {
  localStorage.setItem("token");
}

export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
    // console.log(user);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
};
