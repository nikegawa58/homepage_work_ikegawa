import { Resend } from 'resend';

export async function onRequestPost(context: any) {
  try {
    const body = await context.request.json();

    const resend = new Resend(
      context.env.RESEND_API_KEY
    );

    await resend.emails.send({
      from: 'contact@ike-unicloud.com',
      to: 'naoki.ikegawa@ike-unicloud.com',
      subject: `【お問い合わせ】${body.subject}`,
      html: `
        <h2>お問い合わせが届きました</h2>

        <p><strong>お名前</strong><br>${body.name}</p>

        <p><strong>メールアドレス</strong><br>${body.email}</p>

        <p><strong>電話番号</strong><br>${body.phone || '未入力'}</p>

        <p><strong>会社名</strong><br>${body.company || '未入力'}</p>

        <p><strong>お問い合わせ項目</strong><br>${body.subject}</p>

        <p><strong>内容</strong><br>${body.message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        success: false,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}