import {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

import { authService } from "../services/authService";

import {
  AuthContextType,
  AuthState,
  LoginRequest,
  RegisterRequest,
} from "../types/auth";

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const initialState: AuthState = {
  user: authService.getStoredUser(),
  token: authService.getStoredToken(),
  isAuthenticated: authService.isAuthenticated(),
  loading: true,
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  /**
   * Restore user session when the application loads
   */
  const restoreSession = useCallback(async () => {
    try {
      const token = authService.getStoredToken();

      if (!token) {
        setAuthState((prev) => ({
          ...prev,
          loading: false,
        }));
        return;
      }

      const user = await authService.getCurrentUser();

      setAuthState({
        user,
        token,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to restore session:", error);

      authService.logout();

      setAuthState({
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      });
    }
  }, []);

  useEffect(() => {
    restoreSession();
  }, [restoreSession]);

  /**
   * Login user
   */
  const login = async (credentials: LoginRequest) => {
    const response = await authService.login(credentials);

    setAuthState({
      user: response.user,
      token: response.access_token,
      isAuthenticated: true,
      loading: false,
    });
  };

  /**
   * Register new user
   */
  const register = async (userData: RegisterRequest) => {
    await authService.register(userData);
  };

  /**
   * Logout user
   */
  const logout = () => {
    authService.logout();

    setAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
    });
  };

  /**
   * Refresh logged-in user information
   */
  const refreshUser = async () => {
    const user = await authService.getCurrentUser();

    setAuthState((prev) => ({
      ...prev,
      user,
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        register,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}