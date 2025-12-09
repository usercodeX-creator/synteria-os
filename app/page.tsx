// app/page.tsx

const primaryApps = [
  {
    id: "chat",
    name: "Chat Space",
    desc: "AI / フレンドと会話する中枢ハブ",
    badge: "COMM",
  },
  {
    id: "timeline",
    name: "Synteria X",
    desc: "ポスト・タイムライン・トレンド",
    badge: "SOCIAL",
  },
  {
    id: "video",
    name: "Video Dock",
    desc: "動画・配信・ショートを統合",
    badge: "VIDEO",
  },
  {
    id: "market",
    name: "Market Hub",
    desc: "NFT・ショップ・サービス販売",
    badge: "MARKET",
  },
];

const secondaryApps = [
  { id: "dapps", name: "dApp Space", desc: "Web3 dApps / Game" },
  { id: "core", name: "System Core", desc: "アカウント / ウォレット / 設定" },
  { id: "lab", name: "Lab", desc: "実験機能・αテスト" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 antialiased">
      {/* 上部ステータスバー */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* 左：ロゴ */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-indigo-500/90 text-xs font-bold shadow-lg">
              S
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-400">
                WEB3 OPERATING SPACE
              </p>
              <p className="text-sm font-semibold tracking-wide">Synteria</p>
            </div>
          </div>

          {/* 中央：ショートステータス */}
          <div className="hidden items-center gap-3 text-[11px] text-slate-400 md:flex">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              ノード：稼働中
            </span>
            <span className="h-3 w-px bg-slate-700/80" />
            <span>セッション：0 アプリ起動</span>
            <span className="h-3 w-px bg-slate-700/80" />
            <span>バージョン：α-0.1</span>
          </div>

          {/* 右：ウォレットボタン */}
          <button className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 hover:border-indigo-500/70 hover:bg-slate-900">
            <span className="h-2 w-2 rounded-full bg-slate-500" />
            <span>ウォレット未接続</span>
          </button>
        </div>
      </div>

      {/* メインデスクトップ */}
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 lg:flex-row lg:py-10">
        {/* 左：ランチャー */}
        <aside className="flex w-full flex-col gap-4 rounded-3xl bg-slate-900/70 p-4 shadow-xl ring-1 ring-slate-800/80 lg:w-60">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500">
              LAUNCHER
            </p>
            <h1 className="mt-1 text-lg font-semibold">ホーム</h1>
            <p className="mt-2 text-xs text-slate-400">
              よく使うレイヤーにワンタップでアクセス。
            </p>
          </div>

          <div className="mt-1 space-y-1 text-sm">
            <button className="flex w-full items-center justify-between rounded-2xl bg-slate-800/80 px-3 py-2 text-left text-slate-100">
              <span>ダッシュボード</span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-[2px] text-[10px] text-emerald-400">
                ACTIVE
              </span>
            </button>
            <button className="w-full rounded-2xl px-3 py-2 text-left text-slate-300 hover:bg-slate-800/60">
              アプリ一覧
            </button>
            <button className="w-full rounded-2xl px-3 py-2 text-left text-slate-300 hover:bg-slate-800/60">
              通知センター
            </button>
            <button className="w-full rounded-2xl px-3 py-2 text-left text-slate-300 hover:bg-slate-800/60">
              システム設定
            </button>
          </div>

          <div className="mt-auto rounded-2xl bg-gradient-to-r from-indigo-500/20 via-sky-500/10 to-emerald-500/10 px-3 py-3 text-[11px] text-slate-200 ring-1 ring-indigo-500/40">
            <p className="font-medium">Creator / Dev モード</p>
            <p className="mt-1 text-slate-300">
              ここからアプリやスペースを追加して、
              自分だけのOS環境を育てていけるようにする。
            </p>
            <p className="mt-2 inline-block rounded-full bg-slate-950/60 px-2 py-[2px] text-[10px] text-slate-400">
              coming soon
            </p>
          </div>
        </aside>

        {/* 右：デスクトップ領域 */}
        <main className="flex-1 space-y-5">
          {/* 上：挨拶 & クイックアクション */}
          <section className="flex flex-col gap-4 rounded-3xl bg-slate-900/70 p-5 shadow-xl ring-1 ring-slate-800/80 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-indigo-400">
                SYNTERIA DESKTOP
              </p>
              <h2 className="mt-1 text-2xl font-semibold lg:text-3xl">
                おかえり、オペレーター。
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                ここが Web3 のスタート画面。
                まずは起動するレイヤーを1つ選んでみよう。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <button className="rounded-full border border-indigo-500/70 bg-indigo-500/20 px-3 py-1.5 text-indigo-100 hover:bg-indigo-500/30">
                新しいスペースを構想
              </button>
              <button className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-slate-200 hover:border-slate-500">
                ウォレットを接続
              </button>
              <button className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-slate-200 hover:border-slate-500">
                テーマ / 配色を編集
              </button>
            </div>
          </section>

          {/* 中央：メインアプリグリッド */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">
                PRIMARY LAYERS
              </p>
              <span className="text-[11px] text-slate-500">
                ダブルクリックで開くイメージで設計していく
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {primaryApps.map((app) => (
                <div
                  key={app.id}
                  className="group flex flex-col justify-between rounded-3xl bg-slate-900/80 p-4 shadow-lg ring-1 ring-slate-800/80 transition hover:-translate-y-0.5 hover:ring-indigo-500/70"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-medium tracking-wide text-indigo-400">
                        {app.badge}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold">
                        {app.name}
                      </h3>
                      <p className="mt-2 text-xs text-slate-400">{app.desc}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-800/80 px-2 py-1 text-[10px] text-slate-300">
                      Layer
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                    <span>状態：まだダミー。これから中身を実装。</span>
                    <button className="rounded-full border border-slate-600/80 px-3 py-1 text-[11px] text-slate-200 group-hover:border-indigo-500/70 group-hover:text-indigo-300">
                      Launch（準備中）
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 下：サブアプリ & システムパネル */}
          <section className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
            {/* サブアプリ */}
            <div className="space-y-3 rounded-3xl bg-slate-900/70 p-4 shadow-lg ring-1 ring-slate-800/80">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">
                SECONDARY LAYERS
              </p>
              <div className="mt-1 space-y-2">
                {secondaryApps.map((app) => (
                  <div
                    key={app.id}
                    className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2 text-sm text-slate-200 ring-1 ring-slate-800/80 hover:ring-slate-600"
                  >
                    <div>
                      <p className="font-medium">{app.name}</p>
                      <p className="text-[11px] text-slate-400">{app.desc}</p>
                    </div>
                    <span className="text-[11px] text-slate-500">soon</span>
                  </div>
                ))}
              </div>
            </div>

            {/* システムステータス */}
            <div className="space-y-3 rounded-3xl bg-slate-900/70 p-4 shadow-lg ring-1 ring-slate-800/80">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">
                SYSTEM STATUS
              </p>
              <div className="mt-2 space-y-2 text-xs">
                <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2 ring-1 ring-slate-800/80">
                  <span className="text-slate-300">ノード状態</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    稼働中
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2 ring-1 ring-slate-800/80">
                  <span className="text-slate-300">接続中チェーン</span>
                  <span className="text-slate-500">未接続</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2 ring-1 ring-slate-800/80">
                  <span className="text-slate-300">アクティブレイヤー</span>
                  <span className="text-slate-500">0 / 4</span>
                </div>
                <div className="mt-2 rounded-2xl bg-slate-900 px-3 py-3 ring-1 ring-slate-800/80">
                  <p className="text-[11px] text-slate-400">
                    今はまだ「見た目だけのOS」。
                    ここから一つずつレイヤーに本物の機能を入れていこう。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
