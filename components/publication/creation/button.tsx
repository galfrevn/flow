import Link from 'next/link';

import { Button } from '@nextui-org/button';

export function PublicationCreationButton() {
  return (
    <Button
      fullWidth
      as={Link}
      href='?publication=create'
      scroll={false}
      radius='full'
      color='primary'
      className='font-medium text-md'
    >
      Publish
    </Button>
  );
}
