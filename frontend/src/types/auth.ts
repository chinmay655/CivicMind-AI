// ================================
// Authentication Types
// ================================

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  full_name: string;
  email: string;
  phone?: string;
  password: string;
}

export interface User {
  id: number;
  full_name: string;
  email: string;
  phone?: string | null;
  is_active: boolean;
  is_verified: boolean;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  user: User;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;

  login: (data: LoginRequest) => Promise<void>;
  logout: () => void;

  register: (data: RegisterRequest) => Promise<void>;

  refreshUser: () => Promise<void>;
}