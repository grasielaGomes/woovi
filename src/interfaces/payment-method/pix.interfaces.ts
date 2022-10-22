export interface PixI {
  amount: number;
  cashback?: number;
  flag?: string;
  installment: number;
  total?: number;
}

export type PixOptionsType = PixI[];
