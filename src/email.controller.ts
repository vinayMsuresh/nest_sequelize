import { Controller, Get, Query } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import * as bcrypt from 'bcrypt';
@Controller('email')
export class EmailController {
  constructor(private emailService: MailerService) {}

  @Get('post-mail')
  async plainTextEmail(@Query('toemail') toEmail) {
    const res = await this.emailService.sendMail({
      to: toEmail,
      from: 'vinay.suresh@neosoftmail.com',
      subject: 'Plain Text Email from Vinay ✔',
      text: 'This is nestJS email confirmation',
    });
    return res;
  }

  @Get()
  async encryption(@Query('name') name) {
    // const iv = randomBytes(16);
    // const password = 'Password used to generate key';
    // const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    // const cipher = createCipheriv('aes-256-ctr', key, iv);
    // const textToEncrypt = 'Nest';
    // const encryptedText = Buffer.concat([
    //   cipher.update(textToEncrypt),
    //   cipher.final(),
    // ]);
    // const decipher = createDecipheriv('aes-256-ctr', key, iv);
    // const decryptedText = Buffer.concat([
    //   decipher.update(encryptedText),
    //   decipher.final(),
    // ]);
    // return decryptedText;

    const salt = await bcrypt.genSaltSync();

    const hash = await bcrypt.hashSync(name, salt);
    return hash;
  }
}
