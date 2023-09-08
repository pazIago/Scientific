"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5632:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Form)
/* harmony export */ });
/* unused harmony export FormSchema */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1656);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(661);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var _Global_plane__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2205);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__, _utils_http__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__]);
([zod__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__, _utils_http__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const TOAST_CONFIG = {
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
};
const FormSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    //TODO: Faça suas regras e mensagems personalizadas
    name: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(3, "M\xednimo de tr\xeas caracteres").max(100),
    email: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().email("Email inv\xe1lido"),
    phone: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(11, "Digite apenas os n\xfameros, com DDD incluso").max(11, "Digite apenas os n\xfameros, com DDD incluso"),
    message: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(10, "Inclua informa\xe7\xf5es sobre o projeto").max(500, "Limite de caracteres: 500")
});
function Form() {
    const toastLoadingId = (0,react__WEBPACK_IMPORTED_MODULE_4__.useId)();
    const toastErrorId = (0,react__WEBPACK_IMPORTED_MODULE_4__.useId)();
    const { register , reset , watch , handleSubmit , formState: { errors , isSubmitting  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__.zodResolver)(FormSchema),
        mode: "all",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    });
    const validateForm = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        const errorToast = (message)=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)(message, {
                ...TOAST_CONFIG,
                autoClose: 1500,
                type: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.TYPE.WARNING,
                toastId: toastErrorId
            });
        if (errors.name?.message) {
            errorToast(errors.name.message);
        }
        if (errors.email?.message) {
            errorToast(errors.email.message);
        }
        if (errors.phone?.message) {
            errorToast(errors.phone.message);
        }
        if (errors.message?.message) {
            errorToast(errors.message.message);
        }
    }, [
        errors.email,
        errors.message,
        errors.name,
        errors.phone,
        toastErrorId
    ]);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async (data)=>{
        try {
            const loadingToast = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)("E-mail j\xe1 est\xe1 sendo enviado!", {
                    ...TOAST_CONFIG,
                    autoClose: 12000,
                    type: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.TYPE.INFO,
                    toastId: toastLoadingId
                });
            loadingToast();
            await _utils_http__WEBPACK_IMPORTED_MODULE_5__/* .http.post */ .d.post("send-email", data);
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.update(toastLoadingId, {
                ...TOAST_CONFIG,
                render: "E-mail enviado com Sucesso!",
                type: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.TYPE.SUCCESS,
                autoClose: 2500
            });
            reset();
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.update(toastLoadingId, {
                ...TOAST_CONFIG,
                render: "Erro ao enviar E-mail!",
                type: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.TYPE.ERROR,
                autoClose: 2500
            });
            ;
        }
    }, [
        reset,
        toastLoadingId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {
                className: "z-50",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "max-w-xl mx-auto flex flex-col gap-1 [&>div]:flex [&>div]:flex-col [&_span]:text-red-400 [&_span]:text-left [&_span]:block [&_span]:h-[20px] [&_span]:text-sm [&_input:not([type='file'])]:border [&_input:not([type='file'])]:px-4 [&_input:not([type='file'])]:outline-none [&_input:not([type='file'])]:py-2 [&_textarea]:border [&_textarea]:outline-none",
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "transition hover:border-sciblue focus:ring-sciblue focus:ring-1 focus:border-sciblue",
                                type: "text",
                                placeholder: "Nome",
                                id: "name",
                                ...register("name")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: errors.name?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "transition focus:ring-sciblue focus:ring-1 focus:border-sciblue hover:border-sciblue",
                                type: "email",
                                placeholder: "Email",
                                ...register("email")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: errors.email?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "transition focus:ring-sciblue focus:ring-1 focus:border-sciblue hover:border-sciblue",
                                type: "phone",
                                placeholder: "Telefone",
                                ...register("phone")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: errors.phone?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid items-center grid-cols-2 gap-6 max-sm:gap-0 max-sm:grid-cols-1 justify-items-start"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                className: "px-4 py-2 transition focus:ring-sciblue focus:ring-1 focus:border-sciblue hover:border-sciblue",
                                placeholder: "Mensagem",
                                ...register("message")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: errors.message?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "submit",
                        className: "flex items-center gap-2 px-6 py-3 mt-4 font-medium text-white w-fit bg-sciblue",
                        disabled: isSubmitting,
                        onClick: validateForm,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Global_plane__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                            " Enviar"
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Global_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5232);
/* harmony import */ var _Header_SocialIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(651);
/* harmony import */ var _Global_facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8377);
/* harmony import */ var _Global_instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8975);
/* harmony import */ var _Global_linkedin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1753);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);







