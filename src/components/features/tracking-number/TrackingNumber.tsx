'use client';

import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';

export const TrackingNumber = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [result, setResult] = useState('');

  const { isPending, mutate } = useMutation({
    mutationKey: ['trackingNumber', trackingNumber],
    mutationFn: async ({ trackingNumber }: { trackingNumber: string }) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/ma-van-don/?num=${trackingNumber}`,
      );

      return res;
    },
    async onSuccess(data) {
      const res = await data.json();
      const html = res.html as string;
      const array = html.split('<div id="trackingContent">');
      const array2 = array[1].split('</section>');

      setResult(`<div id="trackingContent"> ${array2[0]}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      trackingNumber,
    });
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Tra cứu vận đơn</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Nhập mã vận đơn"
          className="mr-2 border p-2"
          required
        />
        <button type="submit" className="rounded bg-blue-500 p-2 text-white" disabled={isPending}>
          {isPending ? 'Đang tìm kiếm...' : 'Tra cứu'}
        </button>
      </form>
      {result && (
        <div
          dangerouslySetInnerHTML={{
            __html: result,
          }}
          className="mt-4 border p-4"
        />
      )}
    </div>
  );
};
