import { HttpService } from '@feedma/http-service';
import { endpoints } from '../config/services.js';

export class BaseService extends HttpService {
  constructor(requestInterceptors = [], responseInterceptors = []) {
    super(requestInterceptors, responseInterceptors);

    this.globalRequestInterceptors = [];
    this.globalResponseInterceptors = [];
    this.config = endpoints.giphy.config;
  }
}
