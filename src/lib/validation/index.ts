import { z } from "zod"

export const SignUpValidation = z.object({
    name: z.string().min(2, {message: "olunga pera adinga"}),
    username: z.string().min(2, {message: "olunga unga username kudunga"}),
    email: z.string().email({message: "Email id podunga"}),
    password: z.string().min(8, {message: "thappa podatha"}),
  })