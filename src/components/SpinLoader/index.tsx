import clsx from "clsx";

type SpinLoaderProps = {
  containerClasses?: string;
};

export function SpinLoader({ containerClasses }: SpinLoaderProps) {
  return (
    <div className={clsx("flex", "items-center", "justify-center", "h-screen")}>
      <div className="w-10 h-10 border-4 border-t-transparent rounded-full border-slate-900 animate-spin"></div>
    </div>
  );
}
