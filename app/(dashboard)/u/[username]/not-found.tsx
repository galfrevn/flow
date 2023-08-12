import { Image } from '@nextui-org/image';
import { Avatar } from '@nextui-org/avatar';

interface UserNotFoundProps {
  params: {
    username: string;
  };
}

export default function UserNotFound({ params }: UserNotFoundProps) {
  return (
    <div className='w-full '>
      <div className='relative'>
        <div className='w-full h-[230px] bg-zinc-900'></div>
        <Avatar isBordered className='absolute -bottom-14 left-6 w-28 h-28' />
      </div>

      <div className='flex flex-col space-y-3 mt-[70px] px-6'>
        <div>
          <h2 className='text-2xl font-semibold leading-tight'>Upps!</h2>
          <p className='text-neutral-600'>It seems that this user does not longer live in here.</p>
        </div>
      </div>
    </div>
  );
}
