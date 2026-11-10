"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* Share links for an article: Telegram, WhatsApp and LinkedIn open their own share screens in a new tab;
   the last button copies the article's canonical URL. Nothing is loaded from those services.
   Labels come from the server component: ArticlePage messages are not sent to the client. */

const ICONS: Record<string, ReactNode> = {
  telegram: <path fill="currentColor" d="M21.9 4.6 18.7 19.7c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.4l-4.8-1.5c-1-.3-1.1-1 .2-1.5L20.5 3.1c.9-.3 1.6.2 1.4 1.5Z" />,
  whatsapp: <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.7-.4Z" />,
  linkedin: <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.6 4.77 6V21h-4v-5.07c0-1.2-.02-2.77-1.7-2.77-1.7 0-1.95 1.3-1.95 2.68V21h-4V9.75Z" />,
  link: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1" />
      <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" />
    </g>
  ),
  check: <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />,
};

const BTN =
  "grid place-items-center size-10 rounded-full border border-line text-foreground-2 transition-colors duration-200 hover:bg-white/10 hover:text-foreground-hi hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-hi";

function Icon({ name }: { name: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-[18px]">
      {ICONS[name]}
    </svg>
  );
}

export default function ArticleShare({
  url,
  title,
  labels,
  stacked = false,
  className = "",
}: {
  url: string;
  title: string;
  /** `on` holds one "Share on …" label per service key. */
  labels: { label: string; copy: string; copied: string; on: Record<string, string> };
  /** Label on its own line above the buttons, for narrow columns. */
  stacked?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const u = encodeURIComponent(url);
  const links = [
    { key: "telegram", label: "Telegram", href: `https://t.me/share/url?url=${u}&text=${encodeURIComponent(title)}` },
    { key: "whatsapp", label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}` },
    { key: "linkedin", label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // In-app browsers (Telegram, Instagram) often refuse the Clipboard API; the old copy command still works there.
      const area = Object.assign(document.createElement("textarea"), { value: url, readOnly: true });
      area.style.cssText = "position:fixed;opacity:0;pointer-events:none";
      document.body.append(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      if (!ok) return; // copying blocked: leave the button as it is rather than claim success
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className={`text-[14px] text-muted ${stacked ? "basis-full mb-1.5" : "mr-1.5"}`}>{labels.label}</span>
      {links.map((l) => (
        <a
          key={l.key}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.on[l.key]}
          title={l.label}
          className={BTN}
        >
          <Icon name={l.key} />
        </a>
      ))}
      <button type="button" onClick={copy} aria-label={labels.copy} title={labels.copy} className={BTN}>
        <Icon name={copied ? "check" : "link"} />
      </button>
      <span role="status" aria-live="polite" className={`text-[14px] text-foreground-2 transition-opacity duration-200 ${copied ? "opacity-100" : "opacity-0"}`}>
        {copied ? labels.copied : ""}
      </span>
    </div>
  );
}
