'use client';

import { PropsWithChildren } from 'react';
import { signOut } from 'next-auth/react';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';

interface UserInformationActions extends PropsWithChildren {}

export function UserInformationActions({ children }: UserInformationActions) {
  const handleLogout = () => signOut({ callbackUrl: '/authentication/start' });

  return (
    <Dropdown>
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu>
        <DropdownItem color='danger' onClick={handleLogout}>
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
