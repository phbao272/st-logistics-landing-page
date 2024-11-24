import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const num = searchParams.get('num');

  if (!num) {
    return NextResponse.json({ error: 'Missing num parameter' }, { status: 400 });
  }

  try {
    const res = await fetch(`https://vandon247.com/?num=${num}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    });

    const contentType = res.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      // Nếu trả về JSON
      const data = await res.json();
      return NextResponse.json(data);
    } else if (contentType.includes('text/html')) {
      // Nếu trả về HTML
      const html = await res.text(); // Lấy dữ liệu HTML
      return NextResponse.json({ html }); // Trả về dưới dạng JSON
    } else {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
