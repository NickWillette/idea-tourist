import NextAuth from "next-auth";
import { authOptions } from "ideas/server/auth";

export default NextAuth(authOptions);
