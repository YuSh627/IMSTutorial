export interface LoginResponse {
  status?: string;
  result:
    | {
        token: string;
      }
    | string;
  message?: string;
}
