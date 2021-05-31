import { Test, TestingModule } from '@nestjs/testing';
import { SocketGateway } from './socketio.gateway';

describe('SrcService', () => {
  let service: SocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocketGateway],
    }).compile();

    service = module.get<SocketGateway>(SocketGateway);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
