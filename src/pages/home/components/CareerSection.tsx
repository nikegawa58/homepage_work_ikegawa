const CAREER_ITEMS = [
  {
    period: '2021 - 2022',
    title: 'オンプレミスストレージ・仮想基盤の設計・導入・運用支援',
    description:
      'NetAppやPureStorageなどオンプレストレージやvSphereのオンプレ仮想基盤の設計・導入・運用支援を担当。大規模環境の安定稼働に貢献。',
    icon: 'ri-hard-drive-2-line',
  },
  {
    period: '2023 - 2024',
    title: 'Azure / AWS クラウド導入・ハイブリッド環境構築',
    description:
      'Azure/AWSの要件定義から導入実装まで経験。ExpressRoute（Azure）などオンプレとの併用支援も担当し、ハイブリッドクラウド環境を実現。',
    icon: 'ri-cloud-fill',
  },
  {
    period: '2025',
    title: '大手ECサイト会社 アカウントSE / PM',
    description:
      '大手ECサイト会社のアカウントSEとして2件のプロジェクトマネジメントを担当。ステークホルダー調整から納品までを統括。',
    icon: 'ri-projector-line',
  },
  {
    period: '2026',
    title: '個人事業主として独立',
    description:
      'Unicloudを屋号に、フリーランスエンジニア兼SEサービス事業を開始。技術力とマネジメント力を強みに、幅広い案件に対応。',
    icon: 'ri-star-line',
  },
];

const CERTIFICATIONS = [
  { name: '応用情報技術者試験', icon: 'ri-computer-line' },
  { name: 'AWS Certified Solutions Architect - Associate', icon: 'ri-cloud-line' },
  { name: 'Azure Administrator Associate (AZ-104)', icon: 'ri-cloud-fill' },
  { name: 'Azure Network Engineer Associate (AZ-700)', icon: 'ri-router-line' },
  { name: 'VMware Certified Professional - DCV', icon: 'ri-cpu-line' },
  { name: 'CompTIA Project+', icon: 'ri-task-line' },
];

export default function CareerSection() {
  return (
    <section id="career" className="relative py-20 md:py-28 bg-background-50">
      <div className="px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-primary-600 text-sm font-medium tracking-widest mb-3">CAREER</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950">
            経歴
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-16 md:mb-20 max-w-4xl mx-auto">
          <div className="absolute left-[26px] top-0 bottom-0 w-px bg-background-300"></div>

          <div className="space-y-6 md:space-y-8">
            {CAREER_ITEMS.map((item) => (
              <div key={item.period} className="relative pl-16 md:pl-20">
                {/* Timeline dot - larger icon circle */}
                <div className="absolute left-[11px] top-3 w-[31px] h-[31px] rounded-full bg-primary-500 flex items-center justify-center z-10 ring-4 ring-background-50">
                  <i className={`${item.icon} text-white w-3.5 h-3.5 flex items-center justify-center`}></i>
                </div>

                {/* Content card */}
                <div className="bg-background-100 rounded-xl p-5 md:p-6 border border-background-200/70 hover:border-primary-200 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium border border-primary-100">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm md:text-base font-bold text-foreground-950 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-foreground-600 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-8">
            保有資格
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 bg-background-100 rounded-xl px-4 py-3.5 border border-background-200/70 hover:border-primary-200 transition-all duration-300 cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className={`${cert.icon} text-primary-600 w-4 h-4 flex items-center justify-center`}></i>
                </div>
                <span className="text-sm text-foreground-800 font-medium text-left">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}