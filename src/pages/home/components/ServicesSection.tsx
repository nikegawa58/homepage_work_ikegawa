const TECH_STACK = [
  { name: 'Azure', icon: 'ri-cloud-fill' },
  { name: 'AWS', icon: 'ri-cloud-line' },
  { name: 'NetApp', icon: 'ri-hard-drive-2-line' },
  { name: 'VMware', icon: 'ri-cpu-line' },
  { name: 'iLO', icon: 'ri-server-line' },
  { name: 'Windows Server', icon: 'ri-windows-line' },
];

const MATCHING_TAGS = [
  { name: '要件整理', icon: 'ri-file-list-3-line' },
  { name: 'リスク分析', icon: 'ri-shield-check-line' },
  { name: 'スコープ明確化', icon: 'ri-focus-2-line' },
  { name: 'フリーランス転身支援', icon: 'ri-user-star-line' },
  { name: 'キャリア支援', icon: 'ri-road-map-line' },
  { name: 'フォローアップ', icon: 'ri-chat-smile-2-line' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-background-100">
      <div className="px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-primary-600 text-sm font-medium tracking-widest mb-3">SERVICES</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950 mb-4">
            事業内容
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            インフラエンジニアとしての実務経験を活かし、2つの事業を展開しています。
          </p>
        </div>

        <div className="space-y-10">
          {/* Service 1: フリーランスエンジニア事業 */}
          <div className="group bg-background-50 border border-background-200/70 rounded-2xl overflow-hidden hover:border-primary-200 transition-all duration-300">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="w-full lg:w-2/5">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                  <img
                    src="https://readdy.ai/api/search-image?query=Modern%20clean%20server%20room%20or%20data%20center%20infrastructure%20scene%2C%20organized%20rack%20cabinets%20with%20subtle%20blue%20LED%20lights%2C%20professional%20IT%20environment%2C%20warm%20white%20lighting%20accents%2C%20minimalist%20and%20tidy%20atmosphere%2C%20no%20people%2C%20shallow%20depth%20of%20field%2C%20editorial%20tech%20photography%2C%20calm%20and%20focused%20mood&width=600&height=450&seq=service-freelance-unicloud&orientation=landscape"
                    alt="フリーランスエンジニア事業"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="w-full lg:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <i className="ri-cloud-fill text-2xl md:text-3xl text-primary-600 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center"></i>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-4">
                  フリーランスエンジニア事業
                </h3>
                <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
                  インフラエンジニアとして5年の実務経験を活かし、PMとしてのプロジェクト推進から下記技術領域を中心としたオンプレミス・クラウド環境の設計・構築・運用まで一貫して対応し、幅広いフェーズで貢献いたします。
                </p>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs md:text-sm font-medium border border-primary-100"
                    >
                      <i className={`${tech.icon} w-4 h-4 flex items-center justify-center`}></i>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: エンジニア紹介事業 */}
          <div className="group bg-background-50 border border-background-200/70 rounded-2xl overflow-hidden hover:border-accent-200 transition-all duration-300">
            <div className="flex flex-col lg:flex-row-reverse">
              {/* Image */}
              <div className="w-full lg:w-2/5">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20team%20collaboration%20meeting%20scene%20in%20a%20bright%20modern%20Japanese%20office%2C%20warm%20ambient%20lighting%2C%20diverse%20professionals%20discussing%20around%20a%20clean%20white%20table%2C%20handshake%20gesture%2C%20subtle%20warm%20accent%20tones%2C%20professional%20yet%20friendly%20atmosphere%2C%20editorial%20corporate%20photography%2C%20no%20faces%20clearly%20visible%2C%20focus%20on%20interaction%20and%20teamwork&width=600&height=450&seq=service-matching-unicloud&orientation=landscape"
                    alt="エンジニア紹介事業"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="w-full lg:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-accent-100 flex items-center justify-center mb-6 group-hover:bg-accent-200 transition-colors duration-300">
                  <i className="ri-team-line text-2xl md:text-3xl text-accent-600 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center"></i>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-4">
                  エンジニア紹介事業
                </h3>
                <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
                  エンジニア経験を活かし、作業範囲やリスクの明確化を付加価値として、現場エンジニアと企業様のひずみをなるべくなくした、Win-Winで長く続く関係性の構築をサポートいたします。
                </p>
                <div className="flex flex-wrap gap-2">
                  {MATCHING_TAGS.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-50 text-accent-700 text-xs md:text-sm font-medium border border-accent-100"
                    >
                      <i className={`${item.icon} w-4 h-4 flex items-center justify-center`}></i>
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}