import { Module } from '@nestjs/common';
import { WhatsappService } from './whatsappservice.service';
@Module({ providers: [WhatsappService], exports: [WhatsappService] })
export class WhatsappModule {}
