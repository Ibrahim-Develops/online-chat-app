import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import axios from 'axios'

export const { handlers, signIn, signOut, auth } = NextAuth  ({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password' },
      },
      async authorize(credentials) {
          const response = await axios.post(
            `${process.env.BASE_URL}/auth/login`,
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          )

          const user = response.data
          return user as any

      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },
})

