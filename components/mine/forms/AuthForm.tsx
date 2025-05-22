"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Separator } from "@radix-ui/react-select"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})



   // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

interface authFormProps {
    type: string
    title: string
}


  export function AuthForm({title, type}: authFormProps) {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
          { type === "sign-in" ? (
            <div className="lg:space-y-6 py-10 px-10 lg:px-40 h-[100dvh] flex flex-col justify-center gap-3">
                      <h2 className="text-center lg:text-left font-bold text-4xl  text-green-900 mb-10">{title}</h2>
                      <div className="flex flex-col gap-5">
                        <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Nombre de usuario</FormLabel>
                          <FormControl>
                            <Input placeholder="shadcn" {...field} className=" focus:ring-0! focus:ring-transparent!"/>
                          </FormControl>
                         
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                      <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Contraserña</FormLabel>
                          <FormControl>
                            <Input placeholder="shadcn" {...field}  className=" focus:ring-0! focus:ring-transparent!"/>
                          </FormControl>
                       
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center">
                       <Link href="/client/store" className="w-full">
                            <Button type="submit" className="w-full bg-white text-green-900  border-green-900 border-1 hover:bg-white hover:border-green-900 hover:text-green-900" >
                              { type === "sign-in" ? (
                                  <span>Iniciar sesion</span>
                              ) :(
                                  <span>Crear cuenta</span>
                              )
                              
                              }
                            </Button>
                       </Link>
                    </div>
                      </div>

          <div className="relative my-4 flex items-center justify-center overflow-hidden">
            <Separator className="border-green-900"/>
            <div className="px-2 text-center bg-background text-sm">OR</div>
            <Separator />
          </div>

                    <div className="grid w-full gap-2">
            <Button  className="border-none bg-green-900 text-white hover:bg-green-950">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 488 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Sign in with Google
            </Button>
            <Button   className="border-none bg-green-900 text-white hover:bg-green-950">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"></path>
              </svg>
              Sign in with Twitch
            </Button>
            <Button   className="border-none bg-green-900 text-white hover:bg-green-950">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
              Sign in with Twitter
            </Button>
          </div>
        
            </div>
          ) : (
            <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="shadcn" {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
          ) }

         
      </form>
    </Form>
  )
}