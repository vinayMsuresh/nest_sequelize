import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import HelloEvent from './events/hello.events';

@Injectable()
export class AppService {
  constructor(private eventEmitter: EventEmitter2) {}

  getHello(): string {
    this.eventEmitter.emit('hello-created', new HelloEvent('hello fetched'));
    return 'Hello World!';
  }

  @OnEvent('hello-created')
  handleEvent(payload: HelloEvent) {
    console.log(payload.str);
  }

  createHello(): string {
    this.eventEmitter.emit('hello-created', new HelloEvent('hello created'));
    return 'Hello event created';
  }
}
