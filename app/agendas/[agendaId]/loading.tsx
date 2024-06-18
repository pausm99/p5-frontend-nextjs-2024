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
          <li key={n} className="flex-1">
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
      <div className="absolute top-0 right-0 flex justify-between items-center gap-2">
        <Button variant="destructive" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path d="M133.1 128l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H133.1zm61.6 265L188 160h18.5l6.9 233h-18.7zm70.3 0h-18V160h18v233zm52.3 0h-18.6l6.8-233H324l-6.7 233z" fill="currentColor"></path><path d="M364 92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9 0-9.7 1.8-13.4 5L184 92h-36c-17.6 0-30 8.4-30 26h276c0-17.6-12.4-26-30-26z" fill="currentColor"></path></svg>
        </Button>
        <Button size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2-2.92l9.06-9.06l.92.92L5.92 19H5zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"></path></svg>
        </Button>
      </div>
      <GoBackButton />
    </div>
  )
}
