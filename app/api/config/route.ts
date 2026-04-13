// app/api/config/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } = process.env

  if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    return NextResponse.json(
      { error: 'Contact form is not configured on the server' },
      { status: 500 }
    )
  }

  return NextResponse.json({
    publicKey: EMAILJS_PUBLIC_KEY,
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
  })
}
