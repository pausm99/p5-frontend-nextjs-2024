import GoBackButton from "@/components/GoBackButton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-4">
        <Skeleton className="rounded-lg border bg-card text-card-foreground shadow-sm w-[350px]">
          <div className="space-y-1.5 p-6 flex flex-col gap-3 justify-center items-center">
            <Skeleton className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20"></Skeleton>
            <div className="flex flex-col justify-between items-center">
              <Skeleton className="text-2xl h-8 w-28 font-semibold leading-none tracking-tight mb-2"></Skeleton>
              <Skeleton className="text-sm h-5 w-28 text-muted-foreground"></Skeleton>
            </div>
            <div className="w-full mt-6 flex justify-center gap-4">
              <Skeleton className="text-2xl h-5 w-20 font-semibold leading-none tracking-tight mb-2"></Skeleton>
              <Skeleton className="text-sm h-5 w-20 text-muted-foreground"></Skeleton>
            </div>
          </div>
          <div className="space-y-1.5 p-6 flex flex-col gap-3">
            <div className="flex flex-col justify-between pl-6">
              <Skeleton className="text-2xl h-4 w-28 font-semibold leading-none tracking-tight mb-2"></Skeleton>
              <Skeleton className="text-sm h-3 w-5/6 text-muted-foreground"></Skeleton>
            </div>
            <div className="flex flex-col justify-between pl-6">
              <Skeleton className="text-2xl h-4 w-28 font-semibold leading-none tracking-tight mb-2"></Skeleton>
              <Skeleton className="text-sm h-3 w-5/6 text-muted-foreground"></Skeleton>
            </div>
            <div className="flex flex-col justify-between pl-6">
              <Skeleton className="text-2xl h-4 w-28 font-semibold leading-none tracking-tight mb-2"></Skeleton>
              <Skeleton className="text-sm h-3 w-5/6 text-muted-foreground"></Skeleton>
            </div>
            <div className="flex flex-col justify-between pl-6">
              <Skeleton className="text-2xl h-4 w-28 font-semibold leading-none tracking-tight mb-2"></Skeleton>
              <Skeleton className="text-sm h-3 w-5/6 text-muted-foreground"></Skeleton>
            </div>
          </div>
          <div className="p-6 pt-0 flex items-center justify-evenly px-4">
            <Skeleton className="text-2xl h-8 w-24 font-semibold leading-none tracking-tight mb-2"></Skeleton>
            <Skeleton className="text-2xl h-8 w-24 font-semibold leading-none tracking-tight mb-2"></Skeleton>
          </div>
        </Skeleton>
      </div>
      <GoBackButton />
    </div>
  );
}
