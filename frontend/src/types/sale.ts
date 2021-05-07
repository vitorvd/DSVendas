import { Seller } from "./seller"

export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}

export type SalePage = {
  content?: Sale[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  numberOfElements?: number;
  size?: number;
  number: number;
  empty?: boolean;
}

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
  sellerName: string;
  visited: number;
  deals: number;
}