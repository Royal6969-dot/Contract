import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const contracts = await db.contract.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(contracts);
}

export async function POST(req: Request) {
  try {
    const { title, description, stakeAmountCents, durationDays, isGroup } = await req.json();
    if (!title || !stakeAmountCents || !durationDays) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const now = new Date();
    const endDate = new Date(now.getTime() + Number(durationDays) * 24 * 60 * 60 * 1000);
    const contract = await db.contract.create({
      data: {
        title,
        description,
        stakeAmountCents: Number(stakeAmountCents),
        startDate: now,
        endDate,
        isGroup: Boolean(isGroup),
      },
    });
    return NextResponse.json(contract, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

