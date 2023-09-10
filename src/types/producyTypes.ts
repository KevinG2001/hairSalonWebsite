export type Product = {
  categoryImg: any;
  brand: any;
  category: string;
  image: string | undefined;
  date: string | number | Date;
  id: number | null;
  name: string | null;
  description: string | null;
  price?: string | null;
  quantity?: number | null;
};
