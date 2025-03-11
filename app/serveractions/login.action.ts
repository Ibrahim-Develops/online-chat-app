'use server'

import { signIn } from "../api/auth/[...nextauth]/auth";

const login = async (data: { email: string; password: string }) => {
    try {
        const result = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
        })

        if (result?.error) {
            return { error: result.error }
        }

        return { error: null }
    } catch (error: any) {
        return { error: error?.message || 'An unknown error occurred.' }
    }
}

export { login }
