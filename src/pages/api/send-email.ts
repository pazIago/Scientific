import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface FormType {
  name: string;
  message: string;
  email: string;
  phone: string;
  select: string;
  files: {
    0: {
      name: string;
      type: string;
    };
  };
}

export default async function SendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // TODO tem que fazer o cabeçalho aceitar aqueles tipos de arquivo e adicionar ao email

    const data: FormType = req.body; // TODO TEM QUE TIPAR
    const { name, message, email, phone, select, files } = data;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "marketing@scientific.com.br",
        pass: process.env.SMTP_PASSWORD,
      },
    });

    //TODO criar um template para o email adicionando os dados do form
    const mailData = {
      to: "marketing@scientific.com.br",
      from: "marketing@scientific.com.br",
      cc: "iagopaz52@gmail.com, iagopaz@hotmail.com.br",
      subject: `Solicitação - ${select}`,
      attachment: [
        {
          filename: files[0].name,
          contentType: files[0].type,
        },
      ],
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
