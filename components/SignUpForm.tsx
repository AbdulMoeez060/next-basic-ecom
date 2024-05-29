
"use client"
import { signUpValidationSchema } from '@/constants/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import Link from 'next/link'

const SignUpForm = () => {
    const form = useForm<yup.InferType<typeof signUpValidationSchema>>({
        resolver: yupResolver(signUpValidationSchema),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: ""
        },
    })

    const onSubmit = (values: yup.InferType<typeof signUpValidationSchema>) => {
        console.log(values);
    };
    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full">

            <InputField
                type="text"
                id="firstName"
                autoComplete="on"
                placeholder="اسم المستخدم.."
                label='اسم المستخدم'
                {...form.register("firstName")}

            />
            <InputField
                type="text"
                id="lastName"
                autoComplete="on"
                placeholder="اسم المستخدم.."
                label='اسم المستخدم'
                {...form.register("lastName")}

            />
            <InputField
                type="email"
                id="email"
                autoComplete="on"
                placeholder="اسم المستخدم.."
                label='اسم المستخدم'
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
                    دخول
                </SubmitButton>
                <Link
                    href="/login"
                    className="w-fit text-primary underline p-2 text-md rounded-md"
                >
                    نسيت كلمة المرور؟
                </Link>
            </div>
        </form>
    )
}

export default SignUpForm