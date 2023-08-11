import { Input } from '@nextui-org/input';

import { Icons } from '@/components/ui/icons';

function RecommendationsSearcherIcon() {
  return <Icons.search className='text-gray-500 w-4' />;
}

export function RecommendationsSearcher() {
  return (
    <div>
      <Input
        variant='flat'
        radius='full'
        fullWidth
        startContent={<RecommendationsSearcherIcon />}
      />
    </div>
  );
}
