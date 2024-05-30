
"use client"
import { signUpValidationSchema } from '@/constants/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import Link from 'next/link'
import HTTPService from '@/services/api'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const SignUpForm = () => {
    const router = useRouter()
    const form = useForm<yup.InferType<typeof signUpValidationSchema>>({
        resolver: yupResolver(signUpValidationSchema),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: ""
        },
    })

    const onSubmit = async (values: yup.InferType<typeof signUpValidationSchema>) => {
        console.log(values);
        try {
            const data = await HTTPService.getInstance().register(values);
            console.log("server", data)

            toast.success("Successfully Registered")
            router.push('/login')

        } catch (error) {
            console.log(error)

            toast.error("Something went wrong!")
        }
    };
    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full">

            <InputField
                type="text"
                id="firstName"
                autoComplete="on"
                placeholder="الاسم الأول.."
                label="الاسم الأول"
                {...form.register("firstName")}

            />
            <InputField
                type="text"
                id="lastName"
                autoComplete="on"
                placeholder="الاسم الأخير.."
                label="الاسم الأخير"
                {...form.register("lastName")}

            />
            <InputField
                type="email"
                id="email"
                autoComplete="on"
                placeholder="البريد الإلكتروني.."
                label='البريد الإلكتروني'
                {...form.register("email")}

            />

            <InputField
                type="password"
                autoComplete="on"
                id="password"
                placeholder="كلمة المرور.."
                label='كلمة المرور'
                {...form.register("password")}
            />
            <div className="flex gap-4">
                <SubmitButton>
                    سجل
                </SubmitButton>
                <Link
                    href="/login"
                    className="w-fit text-primary underline p-2 text-md rounded-md"
                >
                    لديك حساب بالفعل
                </Link>
            </div>
        </form>
    )
}

export default SignUpForm