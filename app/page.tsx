// app/page.tsx

type DockItem = {
  id: string;
  label: string;
  sub: string;
};

const dockItems: DockItem[] = [
  { id: "chat", label: "Chat", sub: "会話" },
  { id: "timeline", label: "X", sub: "タイムライン" },
  { id: "video", label: "Video", sub: "動画" },
  { id: "market", label: "Market", sub: "マーケット" },
  { id: "dapps", label: "dApps", sub: "Web3" },
  { id: "system", label: "Core", sub: "設定" },
];

const gridApps = [
  {
    id: "chat",
    title: "Chat Space",
    desc: "AI / フレンド / グループチャットのハブ。",
    tag: "COMM",
  },
  {
    id: "timeline",
    title: "Synteria X",
    desc: "ポスト・タイムライン・トレンドを集約。",
    tag: "SOCIAL",
  },
  {
    id: "video",
    title: "Video Dock",
    desc: "ストリーム・ショート・ライブを統合。",
    tag: "VIDEO",
  },
  {
    id: "market",
    title: "Market Hub",
    desc: "デジタル / 物理のショップとサービス。",
    tag: "MARKET",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      {/* 背景（グラデ＋グロー） */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute right-[-80px] top-40 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute left-1/2 top-[65%] h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      {/* 全体ラッパー */}
      <div className="relative flex min-h-screen flex-col">
        {/* 上部バー（モバイルでも1行で収まるように調整） */}
        <header className="border-b border-white/5 bg-slate-950/60 px-3 py-2.5 backdrop-blur-xl sm:px-4">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-xs font-bold shadow-lg shadow-indigo-500/40">
                S
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-300/80">
                  SYNTERIA OS
                </p>
                <p className="text-xs sm:text-sm font-semibold tracking-wide">
                  Web3 Operating Space
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-300">
              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="hidden xs:inline">ノード：</span>稼働中
              </div>
              <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 backdrop-blur md:flex">
                <span>セッション：0</span>
                <span className="h-3 w-px bg-white/10" />
                <span>α-0.1</span>
              </div>
            </div>

            <button className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] sm:text-xs text-slate-100 backdrop-blur hover:border-emerald-400/60">
              <span className="h-2 w-2 rounded-full bg-slate-500" />
              ウォレット未接続
            </button>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="flex-1">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-3 pb-24 pt-4 sm:px-4 sm:pt-6 lg:flex-row">
            {/* 左：ステータス（モバイルでは上に来る） */}
            <section className="flex w-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/40 backdrop-blur-2xl lg:w-64">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-200/70">
                  SESSION
                </p>
                <h1 className="mt-1 text-lg sm:text-xl font-semibold">
                  おかえり、オペレーター。
                </h1>
                <p className="mt-2 text-[11px] text-slate-200/80">
                  ここが Synteria の中枢。まずは1つのレイヤーから起動していこう。
                </p>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  <span className="text-slate-100/90">ノード状態</span>
                  <span className="flex items-center gap-1 text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Stable
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  <span className="text-slate-100/90">接続チェーン</span>
                  <span className="text-slate-300/80">未接続</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  <span className="text-slate-100/90">アクティブレイヤー</span>
                  <span className="text-slate-300/80">0 / 6</span>
                </div>
              </div>

              <div className="mt-1 rounded-2xl border border-indigo-400/40 bg-gradient-to-br from-indigo-500/25 via-sky-500/20 to-emerald-400/20 px-3 py-2.5 text-[11px] text-slate-50 shadow-lg shadow-indigo-500/40 backdrop-blur-2xl">
                <p className="font-medium">今日のフォーカス</p>
                <p className="mt-1 text-[11px] text-slate-100/90">
                  Chat か X のどちらか1つを「本気で作り込む」。
                  他のレイヤーは後からいくらでも増やせる。
                </p>
              </div>
            </section>

            {/* 右：メインウィンドウ（スマホでは1カラム） */}
            <section className="mt-1 flex-1 rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:p-4">
              {/* ウィンドウヘッダー */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <p className="ml-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-slate-200/80">
                    HOME DESKTOP
                  </p>
                </div>
                <p className="text-[10px] text-slate-200/80">
                  モード：Builder（開発者ビュー）
                </p>
              </div>

              {/* 本文 */}
              <div className="mt-3 flex flex-col gap-4 lg:flex-row">
                {/* アプリグリッド */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-200/80">
                        CORE LAYERS
                      </p>
                      <p className="mt-1 text-[11px] text-slate-200/80">
                        Synteria の中心になるレイヤー。今はまだUIだけで、中身はこれから。
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-300/80">
                      スマホではタップ、PCではダブルクリックを想定
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {gridApps.map((app) => (
                      <article
                        key={app.id}
                        className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-3 text-xs shadow-lg shadow-black/40 backdrop-blur-2xl transition hover:border-indigo-400/70 hover:bg-white/10"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-[10px] font-medium tracking-wide text-indigo-300">
                              {app.tag}
                            </p>
                            <span className="rounded-full bg-slate-950/40 px-2 py-[2px] text-[9px] text-slate-200/90">
                              Layer
                            </span>
                          </div>
                          <h2 className="mt-1 text-sm font-semibold">
                            {app.title}
                          </h2>
                          <p className="mt-2 text-[11px] text-slate-200/80">
                            {app.desc}
                          </p>
                        </div>

                        <div className="mt-3 flex items-center justify-between text-[10px]">
                          <span className="text-slate-300/80">
                            状態：未実装。ここに本物の画面を差し込んでいく。
                          </span>
                          <button className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] text-slate-50 backdrop-blur group-hover:border-indigo-400 group-hover:bg-indigo-500/30">
                            Launch（準備中）
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* 右側：メモ＆Todo（小さい画面では下にくる） */}
                <div className="space-y-3 lg:w-60">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[11px] text-slate-200/90 shadow-lg shadow-black/40 backdrop-blur-2xl">
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-200/80">
                      BUILD NOTES
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      <li>・まずは Chat か X を1画面ぜんぶ作る。</li>
                      <li>・UI→API→Web3 の順で機能を足す。</li>
                      <li>・OS 感は「一貫した世界観」で出す。</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[11px] text-slate-200/90 shadow-lg shadow-black/40 backdrop-blur-2xl">
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-200/80">
                      NEXT ACTION
                    </p>
                    <ol className="mt-2 space-y-1.5">
                      <li>1. 最初に実装するレイヤーを決める</li>
                      <li>2. /app 以下に専用ページを作る</li>
                      <li>3. Dock / カードからそのページへ遷移</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* 下部ドック（スマホ対応） */}
        <footer className="pointer-events-none fixed inset-x-0 bottom-2 flex justify-center px-3 pb-1">
          <div className="pointer-events-auto flex max-w-xs items-end gap-1.5 rounded-3xl border border-white/15 bg-slate-950/70 px-3 py-2 shadow-2xl shadow-black/60 backdrop-blur-2xl sm:max-w-md sm:gap-2 sm:px-4">
            {dockItems.map((item) => (
              <button
                key={item.id}
                className="group flex flex-1 flex-col items-center gap-0.5 px-1"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[11px] font-medium text-slate-50 shadow-md shadow-black/50 backdrop-blur group-hover:border-indigo-400 group-hover:bg-indigo-500/40 sm:h-9 sm:w-9">
                  {item.label[0]}
                </div>
                <span className="text-[9px] text-slate-100">{item.label}</span>
                <span className="hidden text-[9px] text-slate-400 xs:inline">
                  {item.sub}
                </span>
              </button>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
