'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Modal } from '@nextui-org/react';

interface PublicationCreationModalControllerProps
  extends React.PropsWithChildren {}

export function PublicationCreationModalController({
  children,
}: PublicationCreationModalControllerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const publicationCreation = searchParams.get('publication');

  const handleClosePublicationModal = () =>
    router.replace(pathname, { scroll: false });

  return (
    <Modal
      size='xl'
      placement='top'
      isOpen={publicationCreation === 'create'}
      onOpenChange={handleClosePublicationModal}
    >
      {children}
    </Modal>
  );
}
