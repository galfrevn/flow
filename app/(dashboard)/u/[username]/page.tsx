import { Image } from '@nextui-org/image';
import { Avatar } from '@nextui-org/avatar';

import { database } from '@/lib/database';
import { Button } from '@nextui-org/button';
import { Icons } from '@/components/ui/icons';

interface UserPageProps {
  params: {
    username: string;
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const user = await database.user.findUnique({
    where: { username: params.username },
  });

  return (
    <div className='w-full '>
      <div className='relative'>
        <Image
          radius='none'
          src='https://pbs.twimg.com/profile_banners/1146924282922057728/1593995949/1500x500'
        />
        <Avatar
          isBordered
          className='absolute -bottom-14 left-6 w-28 h-28'
          src={String(user?.image)}
        />

        <div className='flex gap-3 absolute -bottom-16 right-5'>
          <Button variant='bordered' radius='full' isIconOnly>
            <Icons.dots />
          </Button>

          <Button radius='full' color='primary'>
            Follow
          </Button>
        </div>
      </div>

      <div className='flex flex-col space-y-3 mt-[70px] px-6'>
        <div>
          <h2 className='text-2xl font-semibold leading-tight'>{user?.name}</h2>
          <p className='text-neutral-600'>@{user?.username}</p>
        </div>
        <p>{user?.about}</p>
        <div></div>
      </div>
    </div>
  );
}
