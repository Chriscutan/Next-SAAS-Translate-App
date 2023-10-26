import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { adminAuth, adminDB } from "./firebase-admin";
import { FirestoreAdapter } from "@auth/firebase-adapter"

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.Google_Client_ID!,
            clientSecret: process.env.Google_Client_Secret!,
        }),
    ],
    callbacks: {
        session: async ({ session, token }) => {
            if(session?.user) {
                if(token.sub) {
                    session.user.id = token.sub;

                    const firebaseToken = await adminAuth.createCustomToken(token.sub);
                    session.firebaseToken = firebaseToken;
                }
            }
            return session;
        },
        jwt: async ({user, token}) => {
            if(user) {
                token.sub = user.id;
            }
            return token;
        }
    },
    session: {
        strategy: 'jwt',
    },
    adapter: FirestoreAdapter(adminDB),   
} satisfies NextAuthOptions;