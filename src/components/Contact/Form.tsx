import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { http } from "@/utils/http";
import PLANESvg from "../Global/plane";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_FILE_TYPES = [
  //só aceita esses tipos de imagem mas pode alterar depois
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
];

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
  file: z
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
  select: z.enum(["Contratação", "Orçamento"]),
});

export type FormType = z.infer<typeof FormSchema>;

export function Form() {
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
      file: null,
    },
  });
  console.log(JSON.stringify(watch(), null, 2));

  const onSubmit = useCallback(
    async (data: FormType) => {
      console.log(data.file);

      try {
        await http.post("send-email", data);
        reset();
        //TODO: adicionar um toast de sucesso
      } catch (error) {
        //TODO: adicionar um toast de erro
        console.log(error);
      }
    },
    [reset]
  );

  return (
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
          <div className="w-full">
            <select
              className="w-full py-2 pl-4 pr-4 transition border outline-none hover:border-sciblue focus:ring-sciblue focus:ring-1 focus:border-sciblue"
              {...register("select")}
            >
              <option value="Contratação">Contratação</option>
              <option value="Orçamento">Orçamento</option>
            </select>
            <span>{errors.select?.message}</span>
          </div>
          <div className="max-w-xs">
            <input
              className="file:bg-sciblue file:hover:scale-95 transition text-sm file:border-none file:text-sm file:text-white file:px-3 file:py-[6px] mb-5 flex flex-col flex-wrap max-w-[276px] max-sm:max-w-[300px]"
              type="file"
              {...register("file")}
            />
          </div>
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
      >
        <PLANESvg /> Enviar
      </button>
    </form>
  );
}
