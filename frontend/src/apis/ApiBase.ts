import axios, { AxiosInstance } from 'axios';
import { IApiBase } from '../interfaces/IApi';

class ApiBase<EntityType> implements IApiBase {
  constructor(resourceUrl: string) {
    this.resourceUrl = resourceUrl;

    const baseURL = 'http://localhost:3000';
    const headers = { 'Content-Type': 'application/json' };

    this.axiosInstance = axios.create({
      baseURL,
      headers,
    });
  }

  resourceUrl: string = null as any;
  axiosInstance: AxiosInstance = null as any;
}

export default ApiBase;
