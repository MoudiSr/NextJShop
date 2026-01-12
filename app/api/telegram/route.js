export async function POST(request) {
    const { message } = await request.json().catch(() => ({}));

    if (!message) {
        return Response.json({ error: 'Message is required.' }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_ACCESS_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        return Response.json(
            { error: 'Telegram credentials are not configured.' },
            { status: 500 }
        );
    }

    const telegramResponse = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        }
    );

    const payload = await telegramResponse.json().catch(() => ({}));

    if (!telegramResponse.ok || payload?.ok !== true) {
        return Response.json(
            { error: 'Telegram request failed.', details: payload },
            { status: 502 }
        );
    }

    return Response.json({ ok: true });
}
