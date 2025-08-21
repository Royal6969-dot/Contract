import { db } from '@/lib/db';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function DashboardPage() {
  const contracts = await db.contract.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
    include: {
      participations: true,
    },
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Button asChild>
          <Link href="/contracts/new">New Contract</Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contracts.map((c) => (
          <Card key={c.id}>
            <CardHeader>
              <CardTitle className="text-lg">{c.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground truncate">{c.description}</p>
              <p className="text-sm mt-2">Pot: ${(c.potCents / 100).toFixed(2)} {c.currency}</p>
              <p className="text-xs text-muted-foreground">Participants: {c.participations.length}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

