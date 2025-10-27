import clsx from "clsx";

type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className }: SpinLoaderProps) {
  return (
    <div className={clsx("flex", "items-center", "justify-center", className)}>
      <div className="w-10 h-10 border-4 border-t-transparent rounded-full border-slate-900 animate-spin"></div>
    </div>
  );
}
