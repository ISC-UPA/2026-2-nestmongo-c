// Se puede borrar este archivo
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!. ISC/TIID. .';
  }
}
