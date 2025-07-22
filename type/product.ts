export interface Product {
  id: string;
  title: string;
  content: string;
  file_url: string;
  created_at: string;
  updated_at: string;
}

export interface Inquiry {
  id: string;
  title: string;
  name: string;
  email: string;
  password: string;
  content: string;
  created_at: string;
  updated_at: string;
}
