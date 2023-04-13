import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { http } from "@/utils/http";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  //só aceita esses tipos de imagem mas pode alterar depois
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const FormSchema = z.object({
  //TODO: Faça suas regras e mensagems personalizadas
  name: z.string().min(3, "Mínimo de três caracteres").max(100), //essa string é a mensagem de erro
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  message: z.string().min(10).max(500),
  file: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp são aceitos."
    )
    .transform((files) => files?.[0]),
  select: z.enum(["Contratação", "Orçamento"]),
});

export type FormType = z.infer<typeof FormSchema>;

export function Form() {
  const {
    register,
    reset,
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

  const onSubmit = useCallback(
    async (data: FormType) => {
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
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" {...register("name")} />
        <span>{errors.name?.message}</span>
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" {...register("email")} />
        <span>{errors.email?.message}</span>
      </div>

      <div>
        <label htmlFor="phone">Telefone</label>
        <input type="phone" {...register("phone")} />
        <span>{errors.phone?.message}</span>
      </div>
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea {...register("message")} />
        <span>{errors.message?.message}</span>
      </div>
      <div>
        <label htmlFor="file">Anexo</label>
        <input type="file" {...register("file")} />
      </div>
      <div>
        <label htmlFor="select">Selecione</label>
        <select {...register("select")}>
          <option value="Contratação">Contratação</option>
          <option value="Orçamento">Orçamento</option>
        </select>
        <span>{errors.select?.message}</span>
      </div>

      <button type="submit" className="blue" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
}
