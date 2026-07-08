export default function Loading() {
  return (
    <div className="min-h-screen bg-background px-4 pt-28">
      <div className="container animate-pulse">
        <div className="h-5 w-36 rounded bg-muted" />
        <div className="mt-6 h-16 max-w-3xl rounded bg-muted" />
        <div className="mt-5 h-5 max-w-xl rounded bg-muted" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="h-36 rounded-md bg-muted" />
          <div className="h-36 rounded-md bg-muted" />
          <div className="h-36 rounded-md bg-muted" />
        </div>
      </div>
    </div>
  );
}
