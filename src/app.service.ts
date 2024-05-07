import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<b>Hello World from Nest.js!</b>';
  }
}
