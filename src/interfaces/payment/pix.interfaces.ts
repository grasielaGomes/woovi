export interface PixI {
  amount: number;
  cashback?: number;
  discount?: number;
  installment: number;
  total?: number;
}

export type PixOptionsType = PixI[];
