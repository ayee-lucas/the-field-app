import { Skeleton } from '@/components/ui/skeleton';

export default function PostLoading() {
  return (
    <div className="w-full min-h-fit bg-gray-100 dark:bg-black dark:border-zinc-800 border rounded-lg p-5 my-3 gap-2">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="mt-8">
        <Skeleton className="h-20 w-full" />
      </div>
    </div>
  );
}
