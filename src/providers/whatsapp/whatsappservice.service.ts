import { Injectable } from '@nestjs/common';
import { create, Whatsapp } from 'venom-bot';
@Injectable()
export class WhatsappService {
  private client: Whatsapp;
  constructor() {
    create('Support', (statusSession, session) => {
      console.log('Status Session: ', statusSession);
      console.log('Session name: ', session);
    })
      .then((client) => {
        this.client = client;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async listeningOnMessage() {
    await this.client
      .onMessage((message) => console.log(message))
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
  }
  async sendText(texto: string) {
    try {
      console.log('rfrfff');
      const teste = await this.client.sendText('5596991215506@c.us', texto);
      console.log('release');
      console.log(teste);
    } catch (error) {
      console.log(error);
    }
    //const teste = await this.client.sendText('5596991215506@c.us', texto)
    // await this.client
    //   .sendText('5596991215506@c.us', texto)
    //   .then((result) => {
    //     console.log('Result: ', result);
    //   })
    //   .catch((erro) => {
    //     console.error('Error when sending: ', erro);
    //   });
  }
}
