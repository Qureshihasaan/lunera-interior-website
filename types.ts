export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}
