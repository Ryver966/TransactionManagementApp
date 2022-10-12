import { ITransaction } from '../interfaces/ITransaction';
import ApiBase from './ApiBase';

interface IGetReqArgs {
  id?: number;
  params?: string;
}

class API extends ApiBase<ITransaction> {
  async get({ id, params }: IGetReqArgs) {
    let url = this.resourceUrl;

    if (Boolean(id)) {
      url = `${this.resourceUrl}/${id}`;
    }

    if (params) url += `?${params}`;

    const response = await this.axiosInstance.get(url);
    return response.data;
  }

  async create(data: Omit<ITransaction, 'id' | 'date'>) {
    const body = {
      ...data,
      date: new Date(),
    };
    const response = await this.axiosInstance.post(this.resourceUrl, body);

    return response;
  }

  async delete({ id }: { id: number }) {
    const response = await this.axiosInstance.delete(`${this.resourceUrl}/${id}`);

    return response;
  }
}

export const TransactionApi = new API('/transactions');
