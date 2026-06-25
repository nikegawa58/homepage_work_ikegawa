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
    
    await resend.emails.send({
      from: 'contact@ike-unicloud.com',
      to: body.email,
      subject: '【Unicloud】お問い合わせいただきありがとうございます',
      html: `
        <p>${body.name} 様</p>

        <p>
          お世話になっております。<br>
          池川です。
        </p>

        <p>
          下記内容でお問い合わせを承りました。<br>
          返信まで少々お待ちください。
        </p>

        <hr>

        <h3>お問い合わせ内容</h3>

        <p>
          <strong>お名前</strong><br>
          ${body.name}
        </p>

        <p>
          <strong>メールアドレス</strong><br>
          ${body.email}
        </p>

        <p>
          <strong>電話番号</strong><br>
          ${body.phone || '未入力'}
        </p>

        <p>
          <strong>会社名</strong><br>
          ${body.company || '未入力'}
        </p>

        <p>
          <strong>お問い合わせ項目</strong><br>
          ${body.subject}
        </p>

        <p>
          <strong>お問い合わせ内容</strong><br>
          ${body.message}
        </p>

        <hr>

      <p>
          Unicloud<br>
          池川 尚樹
        </p>
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