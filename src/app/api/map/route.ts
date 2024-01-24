import { httpRequest } from '@/service/coutries';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const { typeQuery, countryCode } = res;

    const resp = await httpRequest(typeQuery, countryCode);

    return NextResponse.json({ data: resp.data });
  } catch (err) {
    console.log('Error to fetch countries');
    throw new Error('Error to fetch countries');
  }
}
