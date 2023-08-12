import { PublicationCreationModalController } from '@/components/publication/creation/modal/controller';
import { PublicationCreationModalContent } from '@/components/publication/creation/modal/content';

export function PublicationCreationModal() {
  return (
    <PublicationCreationModalController>
      <PublicationCreationModalContent />
    </PublicationCreationModalController>
  );
}
