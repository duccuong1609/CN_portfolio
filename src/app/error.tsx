"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 text-center">
      <h1 className="text-4xl font-bold text-foreground">
        Something went wrong
      </h1>
      <p className="text-muted-foreground max-w-sm">{error.message}</p>
      <button
        className="px-6 py-2 border border-primary text-primary rounded-sm hover:bg-primary/10 transition-all duration-300 font-mono text-sm"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
