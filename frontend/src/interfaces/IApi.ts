import { AxiosInstance } from 'axios';

export interface IApiBase {
  resourceUrl: string | null;
  axiosInstance: AxiosInstance;
}
