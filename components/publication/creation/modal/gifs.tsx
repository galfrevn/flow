import { Input } from "@nextui-org/input";
import { Icons } from "@/components/ui/icons";

interface PublicationCreationModalGifsProps {
  setPublicationMedia: React.Dispatch<React.SetStateAction<string>>;
}

export function PublicationCreationModalGifs({
  setPublicationMedia,
}: PublicationCreationModalGifsProps) {
  return (
    <div>
      <Input
        variant='flat'
        radius='full'
        placeholder="Cute cats"
        fullWidth
        startContent={<Icons.search className='text-gray-500 w-4' />}
      />
    </div>
  );
}
