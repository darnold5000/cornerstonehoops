import { SettingsForm } from "@/components/admin/settings-form";
import { requireAdmin } from "@/lib/auth";
import { getBusinessSettings } from "@/lib/data";

export default async function AdminSettingsPage() {
  await requireAdmin();
  const settings = await getBusinessSettings();

  return (
    <>
      <div className="mx-auto max-w-3xl space-y-6">
        <div>
          <h2 className="font-heading text-3xl tracking-wide">
            Business settings
          </h2>
          <p className="text-sm text-muted-foreground">
            Contact details, announcement, and policies used across the site.
          </p>
        </div>
        <SettingsForm settings={settings} />
      </div>
    </>
  );
}
