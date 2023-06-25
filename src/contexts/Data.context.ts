import { createContext } from "react";

export interface DataInterface {
  canal: any;
  qty: any;
}

export const DataContext = createContext<any | null>(null);
