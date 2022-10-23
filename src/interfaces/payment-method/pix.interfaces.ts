export interface PixI {
  amount: number | string;
  cashback?: number;
  cet: number;
  flag?: string;
  installment: number;
  total: number | string;
}

export type PixOptionsType = PixI[];
