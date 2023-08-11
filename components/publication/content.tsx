import Link from 'next/link';

import { Avatar } from '@nextui-org/avatar';
import { Icons } from '@/components/ui/icons';

interface PublicationContentProps {}

export function PublicationContent({}: PublicationContentProps) {
  return (
    <div className='flex gap-4'>
      <div className='flex flex-col'>
        <Link href='/u/galfrevn'>
          <Avatar
            isBordered
            src='https://pbs.twimg.com/profile_images/1292298512542171136/kZlAHkwR_400x400.jpg'
          />
        </Link>
      </div>
      <div className='flex flex-col'>
        <PublicationCreatorName
          username='galfrevn'
          completeName='Valentin Galfré'
          isVerified={true}
        />
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At mollitia
          id deserunt illo numquam exercitationem cum ex optio maxime qui
          consequatur consectetur nobis inventore totam earum reprehenderit
          ducimus assumenda, quos pariatur! Excepturi, optio commodi cumque
          illum quod eum corporis laudantium repellendus corrupti perspiciatis
          quibusdam odio tempore dolorem, deleniti maiores sit.
        </p>
      </div>
    </div>
  );
}

interface PublicationCreatorNameProps {
  username: string;
  isVerified: boolean;
  completeName: string;
}

function PublicationCreatorName({
  username,
  isVerified,
  completeName,
}: PublicationCreatorNameProps) {
  return (
    <div className='flex items-center space-x-1'>
      <Link href={`/u/${username}`} >
        <h5 className='font-semibold hover:underline '>{completeName}</h5>
      </Link>
      {isVerified && <Icons.verification className='text-primary w-5 ' />}
      <p className='text-gray-500'>@{username}</p>
    </div>
  );
}
