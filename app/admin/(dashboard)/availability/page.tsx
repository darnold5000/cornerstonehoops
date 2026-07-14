import { AvailabilityTool } from "@/components/admin/availability-tool";
import { requireAdmin } from "@/lib/auth";
import { getTrainers } from "@/lib/data";

export default async function AvailabilityPage() {
  await requireAdmin();
  const trainers = await getTrainers();

  return (
    <>
      <div className="space-y-6">
        <div>
          <h2 className="font-heading text-3xl tracking-wide">
            Private lesson availability
          </h2>
          <p className="text-sm text-muted-foreground">
            Generate bookable appointment slots from a trainer&apos;s open window.
          </p>
        </div>
        <AvailabilityTool trainers={trainers} />
      </div>
    </>
  );
}
