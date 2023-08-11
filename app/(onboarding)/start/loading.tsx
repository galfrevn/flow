import { Skeleton } from '@nextui-org/skeleton';

export default function OnboardingPageSkeleton() {
  return (
    <div className='mx-auto flex w-full flex-col space-y-6  sm:w-[350px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-4xl font-semibold tracking-tight'>
          Welcome to Flow
        </h1>
        <p className='text-zinc-500 text-muted-foreground'>
          Complete the steps below to get the best experience of this platform.
        </p>
      </div>
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col space-y-2 '>
          <Skeleton className='w-full rounded-lg'>
            <div className='h-14 w-full rounded-lg bg-default-200'></div>
          </Skeleton>
          <Skeleton className='w-4/5 rounded-lg mt-1'>
            <div className='h-4 w-4/5 rounded-lg bg-default-200'></div>
          </Skeleton>
        </div>

        <div className='flex flex-col space-y-2 '>
          <Skeleton className='w-full rounded-lg'>
            <div className='h-14 w-full rounded-lg bg-default-200'></div>
          </Skeleton>
          <Skeleton className='w-2/5 rounded-lg mt-1'>
            <div className='h-4 w-2/5 rounded-lg bg-default-200'></div>
          </Skeleton>
        </div>

        <div className='flex flex-col space-y-2 '>
          <Skeleton className='w-full rounded-lg'>
            <div className='h-28 w-full rounded-lg bg-default-200'></div>
          </Skeleton>
          <Skeleton className='w-3/5 rounded-lg mt-1'>
            <div className='h-4 w-3/5 rounded-lg bg-default-200'></div>
          </Skeleton>
        </div>

        <Skeleton className='w-full rounded-lg'>
          <div className='h-10 w-full rounded-lg bg-default-200'></div>
        </Skeleton>
      </div>
    </div>
  );
}
