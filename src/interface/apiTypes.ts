export interface SearchProductResponse {
  result?: ProductInfo[];
  status: string;
  result2?: number;
  message: string;
}

export interface ProductInfo {
  MCODE: string;
  MENUCODE: string;
  DESCA: string;
  MRP: number;
}
