'use client';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';

import { Icons } from '@/components/ui/icons';

interface PublicationSettingsProps {}

export function PublicationSettings({}: PublicationSettingsProps) {
  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <Button
          className='absolute top-3 right-3'
          isIconOnly
          color='primary'
          variant='light'
          radius='full'
        >
          <Icons.dots />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key='new'>Remove</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
