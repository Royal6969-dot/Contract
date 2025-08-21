import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

type Params = { params: { id: string } };

export async function GET(_req: Request, { params }: Params) {
  const contract = await db.contract.findUnique({ where: { id: params.id }, include: { participations: true, evidences: true } });
  if (!contract) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(contract);
}

export async function PATCH(req: Request, { params }: Params) {
  try {
    const data = await req.json();
    const updated = await db.contract.update({ where: { id: params.id }, data });
    return NextResponse.json(updated);
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

