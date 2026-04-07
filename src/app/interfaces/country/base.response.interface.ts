export interface IBaseResponse<T> {
  data: T;
  error: boolean;
  msg: string;
}
