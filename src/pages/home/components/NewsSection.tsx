import { useState } from 'react';

const NEWS_ITEMS = [
  {
    id: 1,
    date: '2026.06.22',
    category: 'お知らせ',
    title: 'Unicloud公式ホームページを公開しました',
    description:
      'このたび、Unicloudの公式ホームページを公開いたしました。事業内容や経歴、お問い合わせフォームなどを掲載しております。今後ともよろしくお願いいたします。',
  },
  {
    id: 2,
    date: '2026.06.10',
    category: 'お知らせ',
    title: '個人事業主として活動を開始しました',
    description:
      '2026年より個人事業主として独立し、Unicloudを屋号にフリーランスエンジニア兼SEサービス事業を開始いたしました。',
  },
  {
    id: 3,
    date: '2026.05.20',
    category: 'お知らせ',
    title: '事業パートナー募集中',
    description:
      '共に成長できるエンジニアパートナーを募集しております。クラウド・インフラ領域に強い方を歓迎します。',
  },
];

const INITIAL_SHOW_COUNT = 2;

export default function NewsSection() {
  const [showAllNews, setShowAllNews] = useState(false);
  const visibleNews = showAllNews ? NEWS_ITEMS : NEWS_ITEMS.slice(0, INITIAL_SHOW_COUNT);

  return (
    <section id="news" className="relative py-20 md:py-28 bg-background-100">
      <div className="px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary-600 text-sm font-medium tracking-widest mb-3">NEWS</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950">
            新着情報
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: お知らせ一覧 */}
          <div className="w-full lg:w-1/2">
            <h3 className="font-heading text-lg font-bold text-foreground-950 mb-5 flex items-center gap-2">
              <i className="ri-newspaper-line w-5 h-5 flex items-center justify-center text-primary-500"></i>
              お知らせ
            </h3>
            <div className="space-y-4">
              {visibleNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-background-50 rounded-xl p-5 md:p-6 border border-background-200/70 hover:border-primary-200 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium whitespace-nowrap border border-primary-100">
                      {item.category}
                    </span>
                    <time className="text-foreground-500 text-sm">{item.date}</time>
                  </div>
                  <h4 className="font-heading text-base md:text-lg font-bold text-foreground-950 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-foreground-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

              {/* もっと表示 / 閉じる ボタン */}
              {NEWS_ITEMS.length > INITIAL_SHOW_COUNT && (
                <div className="text-center pt-2">
                  {!showAllNews ? (
                    <button
                      onClick={() => setShowAllNews(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground-200 text-foreground-600 text-sm font-medium hover:bg-foreground-50 hover:border-foreground-300 transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      もっと表示
                      <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowAllNews(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground-200 text-foreground-600 text-sm font-medium hover:bg-foreground-50 hover:border-foreground-300 transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      閉じる
                      <i className="ri-arrow-up-s-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: ブログ — note集約（ボタン式） */}
          <div className="w-full lg:w-1/2">
            <h3 className="font-heading text-lg font-bold text-foreground-950 mb-5 flex items-center gap-2">
              <i className="ri-article-line w-5 h-5 flex items-center justify-center text-accent-500"></i>
              ブログ
            </h3>

            <div className="bg-background-50 rounded-xl p-6 md:p-8 border border-background-200/70">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0">
                  <i className="ri-file-text-fill text-accent-500 text-2xl md:text-3xl w-8 h-8 flex items-center justify-center"></i>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-medium whitespace-nowrap border border-accent-100 mb-2">
                    技術ブログ
                  </span>
                  <h4 className="font-heading text-lg md:text-xl font-bold text-foreground-950">
                    note で記事を公開中
                  </h4>
                </div>
              </div>
              <p className="text-foreground-600 text-sm leading-relaxed mb-6">
                インフラエンジニアリング、クラウド設計、フリーランスのリアルな現場知識など、日々の学びや経験を note で発信しています。
              </p>
              <a
                href="https://note.com/unicloud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-500 text-white text-sm font-bold hover:bg-accent-600 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                note.com/unicloud を見る
                <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}