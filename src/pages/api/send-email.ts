import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { SendMailOptions } from "nodemailer";

interface FormType {
  name: string;
  message: string;
  email: string;
  phone: string;
  /*select: string;
  files: {
    0: {
      name: string;
      type: string;
    };
  };*/
}

export default async function SendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data: FormType = req.body;
    const { name, message, email, phone } = data;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "marketing@scientific.com.br",
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailData: SendMailOptions = {
      to: "artigos@scientific.com.br",
      from: "artigos@scientific.com.br",
      cc: "marketing@scientific.com.br",
      subject: `Solicitação - Orçamento`,
      replyTo: email,
      /*attachment: [
        {
          filename: files[0].name,
          contentType: files[0].type,
        },
      ],*/
      html: `De: ${name} <br> Remetente: ${email} <br> telefone: ${phone} <br> Mensagem: <br> ${message}`,
    };

    try {
      const result = await transporter.sendMail(mailData);
      res.status(200).json(result);
      return result;
    } catch (err) {
      console.error(err);
      res.status(500).end();
    }
  }
}
