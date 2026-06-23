export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground-950 text-white">
      <div className="px-4 md:px-6 max-w-6xl mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <span className="font-heading text-xl font-bold tracking-tight">Unicloud</span>
            <p className="mt-3 text-foreground-300 text-sm leading-relaxed max-w-xs">
              技術と人をつなぐ。フリーランスエンジニアとして、企業のIT課題を解決します。
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-foreground-200">メニュー</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'ホーム', href: '#home' },
                { label: '事業内容', href: '#services' },
                { label: '新着情報', href: '#news' },
                { label: '経歴', href: '#career' },
                { label: 'お問い合わせ', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(item.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-foreground-400 text-sm hover:text-white transition-colors cursor-pointer underline decoration-foreground-700 underline-offset-4"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-foreground-200">お問い合わせ</h4>
            <div className="space-y-2.5 text-sm text-foreground-400">
              <p>
                <i className="ri-mail-line w-4 h-4 inline-flex items-center justify-center mr-2"></i>
                naoki.ikegawa@ike-unicloud.com
              </p>
              <p>
                <i className="ri-map-pin-line w-4 h-4 inline-flex items-center justify-center mr-2"></i>
                福岡県博多区
              </p>
            </div>
            <a
              href="https://note.com/naoki_ikke/n/n1a28e9e454a6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-foreground-400 hover:text-white transition-colors cursor-pointer underline decoration-foreground-700 underline-offset-4"
            >
              <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
              note
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-500 text-xs">
            &copy; {currentYear} Unicloud. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#home');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-foreground-500 text-xs hover:text-white transition-colors cursor-pointer underline decoration-foreground-700 underline-offset-4"
            >
              プライバシーポリシー
            </a>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-foreground-500 text-xs hover:text-white transition-colors cursor-pointer underline decoration-foreground-700 underline-offset-4"
            >
              サイトポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}