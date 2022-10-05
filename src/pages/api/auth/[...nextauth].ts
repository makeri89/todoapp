import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@lib/mongodb'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST!,
        port: process.env.EMAIL_SERVER_PORT!,
        auth: {
          user: process.env.EMAIL_SERVER_USER!,
          pass: process.env.EMAIL_SERVER_PASSWORD!,
        },
      },
      from: process.env.EMAIL_FROM!,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.MONGODB_DATABASE,
  }),
  secret: process.env.NNEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
