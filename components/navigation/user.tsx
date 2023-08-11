import { getCurrentUser } from '@/lib/session';

import { User } from '@nextui-org/user';
import { Button } from '@nextui-org/button';
import { UserInformationActions } from '@/components/navigation/logout';

export async function UserInformation() {
  const information = await getCurrentUser();

  return (
    <UserInformationActions>
      <Button
        variant='light'
        radius='full'
        className='h-auto justify-start px-2'
      >
        <User
          name={information?.name}
          description='Technical Leader'
          className='justify-start my-2'
          avatarProps={{ src: String(information?.image) }}
        />
      </Button>
    </UserInformationActions>
  );
}
