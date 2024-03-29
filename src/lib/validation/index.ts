import { z } from "zod"

export const SignUpValidation = z.object({
    name: z.string().min(2, {message: "olunga pera adinga"}),
    username: z.string().min(2, {message: "olunga unga username kudunga"}),
    email: z.string().email({message: "Email id podunga"}),
    password: z.string().min(8, {message: "password 8 keys irukanum"}),
  })

  export const SignInValidation = z.object({
    email: z.string().email({message: "Email id podunga"}),
    password: z.string().min(8, {message: "password 8 keys irukanum"}),
  })

  export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
  })