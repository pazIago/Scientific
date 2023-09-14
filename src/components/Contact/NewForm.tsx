import React from "react";

const NewForm = () => {
  const postmark = require("postmark");
  const serverToken = `${process.env.POST_TOKEN}`;
  const client = new postmark.ServerClient(serverToken);
  function sendMail() {
    client.sendEmail({
      From: "marketing@scientific.com.br",
      To: "iagopaz@hotmail.com.br",
      ReplyTo: "artigos@scientific.com.br",
      Subject: "Test Postmark",
      TextBody: "Hello from Postmark!",
    });
  }
  return (
    <div>
      <button onClick={() => sendMail()}>Teste de Envio</button>
    </div>
  );
};

export default NewForm;
