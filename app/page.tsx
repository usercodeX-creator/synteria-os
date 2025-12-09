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
      {/* 背景グラデーション */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute right-[-80px] top-40 h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute left-1/2 top-[60%] h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      {/* 画面内コンテンツ */}
      <div className="relative flex min-h-screen flex-col">
        {/* 上部バー */}
        <header className="border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-xs font-bold shadow-lg">
                S
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-400">
                  SYNTERIA OS
                </p>
                <p className="text-sm font-semibold tracking-wide">
                  Web3 Operating Space
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <div className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[11px] text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                ノード：稼働中
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[11px] text-slate-300 lg:flex">
                <span>セッション：0 アプリ</span>
                <span className="h-3 w-px bg-slate-700/80" />
                <span>バージョン：α-0.1</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300 md:flex">
                <span className="h-2 w-2 rounded-full bg-slate-500" />
                ウォレット未接続
              </div>
            </div>
          </div>
        </header>

        {/* 中央ウィンドウ */}
        <main className="flex-1">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 pt-6 pb-24 lg:flex-row lg:pt-10">
            {/* 左のサイドパネル（ステータス） */}
            <section className="flex w-full flex-col gap-4 rounded-3xl bg-slate-900/75 p-4 shadow-xl ring-1 ring-slate-800/80 lg:w-64">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">
                  SESSION
                </p>
                <h1 className="mt-1 text-xl font-semibold">
                  おかえり、オペレーター。
                </h1>
                <p className="mt-2 text-xs text-slate-400">
                  Synteria 上のすべてのレイヤーは、ここを起点に展開される。
                  今日はどこから起動する？
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2 ring-1 ring-slate-800/80">
                  <span className="text-slate-300">ノード状態</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Stable
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2 ring-1 ring-slate-800/80">
                  <span className="text-slate-300">接続チェーン</span>
                  <span className="text-slate-500">未接続</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2 ring-1 ring-slate-800/80">
                  <span className="text-slate-300">アクティブレイヤー</span>
                  <span className="text-slate-500">0 / 6</span>
                </div>
              </div>

              <div className="mt-2 rounded-2xl bg-gradient-to-br from-indigo-500/15 via-sky-500/10 to-emerald-500/10 p-3 text-[11px] text-slate-200 ring-1 ring-indigo-500/40">
                <p className="font-medium">今日の一手</p>
                <p className="mt-1 text-slate-300">
                  とりあえず1つのレイヤーに集中して作り込む。
                  完成したら、次のレイヤーを追加する。それだけでOSは進化する。
                </p>
              </div>
            </section>

            {/* 右：メインウィンドウ */}
            <section className="flex-1 rounded-3xl bg-slate-900/80 p-4 shadow-2xl ring-1 ring-slate-800/80 lg:p-5">
              {/* ウィンドウヘッダー */}
              <div className="flex items-center justify-between border-b border-slate-800/70 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <p className="ml-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    HOME DESKTOP
                  </p>
                </div>

                <div className="hidden items-center gap-2 text-[11px] text-slate-400 md:flex">
                  <span>モード：Builder</span>
                  <span className="h-3 w-px bg-slate-700/80" />
                  <span>将来：ユーザー用 / 管理用を分離</span>
                </div>
              </div>

              {/* ウィンドウ中身 */}
              <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                {/* 左：アプリグリッド */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500">
                        CORE LAYERS
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Synteria の「顔」になるレイヤーたち。今はまだダミーUI。
                      </p>
                    </div>
                    <span className="hidden rounded-full bg-slate-900 px-3 py-1 text-[11px] text-slate-400 md:inline-block">
                      ダブルクリックで開くイメージで設計
                    </span>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    {gridApps.map((app) => (
                      <div
                        key={app.id}
                        className="group flex flex-col justify-between rounded-2xl bg-slate-900/90 p-3 shadow-lg ring-1 ring-slate-800/90 transition hover:-translate-y-0.5 hover:ring-indigo-500/80"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-[11px] font-medium tracking-wide text-indigo-400">
                              {app.tag}
                            </p>
                            <span className="rounded-full bg-slate-900 px-2 py-[2px] text-[10px] text-slate-400">
                              Layer
                            </span>
                          </div>
                          <h2 className="mt-1 text-base font-semibold">
                            {app.title}
                          </h2>
                          <p className="mt-2 text-[11px] text-slate-400">
                            {app.desc}
                          </p>
                        </div>

                        <div className="mt-3 flex items-center justify-between text-[11px]">
                          <span className="text-slate-500">
                            状態：未実装。ここに本物の画面を差し込んでいく。
                          </span>
                          <button className="rounded-full border border-slate-600/80 px-3 py-1 text-[11px] text-slate-200 group-hover:border-indigo-500/70 group-hover:text-indigo-300">
                            Launch（準備中）
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 右：メモ / Todo / システム */}
                <div className="space-y-3">
                  <div className="rounded-2xl bg-slate-900/90 p-3 ring-1 ring-slate-800/90">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500">
                      BUILD NOTES
                    </p>
                    <ul className="mt-2 space-y-1.5 text-[11px] text-slate-300">
                      <li>・まずは1レイヤー（Chat or X）から本気で作る。</li>
                      <li>・Web3要素（ウォレット接続）は後で差し込める。</li>
                      <li>
                        ・Synteria を「OS」として見せるために、
                        画面遷移よりも一貫した世界観を優先。
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-slate-900/90 p-3 ring-1 ring-slate-800/90">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500">
                      NEXT ACTION
                    </p>
                    <ol className="mt-2 space-y-1.5 text-[11px] text-slate-300">
                      <li>1. 実際に中身を作るレイヤーを1つ決める</li>
                      <li>2. /app 以下に専用ページを追加</li>
                      <li>3. Dock & カードの「Launch」から飛べるようにする</li>
                    </ol>
                  </div>

                  <div className="rounded-2xl bg-slate-900/90 p-3 ring-1 ring-slate-800/90">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500">
                      SYSTEM LOG
                    </p>
                    <p className="mt-2 text-[11px] text-slate-400">
                      今日ここまでで
                      「ドメイン取得 / Vercel / Next.js / Synteria UI」
                      まで構築済み。次はレイヤー実装フェーズに入れる。
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* 下部ドック */}
        <footer className="pointer-events-none fixed inset-x-0 bottom-3 flex justify-center">
          <div className="pointer-events-auto flex items-end gap-3 rounded-3xl bg-slate-950/85 px-4 py-2 shadow-2xl ring-1 ring-slate-800/90 backdrop-blur">
            {dockItems.map((item) => (
              <button
                key={item.id}
                className="group flex flex-col items-center gap-1 px-2 text-[10px]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-xs font-medium text-slate-100 ring-1 ring-slate-700/80 group-hover:bg-indigo-500/70 group-hover:ring-indigo-400">
                  {item.label[0]}
                </div>
                <span className="text-[10px] text-slate-300">
                  {item.label}
                </span>
                <span className="text-[9px] text-slate-500">{item.sub}</span>
              </button>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