const Footer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "bg-[#395962]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-[1140px] mx-auto px-4 py-16 flex flex-wrap max-md:grid max-md:gap-6 max-md:justify-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-1 text-sm text-white max-md:mb-8 max-md:items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative mb-2 w-[204px] h-[44px] ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Global_Logo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    className: "object-cover",
                                    color: "pb"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Rua Jo\xe3o Abbot, 109"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Cep 90460-150 - Porto Alegre - RS"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Telefone: (51) 3012.0575 / (51) 99977.3601"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center justify-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mb-2 text-white uppercase",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Siga a Scientific"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_SocialIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        link: "https://www.facebook.com/ScientificLinguagem/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Global_facebook__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_SocialIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        link: "https://www.instagram.com/scientific_linguagem/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Global_instagram__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_SocialIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        link: "https://www.linkedin.com/company/scientific-linguagem/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Global_linkedin__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mb-2 text-white uppercase",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Trabalhe Conosco"
                                })
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                className: "px-6 py-3 text-center text-white transition-all bg-sciblue min-w-fit hover:scale-105",
                                href: "mailto:maristela@scientific.com.br",
                                children: "Mande seu curr\xedculo"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto mt-10 max-w-fit",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "block w-full pb-2 text-sm text-center text-white",
                    children: [
                        "\xa9 Scientific Linguagem. Todos os direitos reservados. Desenvolvido por",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                            className: "ml-1 text-sciblue",
                            href: "https://vinceveras.com/",
                            children: "Vince Veras"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 5232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Logo = ({ color , className  })=>{
    if (color === "color") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            className: className,
            src: "/assets/logo_color.webp",
            alt: "logo",
            fill: true
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            className: className,
            src: "/assets/logo_pb.png",
            alt: "logo",
            fill: true
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 4269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Stripe = ({ text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-center w-full bg-sciblue",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            className: "text-3xl font-bold text-center text-white uppercase p-11 max-sm:text-2xl",
            children: text
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stripe);


/***/ }),

/***/ 6823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Title = ({ children , hasDetail  })=>{
    if (hasDetail) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "text-[2rem] max-md:text-2xl text-sciblue uppercase font-bold after:block after:bg-sciblue after:h-[6px] after:w-[36px] after:mt-1 after:content-['']",
        children: children
    });
    else return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "text-[2rem] max-md:text-2xl text-sciblue uppercase font-bold",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 8377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const FBSvg = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        height: "17px",
        width: "17px",
        xmlns: "http://www.w3.org/2000/svg",
        "data-selected": "true",
        "data-label-id": "0",
        "data-metatip": "true",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FBSvg);


/***/ }),

/***/ 8975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const INSvg = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 448 512",
        height: "17px",
        width: "17px",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INSvg);


/***/ }),

/***/ 1753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const LKSvg = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 448 512",
        height: "17px",
        width: "17px",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LKSvg);


/***/ }),

/***/ 2205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const FBSvg = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "17",
        height: "17",
        viewBox: "0 0 30 30",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                clipPath: "url(#clip0_105_212)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M27.8905 0.1875L0.732321 15.8555C-0.328226 16.4648 -0.19346 17.9414 0.861227 18.3867L7.08974 21L23.9237 6.16406C24.246 5.87695 24.703 6.31641 24.4276 6.65039L10.3124 23.8477V28.5645C10.3124 29.9473 11.9823 30.4922 12.8026 29.4902L16.5233 24.9609L23.8241 28.0195C24.6562 28.3711 25.6054 27.8496 25.7577 26.9531L29.9765 1.64063C30.1757 0.457031 28.9042 -0.398438 27.8905 0.1875Z",
                    fill: "currentColor"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_105_212",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "30",
                        height: "30",
                        fill: "currentColor"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FBSvg);


