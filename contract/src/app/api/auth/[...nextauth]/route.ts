import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: { strategy: "database" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await db.user.findUnique({ where: { email: credentials.email } });
        if (!user?.passwordHash) return null;
        const isValid = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!isValid) return null;
        return { id: user.id, email: user.email, name: user.name || undefined, image: user.image || undefined };
      },
    }),
  ],
  adapter: {
    async createUser(user) {
      const created = await db.user.create({ data: { email: user.email!, name: user.name ?? null, image: user.image ?? null } });
      return { id: created.id, email: created.email, emailVerified: null, name: created.name ?? null, image: created.image ?? null };
    },
    async getUser(id) {
      const found = await db.user.findUnique({ where: { id } });
      if (!found) return null;
      return { id: found.id, email: found.email, emailVerified: null, name: found.name ?? null, image: found.image ?? null };
    },
    async getUserByEmail(email) {
      const found = await db.user.findUnique({ where: { email } });
      if (!found) return null;
      return { id: found.id, email: found.email, emailVerified: null, name: found.name ?? null, image: found.image ?? null };
    },
    async getUserByAccount({ providerAccountId, provider }) {
      const account = await db.account.findFirst({ where: { provider, providerAccountId } });
      if (!account) return null;
      const user = await db.user.findUnique({ where: { id: account.userId } });
      if (!user) return null;
      return { id: user.id, email: user.email, emailVerified: null, name: user.name ?? null, image: user.image ?? null };
    },
    async updateUser(user) {
      const updated = await db.user.update({ where: { id: user.id! }, data: { name: user.name ?? null, email: user.email!, image: user.image ?? null } });
      return { id: updated.id, email: updated.email, emailVerified: null, name: updated.name ?? null, image: updated.image ?? null };
    },
    async deleteUser(userId) {
      await db.user.delete({ where: { id: userId } });
    },
    async linkAccount(account) {
      await db.account.create({ data: {
        userId: account.userId!,
        type: account.type,
        provider: account.provider,
        providerAccountId: account.providerAccountId,
        refresh_token: account.refresh_token ?? null,
        access_token: account.access_token ?? null,
        expires_at: account.expires_at ?? null,
        token_type: account.token_type ?? null,
        scope: account.scope ?? null,
        id_token: account.id_token ?? null,
        session_state: account.session_state ?? null,
      }});
    },
    async unlinkAccount({ provider, providerAccountId }) {
      await db.account.delete({ where: { provider_providerAccountId: { provider, providerAccountId } } });
    },
    async createSession(session) {
      const created = await db.session.create({ data: { sessionToken: session.sessionToken, userId: session.userId, expires: session.expires } });
      return created;
    },
    async getSessionAndUser(sessionToken) {
      const session = await db.session.findUnique({ where: { sessionToken }, include: { user: true } });
      if (!session) return null;
      return {
        session: { id: session.id, sessionToken: session.sessionToken, userId: session.userId, expires: session.expires },
        user: { id: session.user.id, email: session.user.email, emailVerified: null, name: session.user.name ?? null, image: session.user.image ?? null },
      };
    },
    async updateSession(session) {
      const updated = await db.session.update({ where: { sessionToken: session.sessionToken }, data: { expires: session.expires, userId: session.userId } });
      return updated;
    },
    async deleteSession(sessionToken) {
      await db.session.delete({ where: { sessionToken } });
    },
    async createVerificationToken(token) {
      const created = await db.verificationToken.create({ data: { identifier: token.identifier, token: token.token, expires: token.expires } });
      return created;
    },
    async useVerificationToken({ identifier, token }) {
      try {
        const deleted = await db.verificationToken.delete({ where: { identifier_token: { identifier, token } } });
        return deleted;
      } catch {
        return null;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

