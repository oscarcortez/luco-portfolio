import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {
  findOne(id: number): string {
    return `This action returns a #${id} helloWorld`;
  }
}
