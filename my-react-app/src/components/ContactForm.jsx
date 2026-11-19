
// import React from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function ContactForm() {

    // 1. Define Zod Schema
    const contactSchema = z.object({
        name: z.string()
            .min(3, "Name must be at least 3 characters long"),

        email: z.string()
            .email("Please enter a valid email"),

        phone: z.string()
            .length(10, "Phone number must be exactly 10 digits")
            .regex(/^[0-9]+$/, "Phone number must contain only digits")
    })

    // 2. Initialize React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(contactSchema)
    })

    // 3. Submit Handler
    const onSubmit = (data) => {
        console.log("Form submitted", data)
        alert(`Form Submitted Successfully!\nWelcome ${data.name}`)
        reset()
    }

    // 4. UI
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <h2>Contact Form</h2>

                {/* Name */}
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('name')}
                    />
                    {errors.name && (
                        <p style={{ color: "red" }}>
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        {...register('email')}
                    />
                    {errors.email && (
                        <p style={{ color: "red" }}>
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label>Contact</label>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        {...register('phone')}
                    />
                    {errors.phone && (
                        <p style={{ color: "red" }}>
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                {/* Submit */}
                <button type="submit">
                    Submit
                </button>

            </div>
        </form>
    )
}
