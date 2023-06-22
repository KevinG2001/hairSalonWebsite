export type Product = {
  image: string | undefined;
  date: string | number | Date;
  id: number | null;
  name: string | null;
  description: string | null;
  price?: number | null;
};
