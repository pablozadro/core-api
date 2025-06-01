export interface CoreApiError {
  status: number;
  msg: string;
  cause: any;
}

export interface CoreApiResponse {
  msg: string;
  payload: any;
  error: CoreApiError | null;
}