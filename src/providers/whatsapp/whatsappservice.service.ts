import { Injectable } from '@nestjs/common';
import { create, Whatsapp, Contact, Id } from 'venom-bot';
@Injectable()
export class WhatsappService {
  private client: Whatsapp;
  constructor() {
    create('Support', (statusSession, session) => {
      console.log('Status Session: ', statusSession);
      console.log('Session name: ', session);
    })
      .then(async (client) => {
        this.client = client;
        //console.log(await this.client.getAllChats());
        // await this.client
        //   .sendImage(
        //     '559691215506@c.us',
        //     '/home/jonathan/Downloads/teste.jpg',
        //     'teste',
        //     'tetste',
        //   )
        //   .then((response) => {
        //     console.log(response);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

        // console.log('ffff');
        // await this.client
        //   .sendVoice('559691215506@c.us', '/home/jonathan/Downloads/teste.mp3')
        //   .then((response) => {
        //     console.log(response);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
        // console.log(
        //   await this.client.getBatteryLevel(),
        //   await this.client.onStreamChange((state) => {
        //     console.log(state);
        //   }),
        // );
        process.on('SIGINT', function () {
          client.close();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async closeSession() {
    await this.client.close();
  }

  async getContactList(): Promise<Contact[]> {
    return await this.client.getAllContacts();
  }
  async addNewContact(ContactId: Id) {
    await this.client.getContact(ContactId.id);
  }
  async sendVoiceMessage(to: string, filePath: string) {
    await this.client.sendVoice(to, filePath);
  }
  async sendStickerMessage(to: string, filePath: string) {
    await this.client.sendImageAsSticker(to, filePath);
  }
  async sendImageMessage(
    to: string,
    filePath: string,
    filename?: string,
    caption?: string,
  ) {
    await this.client.sendImage(to, filePath, filename, caption);
  }
  async sendVideoMessage(
    to: string,
    path: string,
    filename: string,
    caption: string,
  ) {
    await this.client.sendVideoAsGif(to, path, filename, caption);
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
