import { Image } from '@nextui-org/image';
import { Avatar } from '@nextui-org/avatar';

export default async function Home({ params }: any) {
  /* const user = await getUser(params.username) */

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
          src='https://pbs.twimg.com/profile_images/1292298512542171136/kZlAHkwR_400x400.jpg'
        />
      </div>

      <div className='mt-20'>{params.username}</div>
    </div>
  );
}
