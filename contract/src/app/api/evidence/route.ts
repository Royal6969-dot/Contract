import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { contractId, participationId, photoUrl, note, latitude, longitude } = await req.json();
    if (!contractId || !participationId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const evidence = await db.evidence.create({
      data: {
        contractId,
        participationId,
        photoUrl: photoUrl ?? null,
        note: note ?? null,
        latitude: latitude ?? null,
        longitude: longitude ?? null,
      },
    });
    return NextResponse.json(evidence, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

