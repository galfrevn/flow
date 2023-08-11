import Link from 'next/link';

import { Button } from '@nextui-org/button';

export function CreatePublicationButton() {
  return (
    <Button
      fullWidth
      as={Link}
      href='/p/create'
      radius='full'
      color='primary'
      className='font-medium text-md'
    >
      Publish
    </Button>
  );
}
