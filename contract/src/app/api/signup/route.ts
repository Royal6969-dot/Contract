import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body as { email?: string; password?: string; name?: string };
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }
    const existing = await db.user.findUnique({ where: { email } });
    if (existing) return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await db.user.create({ data: { email, name: name ?? null, passwordHash } });
    return NextResponse.json({ id: user.id, email: user.email }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

