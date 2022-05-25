import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloWord(): string {
    return 'Hola Mundo!';
  }
}
