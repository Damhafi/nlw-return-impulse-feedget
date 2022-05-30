import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "563fa5de1c7b43",
    pass: "9711a28a24b252",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Yusuf Feedget <yusufhafi12@hotmail.com>",
      to: "SEU PAI <yusufmilla@gmail.com>",
      subject,
      html: body,
    });
  }
}