/***/ }),

/***/ 651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const SocialIcon = ({ children , link  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "flex justify-center items-center text-white bg-sciblue h-[34px] w-[34px] hover:scale-90 transition-all",
        href: link,
        passHref: true,
        target: "_blank",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialIcon);


/***/ }),

/***/ 8925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header/MenuItem/index.tsx


const MenuItem = ({ text , anchor  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        className: "inline-flex justify-center items-center p-4 text-sm transition-all border-b-4 border-b-transparent hover:text-sciblue hover:border-b-4 hover:border-b-sciblue",
        href: anchor,
        children: text
    });
};
/* harmony default export */ const Header_MenuItem = (MenuItem);

// EXTERNAL MODULE: ./src/components/Header/SocialIcon/index.tsx
var SocialIcon = __webpack_require__(651);
// EXTERNAL MODULE: ./src/components/Global/facebook.tsx
var facebook = __webpack_require__(8377);
// EXTERNAL MODULE: ./src/components/Global/instagram.tsx
var instagram = __webpack_require__(8975);
// EXTERNAL MODULE: ./src/components/Global/linkedin.tsx
var linkedin = __webpack_require__(1753);
// EXTERNAL MODULE: ./src/components/Global/Logo.tsx
var Logo = __webpack_require__(5232);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx







const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: "sticky top-0 z-50 w-full bg-white shadow-sm",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-[1140px] mx-auto p-4 flex justify-between items-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "relative w-[146px] h-[31px] max-sm:hidden",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Logo/* default */.Z, {
                        className: "object-cover",
                        color: "color"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                    className: "max-sm:top-0 max-sm:sticky max-sm:w-screen max-sm:bg-white max-sm:flex max-sm:justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(Header_MenuItem, {
                            anchor: "#sobre",
                            text: "Sobre"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(Header_MenuItem, {
                            anchor: "#servicos",
                            text: "Servicos"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(Header_MenuItem, {
                            anchor: "#contato",
                            text: "Contato"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: "flex gap-3 max-sm:hidden",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(SocialIcon/* default */.Z, {
                            link: "https://www.facebook.com/ScientificLinguagem/?locale=pt_BR",
                            children: /*#__PURE__*/ jsx_runtime.jsx(facebook/* default */.Z, {})
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(SocialIcon/* default */.Z, {
                            link: "https://www.instagram.com/scientific_linguagem/",
                            children: /*#__PURE__*/ jsx_runtime.jsx(instagram/* default */.Z, {})
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(SocialIcon/* default */.Z, {
                            link: "https://www.linkedin.com/company/scientific-linguagem/about/",
                            children: /*#__PURE__*/ jsx_runtime.jsx(linkedin/* default */.Z, {})
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 4591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Hero = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-[420px] max-sm:h-[200px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative flex items-center justify-center h-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: "object-cover z-[-1]",
                    src: "/assets/HERO2.webp",
                    alt: "hero banner",
                    fill: true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    className: "z-10 text-6xl font-medium text-center text-white max-md:text-5xl max-sm:text-2xl",
                    children: [
                        "PRECISAMENTE O QUE ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " VOC\xca QUER DIZER"
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 4309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const InfoBlock = ({ position , image , children , title  })=>{
    switch(position){
        case "left":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-8 max-md:flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative flex items-center justify-center w-full h-full min-h-[404px] max-md:min-h-[280px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-5xl font-semibold text-white uppercase max-md:text-[40px]",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "object-cover z-[-1]",
                                src: image,
                                fill: true,
                                alt: ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col max-w-[444px] max-md:max-w-full justify-center gap-4 ml-[35px] mr-[75px]",
                        children: children
                    })
                ]
            });
        case "right":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-8 max-md:flex-col-reverse",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col max-md:max-w-full justify-center max-w-[444px] gap-4 ml-[35px] mr-[75px]",
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative flex items-center justify-center w-full h-full min-h-[404px] max-md:min-h-[280px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-5xl font-semibold text-white uppercase max-md:text-[40px]",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "object-cover z-[-1]",
                                src: image,
                                fill: true,
                                alt: ""
                            })
                        ]
                    })
                ]
            });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoBlock);


/***/ }),

/***/ 6314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InstagramFeed)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Instagram/Frame/index.tsx



