export default interface IProduct {
    name: string;
    category: string;
    price: number;
    tags: string[];
    image: string;
    description: string;
    available: boolean;
    isNew: boolean;
  }