import { AdminShell } from "@/components/admin/admin-shell";
import { requireStaff } from "@/lib/auth";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await requireStaff();
  return <AdminShell profile={profile}>{children}</AdminShell>;
}
