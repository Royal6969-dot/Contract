'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function NewContractPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stake, setStake] = useState(1000);
  const [durationDays, setDurationDays] = useState(7);
  const [isGroup, setIsGroup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function createContract(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch('/api/contracts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, stakeAmountCents: stake, durationDays, isGroup }),
    });
    setLoading(false);
    if (res.ok) {
      router.push('/dashboard');
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Failed to create contract');
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>New Contract</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={createContract} className="space-y-4">
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Stake (cents)</label>
                <Input type="number" value={stake} onChange={(e) => setStake(parseInt(e.target.value || '0'))} min={0} required />
              </div>
              <div>
                <label className="text-sm">Duration (days)</label>
                <Input type="number" value={durationDays} onChange={(e) => setDurationDays(parseInt(e.target.value || '1'))} min={1} required />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input id="isGroup" type="checkbox" checked={isGroup} onChange={(e) => setIsGroup(e.target.checked)} />
              <label htmlFor="isGroup">Group contract</label>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create'}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

