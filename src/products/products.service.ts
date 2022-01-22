import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getHelloProduct(): string {
    return 'Hello Products!';
  }
}
