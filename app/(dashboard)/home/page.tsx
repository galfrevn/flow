import { PublicationBase } from '@/components/publication/base';
import { PublicationContent } from '@/components/publication/content';
import { PublicationSettings } from '@/components/publication/settings';

export default function Homepage() {
  return (
    <div className='w-full'>
      <PublicationBase>
        <PublicationContent />
        <PublicationSettings />
      </PublicationBase>
      <PublicationBase>
        <PublicationContent />
        <PublicationSettings />
      </PublicationBase>
      <PublicationBase>
        <PublicationContent />
        <PublicationSettings />
      </PublicationBase>
      <PublicationBase>
        <PublicationContent />
        <PublicationSettings />
      </PublicationBase>
    </div>
  );
}
