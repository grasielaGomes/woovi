interface PixI {
  amount: number,
  cashback?: number,
  discount?: number
}

type PixOptionsType = {[key: string]: PixI}

export const PIX_OPTIONS: PixOptionsType = {
  "1": {
    amount: 30500.0,
    cashback: 3
  },
  "2": {
    amount: 15300.0
  },
  "3": {
    amount: 10196.66
  },
  "4": {
    amount: 7725.0,
    discount: 3
  },
  "5": {
    amount: 6300.0
  },
  "6": {
    amount: 5283.33
  },
  "7": {
    amount: 4542.85
  }
};