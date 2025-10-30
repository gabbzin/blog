import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  postLink: string;
  postHeading: "h1" | "h2";
  createdAt: string;
  excerpt: string;
  title: string;
};
// Não usamos useClient aqui porque esse componente é estático, e para não vazar informações sensiveis para o cliente.
export function PostSummary({
  postLink,
  postHeading,
  createdAt,
  excerpt,
  title,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-600 text-sm/tight"
        dateTime={createdAt}
        title={formatRelativeDate(createdAt)}
      >
        {formatDateTime(createdAt)}
      </time>

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
