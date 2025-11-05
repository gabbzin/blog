type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  context: React.ReactNode;
};

export default function ErrorMessage({
  pageTitle,
  contentTitle,
  context,
}: ErrorMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div className="min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center">
        <div>
          <h1 className="text-7xl/tight mb-4 font-extrabold">{contentTitle}</h1>
          <div>{context}</div>
        </div>
      </div>
    </>
  );
}
