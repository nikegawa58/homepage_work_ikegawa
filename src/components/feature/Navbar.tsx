import { useState, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  { label: 'ホーム', href: '#home' },
  { label: '事業内容', href: '#services' },
  { label: '新着情報', href: '#news' },
  { label: '経歴', href: '#career' },
  { label: 'お問い合わせ', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-50/95 backdrop-blur-md border-b border-background-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground-950">
              Unicloud
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium tracking-wide text-foreground-700 hover:text-primary-600 transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              お問い合わせ
              <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-foreground-950"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
          >
            <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background-50 border-t border-background-200/60">
          <div className="px-4 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground-700 text-sm font-medium py-2 cursor-pointer hover:text-primary-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-primary-500 text-white hover:bg-primary-600 transition-colors cursor-pointer mt-2 whitespace-nowrap"
            >
              お問い合わせ
              <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}