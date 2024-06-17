import GoBackButton from "@/components/GoBackButton";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { range } from "@/lib/utils";

export default function Loading() {
  return (
    <div className="flex flex-col">
      <Skeleton className="h-8 w-2/4 rounded-full mb-4"></Skeleton>
      <ul className="h-4/5 overflow-y-scroll flex flex-col gap-2 p-8">
        {range(6).map((n) => (
          <li className="flex-1">
            <div className="w-[350px] p-6 flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-3 w-[200px]" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="absolute top-0 right-0">
        <Button size="icon">+</Button>
      </div>
      <GoBackButton />
    </div>
  )
}
