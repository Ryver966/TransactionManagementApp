import { ITransaction } from '../interfaces/ITransaction';
import ApiBase from './ApiBase';

class API extends ApiBase<ITransaction> {
  async get({ id }: { id?: number }) {
    let url = this.resourceUrl;

    if (Boolean(id)) {
      url = `${this.resourceUrl}/${id}`;
    }

    const response = await this.axiosInstance.get(url);
  }
}

export const AssetsApi = new API('/transactions');
