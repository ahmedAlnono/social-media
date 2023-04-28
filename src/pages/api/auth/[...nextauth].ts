import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import  CredentialsProvider  from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '@/libs/prismadb';

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    jwt:{
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name:'credentials',
            credentials: {
                email: {label: 'email', type:'text'},
                password: {label: 'password' , type:'text'}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    throw new Error("invalid credentials");
                }
                const user = await prisma.user.findUnique({
                    where:{
                        email: credentials?.email,
                    }
                })
                if(!user || !user?.hash){
                    throw new Error("user not found");
                }
                const ispassword = await bcrypt.compare(credentials.password , user.hash);
                if(!ispassword){
                    throw new Error("wrong password");
                }
                return user
            },
        })
    ],
})
