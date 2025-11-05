"use client"
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        "prose prose-slate max-w-none",
        "w-full max-w-none",
        "prose-a:text-blue-500 hover:prose-a:underline hover:prose-a:text-blue-700",
        "prose-img:mx-auto",
        "md:prose-lg",
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
