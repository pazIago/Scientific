import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useId, useState } from "react";
import { http } from "@/utils/http";
import { toast, ToastContainer } from "react-toastify";
import PLANESvg from "../Global/plane";
import type { ToastOptions } from "react-toastify";

const TOAST_CONFIG: ToastOptions = {
  position: "top-right",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

export function Form({ isBr }: { isBr: boolean }) {
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    phone: "",
    message: { min: "", max: "" },
  });

  const FormSchema = z.object({
    name: z.string().min(3, errorMessages.name).max(100), //essa string é a mensagem de erro
    email: z.string().email(errorMessages.email),
    phone: z.string().min(11, errorMessages.phone),
    message: z
      .string()
      .min(10, errorMessages.message.min)
      .max(500, errorMessages.message.max),
  });

  type FormType = z.infer<typeof FormSchema>;

  const toastLoadingId = useId();
  const toastErrorId = useId();
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      // file: null,
    },
  });

  const [toastMessage, setToastMessage] = useState({
    sending: "E-mail já está sendo enviado!",
    success: "E-mail enviado com Sucesso!",
    error: "Erro ao enviar E-mail!",
  });

  const validateForm = useCallback(() => {
    const errorToast = (message: string) =>
      toast(message, {
        ...TOAST_CONFIG,
        autoClose: 1500,
        type: toast.TYPE.WARNING,
        toastId: toastErrorId,
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
  }, [errors.email, errors.message, errors.name, errors.phone, toastErrorId]);

  const onSubmit = useCallback(
    async (data: FormType) => {
      try {
        const loadingToast = () =>
          toast(toastMessage.sending, {
            ...TOAST_CONFIG,
            autoClose: 12000,
            type: toast.TYPE.INFO,
            toastId: toastLoadingId,
          });
        loadingToast();
        await http.post("send-email", data);
        toast.update(toastLoadingId, {
          ...TOAST_CONFIG,
          render: toastMessage.success,
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        });
        reset();
      } catch (error) {
        toast.update(toastLoadingId, {
          ...TOAST_CONFIG,
          render: toastMessage.error,
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        });
        console.log(error);
      }
    },
    [reset, toastLoadingId, toastMessage]
  );

  useEffect(() => {
    function setMessagesLang() {
      setToastMessage(
        isBr === true
          ? {
              sending: "E-mail já está sendo enviado!",
              success: "E-mail enviado com Sucesso!",
              error: "Erro ao enviar E-mail!",
            }
          : {
              sending: "Email is being submitted!",
              success: "Email sent!",
              error: "Email could not be sent!",
            }
      );
    }
    setMessagesLang();

    function setTipsMessages() {
      setErrorMessages(
        isBr === true
          ? {
              name: "Mínimo de três caracteres",
              email: "Email inválido",
              phone: "Digite apenas os números, com DDD incluso",
              message: {
                min: "Inclua informações sobre o projeto",
                max: "Limite de caracteres: 500",
              },
            }
          : {
              name: "Please type at least 3 characters",
              email: "Please type a valid email",
              phone: "Please use numbers only",
              message: {
                min: "Please add some information about the project",
                max: "character limit: 500",
              },
            }
      );
    }
    setTipsMessages();
  }, [isBr]);

  return (
    <>
      <ToastContainer
        className="z-50"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form
        className="max-w-xl mx-auto flex flex-col gap-1 [&>div]:flex [&>div]:flex-col [&_span]:text-red-400 [&_span]:text-left [&_span]:block [&_span]:h-[20px] [&_span]:text-sm [&_input:not([type='file'])]:border [&_input:not([type='file'])]:px-4 [&_input:not([type='file'])]:outline-none [&_input:not([type='file'])]:py-2 [&_textarea]:border [&_textarea]:outline-none"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            className="transition hover:border-sciblue focus:ring-sciblue focus:ring-1 focus:border-sciblue"
            type="text"
            placeholder={isBr ? "Nome" : "Name"}
            id="name"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </div>

        <div>
          <input
            className="transition focus:ring-sciblue focus:ring-1 focus:border-sciblue hover:border-sciblue"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </div>

        <div>
          <input
            className="transition focus:ring-sciblue focus:ring-1 focus:border-sciblue hover:border-sciblue"
            type="phone"
            placeholder={isBr ? "Telefone" : "Phone"}
            {...register("phone")}
          />
          <span>{errors.phone?.message}</span>
        </div>
        <div>
          <div className="grid items-center grid-cols-2 gap-6 max-sm:gap-0 max-sm:grid-cols-1 justify-items-start">
            {/*   <div className="w-full">
            <select
              className="w-full py-2 pl-4 pr-4 transition border outline-none hover:border-sciblue focus:ring-sciblue focus:ring-1 focus:border-sciblue"
              {...register("select")}
            >
              <option value="Contratação">Contratação</option>
              <option value="Orçamento">Orçamento</option>
            </select>
            <span>{errors.select?.message}</span>
          </div> */}
          </div>
        </div>

        <div>
          <textarea
            className="px-4 py-2 transition focus:ring-sciblue focus:ring-1 focus:border-sciblue hover:border-sciblue"
            placeholder={isBr ? "Mensagem" : "How can we help you?"}
            {...register("message")}
          />
          <span>{errors.message?.message}</span>
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-3 mt-4 font-medium text-white w-fit bg-sciblue"
          disabled={isSubmitting}
          onClick={validateForm}
        >
          <PLANESvg /> {isBr ? "Enviar" : "Submit"}
        </button>
      </form>
    </>
  );
}
