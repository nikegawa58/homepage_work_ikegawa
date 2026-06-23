export default function HeroSection() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden bg-background-50">
      {/* Layer 1: Fine grid + scatter dots */}
      <div className="absolute inset-0 opacity-[0.022]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(oklch(var(--foreground-500)/0.08) 1px, transparent 1px),
            linear-gradient(90deg, oklch(var(--foreground-500)/0.06) 1px, transparent 1px),
            radial-gradient(circle at 12% 20%, oklch(var(--primary-500)) 1.4px, transparent 1.4px),
            radial-gradient(circle at 88% 12%, oklch(var(--accent-500)) 1.2px, transparent 1.2px),
            radial-gradient(circle at 72% 82%, oklch(var(--primary-500)) 1px, transparent 1px),
            radial-gradient(circle at 22% 78%, oklch(var(--accent-500)) 0.9px, transparent 0.9px),
            radial-gradient(circle at 45% 35%, oklch(var(--primary-500)) 0.7px, transparent 0.7px),
            radial-gradient(circle at 60% 55%, oklch(var(--accent-500)) 0.8px, transparent 0.8px)
          `,
          backgroundSize: '64px 64px, 64px 64px, 128px 128px, 128px 128px, 128px 128px, 128px 128px, 96px 96px, 96px 96px',
        }}></div>
      </div>

      {/* Layer 2: Large geometric ring system */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[900px] h-[900px] rounded-full border border-primary-500/[0.04]"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[700px] h-[700px] rounded-full border border-accent-500/[0.04]"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] rounded-full border border-primary-500/[0.05]"></div>

      {/* Layer 3: Decorative arc fragments */}
      <div className="absolute top-28 right-[8%] w-64 h-64 rounded-full border-[6px] border-primary-500/[0.04] border-t-transparent border-r-transparent rotate-45"></div>
      <div className="absolute bottom-32 left-[5%] w-48 h-48 rounded-full border-[4px] border-accent-500/[0.05] border-b-transparent border-l-transparent -rotate-12"></div>

      {/* Layer 4: Soft blobs */}
      <div className="absolute -top-60 -right-60 w-[800px] h-[800px] rounded-full bg-primary-500/[0.025] blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent-500/[0.025] blur-3xl"></div>
      <div className="absolute top-1/3 left-[20%] w-[350px] h-[350px] rounded-full bg-primary-500/[0.035] blur-3xl"></div>
      <div className="absolute bottom-1/4 right-[25%] w-[250px] h-[250px] rounded-full bg-accent-500/[0.03] blur-3xl"></div>

      {/* Layer 5: Thin accent rules */}
      <div className="absolute left-0 top-[18%] w-[2px] h-40 bg-gradient-to-b from-transparent via-primary-500/25 to-transparent rounded-full"></div>
      <div className="absolute right-0 top-[55%] w-[2px] h-28 bg-gradient-to-b from-transparent via-accent-500/20 to-transparent rounded-full"></div>
      <div className="absolute top-0 left-[35%] h-[1px] w-32 bg-gradient-to-r from-transparent via-foreground-500/[0.06] to-transparent"></div>
      <div className="absolute bottom-0 left-[45%] h-[1px] w-48 bg-gradient-to-r from-transparent via-primary-500/[0.08] to-transparent"></div>

      {/* Layer 6: Corner bracket accents */}
      <div className="absolute top-16 left-8 w-8 h-8 border-l-2 border-t-2 border-primary-500/[0.1] rounded-tl-lg"></div>
      <div className="absolute bottom-16 right-8 w-8 h-8 border-r-2 border-b-2 border-accent-500/[0.08] rounded-br-lg"></div>

      <div className="relative z-10 w-full px-4 md:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="font-heading font-bold text-foreground-950 mb-6 md:mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              <span className="block text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
                技術と人を
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.02] tracking-tight text-primary-500 mt-1">
                つなぐ。
              </span>
            </h1>

            {/* Decorative divider with dot */}
            <div className="flex items-center gap-3 mb-8 md:mb-10 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.35s_forwards]">
              <div className="w-10 h-[2px] bg-primary-500/40 rounded-full"></div>
              <div className="w-2 h-2 rounded-full bg-primary-500/30"></div>
              <div className="w-4 h-[2px] bg-primary-500/20 rounded-full"></div>
            </div>

            <p className="text-foreground-600 text-base md:text-lg max-w-lg mb-10 md:mb-12 leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
              インフラエンジニア経験を活かし、<br className="hidden sm:block" />
              技術と企業 / エンジニアと企業の架け橋となります
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center px-9 py-4 rounded-full bg-primary-500 text-white font-bold text-sm md:text-base hover:bg-primary-600 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-[0_4px_24px_-8px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.25)]"
              >
                お問い合わせはこちら
                <i className="ri-arrow-right-line ml-2 w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector('#services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-9 py-4 rounded-full border border-foreground-200 text-foreground-700 font-medium text-sm md:text-base hover:bg-foreground-50 hover:border-foreground-300 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                事業内容を見る
                <i className="ri-arrow-down-line ml-2 w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>

          {/* Right: Image with elaborate framing */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Outer offset frame */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary-500/[0.06] translate-x-4 translate-y-4"></div>
              {/* Inner subtle glow */}
              <div className="absolute -inset-1 rounded-2xl bg-primary-500/[0.02] blur-sm"></div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Clean%20bright%20minimalist%20modern%20Japanese%20creative%20workspace%20on%20a%20light%20warm%20white%20desk%2C%20laptop%20with%20code%20on%20screen%2C%20subtle%20crimson%20accent%20object%20like%20a%20notebook%2C%20softly%20blurred%20window%20light%20from%20left%20side%2C%20editorial%20productivity%20photography%20with%20airy%20atmosphere%2C%20gentle%20depth%20of%20field%2C%20no%20people%2C%20serene%20and%20professional%20mood&width=800&height=600&seq=hero-right-unicloud-v7&orientation=landscape"
                  alt="Unicloud - フリーランスエンジニア"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Corner accents */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-primary-500/[0.05] -z-10"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-accent-500/[0.05] -z-10"></div>

              {/* Top-right decorative hash marks */}
              <div className="absolute -top-8 right-10 flex gap-2">
                <div className="w-[3px] h-4 bg-primary-500/20 rounded-full"></div>
                <div className="w-[3px] h-6 bg-primary-500/30 rounded-full"></div>
                <div className="w-[3px] h-3 bg-primary-500/15 rounded-full"></div>
              </div>

              {/* Small floating accent dot */}
              <div className="absolute top-6 -left-3 w-3 h-3 rounded-full bg-accent-500/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}