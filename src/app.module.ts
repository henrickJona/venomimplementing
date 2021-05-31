import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsappModule } from './providers/whatsapp/whatsapp.module';
import { WhatsappService } from './providers/whatsapp/whatsappservice.service';
import { SocketioModule } from './providers/socketio/socketio.module';

@Module({
  imports: [WhatsappModule, SocketioModule],
  controllers: [AppController],
  providers: [AppService, WhatsappService],
})
export class AppModule {}
