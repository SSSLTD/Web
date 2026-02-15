import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}`,
        "X-Title": "Strong Safety Systems AI",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "google/gemini-3-flash-preview",
        "messages": [
          {
            "role": "system",
            "content": "You are a helpful assistant for Strong Safety Systems, a fire fighting and pump service company. You speak in both English and Arabic. Be professional and safety-oriented. Start by saying: 'Hi, how can I help you today?' That's it don't say anything more. # Keep respnses short and concise."
          },
          ...messages
        ],
      })
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('OpenRouter Error:', error);
    return NextResponse.json({ error: 'Failed to fetch from AI' }, { status: 500 });
  }
}
