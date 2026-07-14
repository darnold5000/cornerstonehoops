export default function AdminLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="space-y-2">
        <div className="h-8 w-48 rounded-md bg-[#e6dcc6]" />
        <div className="h-4 w-72 rounded-md bg-[#efe8d8]" />
      </div>
      <div className="grid gap-3">
        <div className="h-24 rounded-xl bg-[#efe8d8]" />
        <div className="h-24 rounded-xl bg-[#efe8d8]" />
        <div className="h-24 rounded-xl bg-[#efe8d8]" />
      </div>
    </div>
  );
}
