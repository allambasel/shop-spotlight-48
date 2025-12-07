export interface Store {
  id: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  url: string;
  category: string;
  rating: number;
  productCount: number;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  openingHours?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

export interface Product {
  id: string;
  storeId: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
}

export interface Offer {
  id: string;
  storeId: string;
  title: string;
  description: string;
  discount: number;
  validUntil: string;
}
