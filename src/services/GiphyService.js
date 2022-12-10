import { BaseService } from './BaseService.js';
import { endpoints } from '../config/services.js';

export class GiphyService extends BaseService {
  async findGifs(gif) {
    const API_KEY = endpoints.giphy.config.apiKey;
    const params = {
      api_key: API_KEY,
      q: gif,
    };

    const { data } = await this.client.get(`/search`, { params });

    return data;
  }
}
