// app/page.tsx
import Link from "next/link";

type LayerCard = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  status: string;
};

const layers: LayerCard[] = [
  {
    id: "chat",
    tag: "COMM",
    title: "Chat Space",
    desc: "AI / フレンド / グループチャットの中枢レイヤー。",
    status: "未実装",
  },
  {
    id: "timeline",
    tag: "SOCIAL",
    title: "Synteria X",
    desc: "ポスト・タイムライン・トレンドを集約するSNSレイヤー。",
    status: "未実装",
  },
  {
    id: "video",
    tag: "VIDEO",
    title: "Video Dock",
    desc: "ストリーム・ショート・ライブを扱う映像レイヤー。",
    status: "未実装",
  },
  {
    id: "market",
    tag: "MARKET",
    title: "Market Hub",
    desc: "デジタル/物理のショップ＆サービスのレイヤー。",
    status: "未実装",
  },
];

const dockItems = [
  { id: "chat", label: "Chat" },
  { id: "x", label: "X" },
  { id: "video", label: "Video" },
  { id: "market", label: "Market" },
  { id: "dapps", label: "dApps" },
  { id: "core", label: "Core" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      {/* 背景グロー */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-indigo-500/35 blur-3xl" />
        <div className="absolute right-[-60px] top-16 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute left-1/2 top-[65%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      {/* 全体ラッパー */}
      <div className="relative flex min-h-screen flex-col">
        {/* トップバー */}
        <header className="border-b border-white/10 bg-slate-950/70 px-4 py-2.5 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
            {/* 左：ロゴ */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-xs font-bold shadow-lg shadow-indigo-500/40">
                S
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.26em] text-slate-200/80">
                  SYNTERIA OS
                </p>
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-50">
                  Web3 Operating Space · 深圳 Layer
                </p>
              </div>
            </div>

            {/* 中央：ステータス */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px]">
              <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-slate-100 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                ノード：稼働中
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200/85 backdrop-blur lg:flex">
                <span>セッション：0 アプリ</span>
                <span className="h-3 w-px bg-white/15" />
                <span>バージョン：α-0.1</span>
              </div>
            </div>

            {/* 右：ウォレット */}
            <button className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] sm:text-xs text-slate-50 backdrop-blur hover:border-emerald-400/60">
              <span className="h-2 w-2 rounded-full bg-slate-500" />
              ウォレット未接続
            </button>
          </div>
        </header>

        {/* メイン */}
        <main className="flex-1">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-3 pb-24 pt-5 sm:px-4 lg:flex-row lg:pt-8">
            {/* 左：セッションパネル */}
            <section className="flex w-full flex-col gap-3 rounded-3xl border border-white/12 bg-white/7 p-4 text-xs shadow-xl shadow-black/50 backdrop-blur-2xl lg:w-72 lg:p-5">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.24em] text-slate-200/85">
                  SESSION
                </p>
                <h1 className="mt-1 text-lg sm:text-xl font-semibold">
                  おかえり、オペレーター。
                </h1>
                <p className="mt-2 text-[11px] text-slate-100/90">
                  ここが Synteria の中枢。まずは1つのレイヤーから実装していこう。
                </p>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-3 py-2 backdrop-blur">
                  <span className="text-slate-50/95">ノード状態</span>
                  <span className="flex items-center gap-1 text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Stable
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-3 py-2 backdrop-blur">
                  <span className="text-slate-50/95">接続チェーン</span>
                  <span className="text-slate-300/85">未接続</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-3 py-2 backdrop-blur">
                  <span className="text-slate-50/95">アクティブレイヤー</span>
                  <span className="text-slate-300/85">0 / 6</span>
                </div>
              </div>

              <div className="mt-1 rounded-2xl border border-indigo-400/40 bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-emerald-400/20 px-3 py-3 text-[11px] text-slate-50 shadow-lg shadow-indigo-500/50 backdrop-blur-2xl">
                <p className="font-medium">今日のフォーカス</p>
                <p className="mt-1 text-[11px] text-slate-100/90">
                  「Chat」か「Synteria X」どちらか1つだけを完成させる。  
                  他のレイヤーはあとから OS に“追加インストール”するイメージでOK。
                </p>
              </div>
            </section>

            {/* 右：ホームデスクトップ */}
            <section className="flex-1 rounded-3xl border border-white/12 bg-white/7 p-4 text-xs shadow-2xl shadow-black/60 backdrop-blur-2xl sm:p-5">
              {/* ウィンドウヘッダー */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-200/85">
                      HOME DESKTOP
                    </p>
                    <p className="text-[10px] text-slate-300/85">
                      Synteria OS のコアレイヤー一覧
                    </p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-200/85">
                  モード：Builder（開発者ビュー）
                </p>
              </div>

              {/* 本文 */}
              <div className="mt-4 grid gap-4 lg:grid-cols-[3fr_2fr]">
                {/* レイヤーグリッド */}
                <div className="space-y-3">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-200/80">
                        CORE LAYERS
                      </p>
                      <p className="mt-1 text-[11px] text-slate-200/85">
                        Synteria の顔になるレイヤー。今はUIだけで、ロジックはこれから実装。
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-300/85">
                      PC：ダブルクリック / スマホ：タップで起動する想定
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {layers.map((layer) => (
                      <article
                        key={layer.id}
                        className="group flex flex-col justify-between rounded-2xl border border-white/12 bg-white/8 p-3 text-[11px] shadow-md shadow-black/40 backdrop-blur-2xl transition hover:-translate-y-0.5 hover:border-indigo-400/70 hover:bg-white/12"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <p className="text-[10px] font-medium tracking-wide text-indigo-300">
                              {layer.tag}
                            </p>
                            <span className="rounded-full bg-slate-950/45 px-2 py-[2px] text-[9px] text-slate-100/90">
                              Layer
                            </span>
                          </div>
                          <h2 className="mt-1 text-sm font-semibold text-slate-50">
                            {layer.title}
                          </h2>
                          <p className="mt-2 text-[11px] text-slate-200/90">
                            {layer.desc}
                          </p>
                        </div>

                        {/* Launch ボタン & ステータス */}
                        <div className="mt-3 flex items-center justify-between text-[10px]">
                          <span className="text-slate-300/90">
                            状態：{layer.status}
                          </span>

                          {layer.id === "chat" ? (
                            <Link
                              href="/chat"
                              className="rounded-full border border-indigo-400/60 bg-indigo-500/40 px-3 py-1 text-[10px] text-slate-50 backdrop-blur hover:bg-indigo-500/60 hover:border-indigo-300"
                            >
                              Launch（Chat）
                            </Link>
                          ) : (
                            <button
                              className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] text-slate-50 backdrop-blur cursor-not-allowed"
                              disabled
                            >
                              Launch（準備中）
                            </button>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* 右側：ノート / TODO */}
                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/12 bg-white/8 p-3 text-[11px] text-slate-200/95 shadow-md shadow-black/40 backdrop-blur-2xl">
                    <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-200/80">
                      BUILD NOTES
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      <li>・まずは Chat レイヤーか Synteria X のどちらか1つを完成。</li>
                      <li>・UI → API → WebSocket / Web3 の順で段階的に拡張。</li>
                      <li>・「OSらしさ」は統一された世界観とドックUIで出す。</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/12 bg-white/8 p-3 text-[11px] text-slate-200/95 shadow-md shadow-black/40 backdrop-blur-2xl">
                    <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-200/80">
                      NEXT ACTION
                    </p>
                    <ol className="mt-2 space-y-1.5 list-decimal pl-4">
                      <li>実装するレイヤーを1つ決める（Chat 推奨）。</li>
                      <li>
                        `/app/レイヤー名/page.tsx` を作り、専用画面を作成する。
                      </li>
                      <li>
                        このホームの「Launch」ボタンから、そのページへ遷移させる。
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* ドック（下部） */}
        <footer className="pointer-events-none fixed inset-x-0 bottom-3 flex justify-center px-3">
          <div className="pointer-events-auto flex max-w-md items-end gap-2 rounded-3xl border border-white/15 bg-slate-950/80 px-4 py-2 shadow-2xl shadow-black/70 backdrop-blur-2xl">
            {dockItems.map((item) => (
              <button
                key={item.id}
                className="group flex flex-1 flex-col items-center gap-0.5 text-[9px]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-2xl border border-white/18 bg-white/10 text-[11px] font-medium text-slate-50 shadow-md shadow-black/60 backdrop-blur group-hover:border-indigo-400 group-hover:bg-indigo-500/40 sm:h-9 sm:w-9">
                  {item.label[0]}
                </div>
                <span className="text-[9px] text-slate-100">{item.label}</span>
              </button>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

