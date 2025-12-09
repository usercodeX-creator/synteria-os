// app/chat/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Message = {
  id: number;
  from: "me" | "system";
  text: string;
  time: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "system",
      text: "Synteria Chat Layer へようこそ。ここはOS内部の会話レイヤーです。",
      time: "00:00",
    },
    {
      id: 2,
      from: "system",
      text: "まずはUIだけ。あとからリアルタイム / AI / Web3 をつないでいこう。",
      time: "00:00",
    },
  ]);

  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const now = new Date();
    const time = now.toTimeString().slice(0, 5); // HH:MM

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        from: "me",
        text,
        time,
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // メッセージ追加のたびに一番下までスクロール
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages.length]);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      {/* 背景グロー */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-indigo-500/35 blur-3xl" />
        <div className="absolute right-[-50px] top-20 h-64 w-64 rounded-full bg-emerald-400/25 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen flex-col">
        {/* ヘッダー */}
        <header className="border-b border-white/10 bg-slate-950/80 px-4 py-2.5 backdrop-blur-xl">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-100 hover:border-indigo-400 hover:bg-indigo-500/40"
              >
                ← Home
              </Link>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.24em] text-slate-200/80">
                  CHAT LAYER
                </p>
                <p className="text-xs sm:text-sm font-semibold">
                  Synteria Chat Space
                </p>
              </div>
            </div>

            <p className="hidden text-[11px] text-slate-300 sm:block">
              Phase 1：ローカル専用チャネル（まだサーバー接続なし）
            </p>
          </div>
        </header>

        {/* 本体 */}
        <main className="flex flex-1 justify-center px-3 py-4 sm:px-4 sm:py-6">
          <div className="flex h-[calc(100vh-7rem)] w-full max-w-5xl flex-col rounded-3xl border border-white/12 bg-white/8 p-3 shadow-2xl shadow-black/60 backdrop-blur-2xl sm:p-4">
            {/* 上部バー */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-200/85">
                    DIRECT CHANNEL
                  </p>
                  <p className="text-[11px] text-slate-200/90">
                    あなた専用のローカルチャット
                  </p>
                </div>
              </div>
              <span className="text-[10px] text-slate-300">
                Log：ブラウザのメモリにのみ保存
              </span>
            </div>

            {/* メッセージリスト */}
            <div
              ref={listRef}
              className="mt-3 flex-1 space-y-2 overflow-y-auto rounded-2xl bg-slate-950/40 p-3 text-xs"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.from === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-2xl px-3 py-2 shadow-md ${
                      m.from === "me"
                        ? "rounded-br-sm bg-indigo-500/80 text-slate-50"
                        : "rounded-bl-sm bg-white/10 text-slate-100"
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">
                      {m.text}
                    </p>
                    <div className="mt-1 flex items-center justify-between text-[10px] text-slate-200/80">
                      <span>{m.from === "me" ? "You" : "System"}</span>
                      <span>{m.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 入力欄 */}
            <form
              className="mt-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 p-2 text-xs shadow-inner shadow-black/60"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <input
                className="h-9 flex-1 rounded-xl bg-transparent px-3 text-xs text-slate-50 outline-none placeholder:text-slate-500"
                placeholder="メッセージを入力して Enter で送信…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                type="submit"
                className="h-9 rounded-xl bg-indigo-500 px-4 text-xs font-medium text-slate-50 hover:bg-indigo-400 disabled:opacity-40"
                disabled={!input.trim()}
              >
                送信
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
