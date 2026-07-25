import { authApi } from "../api/authApi";
import { storage } from "../utils/storage";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  User,
} from "../types/auth";

const ACCESS_TOKEN_KEY = "access_token";
const USER_KEY = "user";

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await authApi.login(credentials);

    storage.setToken(response.access_token);
    storage.setUser(response.user);

    return response;
  },

  async register(data: RegisterRequest): Promise<User> {
    return await authApi.register(data);
  },

  async getCurrentUser(): Promise<User> {
    return await authApi.me();
  },

  logout(): void {
    storage.clear();
  },

  getStoredToken(): string | null {
    return storage.getToken();
  },

  getStoredUser(): User | null {
    return storage.getUser();
  },

  isAuthenticated(): boolean {
    return !!this.getStoredToken();
  },
};