const Frame = ({ permalink , media_url  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: permalink,
        className: "relative block aspect-square w-full max-w-[368px] min-w-[300px] border-[1px]",
        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
            className: "object-cover object-center",
            src: media_url,
            alt: "",
            fill: true
        })
    });
};
/* harmony default export */ const Instagram_Frame = (Frame);

;// CONCATENATED MODULE: ./src/components/Instagram/index.tsx


function InstagramFeed({ posts  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex flex-wrap justify-center w-full",
        children: posts.length > 0 && posts.map(({ id , permalink , media_url , thumbnail_url  })=>id === "17991624400828214" ? /*#__PURE__*/ jsx_runtime.jsx(Instagram_Frame, {
                permalink: permalink,
                media_url: "/assets/video.gif"
            }, id) : /*#__PURE__*/ jsx_runtime.jsx(Instagram_Frame, {
                permalink: permalink,
                media_url: thumbnail_url ? thumbnail_url : media_url
            }, id))
    });
}


/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8925);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4591);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Global_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6823);
/* harmony import */ var _components_Instagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6314);
/* harmony import */ var _components_Global_instagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8975);
/* harmony import */ var _components_Global_Stripe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4269);
/* harmony import */ var _components_Infoblock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4309);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4871);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Contact_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5632);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Contact_Form__WEBPACK_IMPORTED_MODULE_11__, axios__WEBPACK_IMPORTED_MODULE_12__]);
([_components_Contact_Form__WEBPACK_IMPORTED_MODULE_11__, axios__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Home({ data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "max-w-[1140px] mx-auto max-md:pt-24 max-md:-mt-24 my-20 -mt-20 pt-40 grid grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-0",
                id: "sobre",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative block min-h-[210px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "object-cover ",
                            src: "/assets/BLOCO_1.webp",
                            fill: true,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-10 pl-8 pr-4 max-md:px-4 [&>h2]:mb-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Global_Title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                children: "Sobre a Scientific"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "A ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Scientific"
                                    }),
                                    " atua desde 1998 na revis\xe3o, tradu\xe7\xe3o, edi\xe7\xe3o, padroniza\xe7\xe3o e formata\xe7\xe3o de textos em portugu\xeas e ingl\xeas nas Ci\xeancias da Sa\xfade e compreende duas entidades corporativas — uma voltada para produ\xe7\xe3o textual (",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Scientific Linguagem"
                                    }),
                                    ") e outra para projetos editoriais (",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Editora Scientific"
                                    }),
                                    "). Nosso trabalho envolve:"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "grid gap-4 my-4 list-disc list-outside [&>li]:ml-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Apoio em todas as etapas de prepara\xe7\xe3o de artigos cient\xedficos para submiss\xe3o em peri\xf3dicos especializados, incluindo adequa\xe7\xe3o do texto (tradu\xe7\xe3o, revis\xe3o ou edi\xe7\xe3o, dependendo das necessidades de cada projeto/cliente) at\xe9 formata\xe7\xe3o de acordo com as normas do peri\xf3dico, passando por montagem de bibliotecas em software de gest\xe3o de refer\xeancias, coordena\xe7\xe3o da submiss\xe3o e acompanhamento do trabalho de resposta aos pareceres."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Revis\xe3o, tradu\xe7\xe3o, edi\xe7\xe3o, padroniza\xe7\xe3o e formata\xe7\xe3o de protocolos, diretrizes, relat\xf3rios e textos institucionais no contexto das Ci\xeancias da Sa\xfade."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "[&>a]:text-sciblue [&>a]:font-medium",
                                        children: [
                                            "Apoio aos projetos editoriais de revistas cient\xedficas, com mix variado de servi\xe7os, incluindo secretaria editorial, tradu\xe7\xe3o, revis\xe3o, copidescagem e padroniza\xe7\xe3o de artigos. Entre as revistas",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: "https://www.bjp.org.br/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: "Brazilian Journal of Psychiatry"
                                                })
                                            }),
                                            ", o",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: "https://www.jvascbras.org/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: "Jornal Vascular Brasileiro"
                                                })
                                            }),
                                            ", o",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: "https://jfootankle.com/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: "Journal of the Foot & Ankle"
                                                })
                                            }),
                                            ", os",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: "https://abccardiol.org/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: "Arquivos Brasileiros de Cardiologia"
                                                })
                                            }),
                                            ", o",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: "https://ijcscardiol.org/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: "International Journal of Cardiovascular Sciences"
                                                })
                                            }),
                                            ", a",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: "https://www.mdpi.com/journal/geriatrics",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: "Geriatrics"
                                                })
                                            }),
                                            ", a",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: "https://ggaging.com/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: "Geriatrics, Gerontology and Ageing"
                                                })
                                            }),
                                            " ",
                                            "e a",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: "https://www.rbmt.org.br/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: "Revista Brasileira de Medicina do Trabalho"
                                                })
                                            }),
                                            "."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "A equipe da Scientific inclui profissionais de texto especializados nas Ci\xeancias da Sa\xfade (tradutores, jornalistas, bibliotec\xe1ria), apoio administrativo e parceiros com forma\xe7\xe3o em Medicina e outras \xe1reas da sa\xfade, Estat\xedstica, Epidemiologia, Design Gr\xe1fico e secretaria para atua\xe7\xe3o em projetos espec\xedficos."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "insta",
                className: "max-w-[1140px] mx-auto my-14 px-4 [&>h2]:pb-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Global_Title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        hasDetail: true,
                        children: "\xdaltimas"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Instagram__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        posts: data
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                        className: "flex items-center px-3 text-white transition-all rounded-md py-[6px] gap-2 w-fit mx-auto mt-8 bg-sciblue hover:scale-110",
                        href: "https://www.instagram.com/scientific_linguagem/",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Global_instagram__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            " Siga-nos no Instagram"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "servicos",
                className: "pt-40 my-20 -mt-20 max-md:pt-24 max-md:-mt-24",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Global_Stripe__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        text: "Nossos Servi\xe7os"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-w-[1140px] mx-auto my-20 grid gap-8 max-md:mt-0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Infoblock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                title: "Edi\xe7\xe3o",
                                image: "/assets/BLOCO_2.webp",
                                position: "left",
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "A edi\xe7\xe3o envolve reescritura ou reestrutura\xe7\xe3o do conte\xfado com identifica\xe7\xe3o de lacunas na exposi\xe7\xe3o l\xf3gica de ideias. Vale notar que a edi\xe7\xe3o pode ser feita tanto durante o processo de tradu\xe7\xe3o quanto a partir de um texto j\xe1 escrito na l\xedngua de publica\xe7\xe3o (por exemplo, ingl\xeas)."
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "No caso de tradu\xe7\xe3o de artigos cient\xedficos, o texto de partida em portugu\xeas frequentemente deixar\xe1 de existir, passando o texto em ingl\xeas a ser o conte\xfado original. Nesses casos, a tradu\xe7\xe3o acompanhada de edi\xe7\xe3o pode ser vantajosa para a produ\xe7\xe3o de um texto bem ajustado aos seus prop\xf3sitos finais."
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "O trabalho de edi\xe7\xe3o envolve participa\xe7\xe3o ativa dos autores para esclarecimento de d\xfavidas e aprova\xe7\xe3o e compreende ao menos duas rodadas de ajuste textual."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Infoblock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                title: "Tradu\xe7\xe3o",
                                image: "/assets/BLOCO_3.webp",
                                position: "right",
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "A Scientific \xe9 especializada na tradu\xe7\xe3o para portugu\xeas, ingl\xeas e espanhol de diversos tipos de texto nas Ci\xeancias da Sa\xfade: artigos para submiss\xe3o em peri\xf3dicos revisados por pares, protocolos, diretrizes, relat\xf3rios e textos institucionais, entre outros."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Infoblock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                title: "Revis\xe3o",
                                image: "/assets/BLOCO_4.webp",
                                position: "left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "A equipe de revis\xe3o utiliza ferramentas consagradas para revis\xe3o ortogr\xe1fica e gramatical em portugu\xeas e ingl\xeas. A equipe trabalha em sintonia utilizando checklists desenvolvidas pela Scientific, que s\xe3o atualizadas periodicamente e podem ser adaptadas para projetos espec\xedficos."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Os textos revisados s\xe3o entregues ao cliente em duas vers\xf5es: uma com marca\xe7\xe3o de altera\xe7\xf5es e coment\xe1rios e outra limpa. O fluxo tradicional envolve revis\xe3o e entrega dos arquivos, retorno do cliente, ajustes e entrega das vers\xf5es finais para aprova\xe7\xe3o."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Infoblock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                title: "Formata\xe7\xe3o",
                                position: "right",
                                image: "/assets/BLOCO_5.webp",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "A formata\xe7\xe3o \xe9 a adequa\xe7\xe3o do artigo cient\xedfico \xe0s normas da revista para a qual ele ser\xe1 submetido. A atividade de formata\xe7\xe3o envolve padroniza\xe7\xe3o do texto com tipo e tamanho de fonte, espa\xe7amentos, verifica\xe7\xe3o de limites de palavras/caracteres, apresenta\xe7\xe3o de tabelas e materiais suplementares, edi\xe7\xe3o de figuras e forma de apresenta\xe7\xe3o dos dados dos autores."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Envolve ainda a confer\xeancia e formata\xe7\xe3o das refer\xeancias e a montagem de bibliotecas em software de gerenciamento de refer\xeancias."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Infoblock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                title: "submiss\xe3o",
                                position: "left",
                                image: "/assets/BLOCO_6.webp",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "O trabalho de submiss\xe3o consiste na realiza\xe7\xe3o dos cadastros do autor e do artigo no sistema de peer review do peri\xf3dico cient\xedfico e no envio dos arquivos finais a serem avaliados pela revista."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Durante o processo de preenchimento dos cadastros, surgem in\xfameras quest\xf5es que precisam ser verificadas juntos aos autores, como dados pessoais e profissionais, termos de classifica\xe7\xe3o, indica\xe7\xe3o de revisores e outras informa\xe7\xf5es."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "contato",
                className: "pt-40 my-20 -mt-20 max-md:pt-24 max-md:-mt-24",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Global_Stripe__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        text: "Entre em Contato"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center max-w-[1140px] mx-auto mt-10 px-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-8",
                                children: "Fale conosco para solicitar um or\xe7amento ou contratar algum servi\xe7o."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Contact_Form__WEBPACK_IMPORTED_MODULE_11__/* .Form */ .l, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col max-w-xl gap-4 mx-auto mt-16 text-xs text-left text-[#54595f] [&_span]:text-sciblue [&_span]:font-semibold",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Para ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "OR\xc7AMENTOS"
                                        }),
                                        ", informe o n\xfamero de palavras a serem revisadas, editadas ou traduzidas. Informe ainda se deseja receber or\xe7amento para formata\xe7\xe3o e submiss\xe3o e o nome da revista de interesse."
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        ]
    });
}
const getStaticProps = async ()=>{
    try {
        const { data: response  } = await axios__WEBPACK_IMPORTED_MODULE_12__["default"].get(`https://graph.instagram.com/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=${process.env.INSTA_TOKEN}`);
        if (!response.data) throw new Error("Failed to fetch data");
        return {
            props: {
                data: response.data.slice(0, 3)
            },
            revalidate: 60 * 60 * 24
        };
    } catch (err) {
        ;
        return {
            props: {
                data: []
            },
            revalidate: 30
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ http)
/* harmony export */ });
/* unused harmony export getBaseUrl */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getBaseUrl() {
    if (false) {}
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return `http://localhost:${process.env.PORT ?? 3000}`;
}
const http = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: `${getBaseUrl()}/api`
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1656:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/zod");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61], () => (__webpack_exec__(85)));
module.exports = __webpack_exports__;

})();