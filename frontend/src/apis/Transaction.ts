import { ITransaction } from '../interfaces/ITransaction';
import ApiBase from './ApiBase';

class API extends ApiBase<ITransaction> {
  async get({ id }: { id?: number }) {
    let url = this.resourceUrl;

    if (Boolean(id)) {
      url = `${this.resourceUrl}/${id}`;
    }

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
}

export const TransactionApi = new API('/transactions');
