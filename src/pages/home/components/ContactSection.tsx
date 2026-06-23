import { useState, type FormEvent } from 'react';

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string).trim();
    const email = (formData.get('email') as string).trim();
    const subject = (formData.get('subject') as string).trim();
    const message = (formData.get('message') as string).trim();

    if (!name || !email || !subject || !message) {
      setError('必須項目をすべて入力してください。');
      return;
    }

    if (message.length > 500) {
      setError('お問い合わせ内容は500文字以内で入力してください。');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('https://readdy.ai/api/form/d8sd9btcg4qspo1262c0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          name,
          email,
          subject,
          message,
          phone: (formData.get('phone') as string).trim(),
          company: (formData.get('company') as string).trim(),
        }).toString(),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError('送信に失敗しました。しばらく経ってから再度お試しください。');
      }
    } catch {
      setError('通信エラーが発生しました。しばらく経ってから再度お試しください。');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-background-100">
      <div className="px-4 md:px-6 max-w-2xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary-600 text-sm font-medium tracking-widest mb-3">CONTACT</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 mb-4">
            お問い合わせ
          </h2>
          <p className="text-foreground-600 text-sm md:text-base leading-relaxed">
            ご質問やご依頼など、お気軽にお問い合わせください。
          </p>
        </div>

        {submitted ? (
          <div className="bg-background-50 rounded-2xl p-8 md:p-12 border border-background-200/70 text-center">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-line text-3xl text-primary-600 w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-3">
              送信が完了しました
            </h3>
            <p className="text-foreground-600 text-sm md:text-base">
              お問い合わせいただきありがとうございます。内容を確認の上、2〜3営業日以内にご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            data-readdy-form=""
            id="contact-form"
            onSubmit={handleSubmit}
            className="bg-background-50 rounded-2xl p-6 md:p-10 border border-background-200/70"
          >
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground-800 mb-1.5">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="山田 太郎"
                  className="w-full px-4 py-3 rounded-xl bg-background-100 border border-background-200/70 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground-800 mb-1.5">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-background-100 border border-background-200/70 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground-800 mb-1.5">
                    電話番号 <span className="text-foreground-400 text-xs">(任意)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="090-1234-5678"
                    className="w-full px-4 py-3 rounded-xl bg-background-100 border border-background-200/70 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-medium text-foreground-800 mb-1.5">
                    会社名 <span className="text-foreground-400 text-xs">(任意)</span>
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="株式会社〇〇"
                    className="w-full px-4 py-3 rounded-xl bg-background-100 border border-background-200/70 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground-800 mb-1.5">
                  お問い合わせ項目 <span className="text-red-500">*</span>
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background-100 border border-background-200/70 text-sm text-foreground-900 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    paddingRight: '2.5rem',
                  }}
                >
                  <option value="">選択してください</option>
                  <option value="フリーランスエンジニア事業について">フリーランスエンジニア事業について</option>
                  <option value="エンジニア紹介事業について">エンジニア紹介事業について</option>
                  <option value="お仕事のご依頼">お仕事のご依頼</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground-800 mb-1.5">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  maxLength={500}
                  placeholder="お問い合わせ内容をご記入ください（500文字以内）"
                  className="w-full px-4 py-3 rounded-xl bg-background-100 border border-background-200/70 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-full bg-primary-500 text-white font-bold text-sm md:text-base hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
                    送信中...
                  </>
                ) : (
                  <>
                    送信する
                    <i className="ri-send-plane-line w-5 h-5 flex items-center justify-center"></i>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}