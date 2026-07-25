import api from "./axios";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  User,
} from "../types/auth";

export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>(
      "/auth/login",
      credentials
    );

    return response.data;
  },

  register: async (user: RegisterRequest): Promise<User> => {
    const response = await api.post<User>(
      "/auth/register",
      user
    );

    return response.data;
  },

  me: async (): Promise<User> => {
    const response = await api.get<User>("/auth/me");

    return response.data;
  },
};