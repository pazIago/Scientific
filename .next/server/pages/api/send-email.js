"use strict";
(() => {
var exports = {};
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 1093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SendEmail)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/send-email.ts

async function SendEmail(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const { name , message , email , phone  } = data;
        const transporter = external_nodemailer_default().createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "marketing@scientific.com.br",
                pass: process.env.SMTP_PASSWORD
            }
        });
        const mailData = {
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
      ],*/ html: `De: ${name} <br> Remetente: ${email} <br> telefone: ${phone} <br> Mensagem: <br> ${message}`
        };
        try {
            const result = await transporter.sendMail(mailData);
            res.status(200).json(result);
            return result;
        } catch (err) {
            ;
            res.status(500).end();
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1093));
module.exports = __webpack_exports__;

})();