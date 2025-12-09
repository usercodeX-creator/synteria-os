// app/page.tsx

export default function Home() {
  const apps = [
    {
      name: "Chat Space",
      desc: "AI / フレンドとリアルタイムで会話する中枢ハブ。",
      tag: "コミュニケーション",
    },
    {
      name: "Video Dock",
      desc: "ストリーム・ショート・配信を1つのタイムラインに統合。",
      tag: "動画 / ライブ",
    },
    {
      name: "Synteria X",
      desc: "ポスト・タイムライン・トレンドを扱うマイクロSNSレイヤー。",
      tag: "ソーシャル",
    },
    {
      name: "Market Hub",
      desc: "NFT・ショップ・サービス販売をまとめたマーケットプレイス。",
      tag: "マーケット",
    },
    {
      name: "dApp Space",
      desc: "Web3 dApp・ゲーム・ツールを起動するアプリランチャー。",
      tag: "Web3 / dApp",
    },
    {
      name: "System Core",
      desc: "アカウント、ウォレット、OS設定（準備中）。",
      tag: "システム",
    },
  ];

  const quickActions = [
    "新しいスペースを作成",
    "ウォレットを接続",
    "アプリを追加",
    "テーマを変更",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* レイアウト全体 */}
      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-6 lg:py-10">
        {/* サイドバー */}
        <aside className="hidden w-64 flex-col rounded-3xl bg-slate-900/70 p-5 shadow-xl ring-1 ring-slate-800/80 lg:flex">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-indigo-500/80 text-sm font-bold">
                S
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                  WEB3 OS
                </p>
                <p className="text-lg font-semibold">Synteria</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              すべてのアプリ・ウォレット・コミュニティがここで繋がる、
              あなた専用のWeb3ホーム。
            </p>
          </div>

          <nav className="space-y-1 text-sm">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Core
            </p>
            <button className="flex w-full items-center justify-between rounded-xl bg-slate-800/80 px-3 py-2 text-left text-slate-100">
              <span>ホームダッシュボード</span>
              <span className="text-[10px] rounded-full bg-emerald-500/20 px-2 py-[2px] text-emerald-400">
                LIVE
              </span>
            </button>
            <button className="w-full rounded-xl px-3 py-2 text-left text-slate-300 hover:bg-slate-800/60">
              アプリ一覧
            </button>
            <button className="w-full rounded-xl px-3 py-2 text-left text-slate-300 hover:bg-slate-800/60">
              アカウント / ウォレット
            </button>

            <p className="mt-6 mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Spaces
            </p>
            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between rounded-lg bg-slate-800/40 px-3 py-2">
                <span>Creator モード</span>
                <span className="text-[10px] text-indigo-300">soon</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-slate-800/40 px-3 py-2">
                <span>Developer モード</span>
                <span className="text-[10px] text-indigo-300">soon</span>
              </div>
            </div>
          </nav>

          <div className="mt-auto pt-6 text-xs text-slate-500">
            <p>ノード状態： <span className="text-emerald-400">稼働中</span></p>
            <p className="mt-1">バージョン： Synteria OS α-0.1</p>
          </div>
        </aside>

        {/* メインコンテンツ */}
        <main className="flex-1 space-y-6">
          {/* 上部ヘッダー */}
          <header className="flex flex-col gap-4 rounded-3xl bg-slate-900/70 p-5 shadow-xl ring-1 ring-slate-800/80 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400">
                SYNTERIA HOME
              </p>
              <h1 className="mt-1 text-2xl font-semibold md:text-3xl">
                おかえり、オペレーター。
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                ここからチャット・動画・X・ショップ・dApps すべてにアクセス。
                まずは今日の一手を選ぼう。
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center justify-between rounded-2xl bg-slate-800/80 px-3 py-2">
                <span className="text-slate-300">ウォレット</span>
                <span className="rounded-xl bg-slate-900 px-2 py-1 text-[11px] text-slate-400">
                  未接続
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 px-3 py-2">
                <span className="text-slate-300">今日のセッション</span>
                <span className="text-[11px] text-slate-400">0 アプリ起動</span>
              </div>
            </div>
          </header>

          {/* クイックアクション */}
          <section className="rounded-3xl bg-slate-900/60 p-4 shadow-lg ring-1 ring-slate-800/80">
            <p className="mb-3 text-xs font-semibold tracking-wide text-slate-400">
              クイックアクション
            </p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <button
                  key={action}
                  className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 hover:border-indigo-500/70 hover:bg-slate-800/80"
                >
                  {action}
                </button>
              ))}
            </div>
          </section>

          {/* アプリグリッド */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-wide text-slate-400">
                Synteria アプリレイヤー
              </p>
              <span className="text-[11px] text-slate-500">
                v0.1 – まだダミーUI。ここから実装していく。
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {apps.map((app) => (
                <div
                  key={app.name}
                  className="group flex flex-col justify-between rounded-3xl bg-slate-900/70 p-4 shadow-lg ring-1 ring-slate-800/80 transition hover:-translate-y-0.5 hover:ring-indigo-500/60"
                >
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-indigo-400">
                      {app.tag}
                    </p>
                    <h2 className="mt-1 text-lg font-semibold">{app.name}</h2>
                    <p className="mt-2 text-xs text-slate-400">{app.desc}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      起動するには Synteria OS を拡張
                    </span>
                    <button className="rounded-full border border-slate-600/80 px-3 py-1 text-[11px] text-slate-200 group-hover:border-indigo-500/70 group-hover:text-indigo-300">
                      Launch（準備中）
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
