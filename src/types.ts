export interface LiteApiError {
  status: number;
  msg: string;
  cause: any;
}

export interface LiteApiResponse {
  msg: string;
  payload: any;
  error: LiteApiError | null;
}