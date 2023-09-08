import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useId } from "react";
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

export const FormSchema = z.object({
  //TODO: Faça suas regras e mensagems personalizadas
  name: z.string().min(3, "Mínimo de três caracteres").max(100), //essa string é a mensagem de erro
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .min(11, "Digite apenas os números, com DDD incluso")
    .max(11, "Digite apenas os números, com DDD incluso"),
  message: z
    .string()
    .min(10, "Inclua informações sobre o projeto")
    .max(500, "Limite de caracteres: 500"),
  /*  file: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Tamanho máximo: 50MB.`
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      ".pdf, .doc, .docx, .xls e .clsx são aceitos."
    )
    .transform((files) => files?.[0])
    .optional(),
    select: z.enum(["Contratação", "Orçamento"]),*/
});

export type FormType = z.infer<typeof FormSchema>;

export function Form() {
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
          toast("E-mail já está sendo enviado!", {
            ...TOAST_CONFIG,
            autoClose: 12000,
            type: toast.TYPE.INFO,
            toastId: toastLoadingId,
          });
        loadingToast();
        await http.post("send-email", data);
        toast.update(toastLoadingId, {
          ...TOAST_CONFIG,
          render: "E-mail enviado com Sucesso!",
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        });
        reset();
      } catch (error) {
        toast.update(toastLoadingId, {
          ...TOAST_CONFIG,
          render: "Erro ao enviar E-mail!",
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        });
        console.log(error);
      }
    },
    [reset, toastLoadingId]
  );

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
            placeholder="Nome"
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
            placeholder="Telefone"
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
            placeholder="Mensagem"
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
          <PLANESvg /> Enviar
        </button>
      </form>
    </>
  );
}
