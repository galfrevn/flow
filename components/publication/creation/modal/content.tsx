'use client';

import { useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';

import { PublicationCreationModalGifs } from '@/components/publication/creation/modal/gifs';

import {
  Avatar,
  Button,
  Chip,
  CircularProgress,
  Divider,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  Tooltip,
} from '@nextui-org/react';

import { Icons } from '@/components/ui/icons';

const maximumPublicationCharacters = 260;

export function PublicationCreationModalContent() {
  const { data: session } = useSession();

  const [publicationStep, setPublicationStep] = useState('content');
  const [publicationContent, setPublicationContent] = useState('');
  const [publicationMedia, setPublicationMedia] = useState({});

  const pendingCharactersPercentage = useMemo(
    () => (publicationContent.length * 100) / maximumPublicationCharacters,
    [publicationContent.length]
  );

  return (
    <ModalContent className='bg-background border-divider border-1'>
      <ModalHeader className='flex flex-col gap-1'>
        Share your thoughts!
      </ModalHeader>
      <ModalBody>
        {publicationStep === 'content' && (
          <div className='flex gap-4'>
            <div className='flex flex-col'>
              <Avatar isBordered src={String(session?.user.image)} />
            </div>
            <div className='flex flex-col w-full'>
              <Chip color='primary' variant='dot'>
                Everyone can see this
              </Chip>
              <Textarea
                fullWidth
                minRows={6}
                maxRows={6}
                value={publicationContent}
                onChange={(e) => setPublicationContent(e.target.value)}
                placeholder='What are you thinking?'
              />
              <p className='text-xs text-neutral-500'>
                By creating this publication, you agree to our Terms of Service
                and Privacy Policy.
              </p>
            </div>
          </div>
        )}
        {publicationStep === 'gifs' && (
          <PublicationCreationModalGifs
            setPublicationMedia={setPublicationMedia}
          />
        )}
      </ModalBody>
      <Divider orientation='horizontal' />
      <ModalFooter className='flex'>
        <div className='w-full flex justify-between'>
          <div className='flex space-x-2'>
            <Tooltip
              showArrow
              placement='bottom'
              content='Add phothos or videos'
            >
              <Button isIconOnly radius='full' variant='light' color='primary'>
                <Icons.image className='w-5 h-5' />
              </Button>
            </Tooltip>
            <Tooltip
              showArrow
              placement='bottom'
              content='Add and animated Gif'
            >
              <Button
                isIconOnly
                radius='full'
                variant='light'
                color='primary'
                onClick={() => setPublicationStep('gifs')}
              >
                <Icons.gif className='w-5 h-5' />
              </Button>
            </Tooltip>
          </div>
          <div className='flex space-x-2'>
            <CircularProgress
              showValueLabel
              value={pendingCharactersPercentage}
              color={
                pendingCharactersPercentage >= 90
                  ? 'danger'
                  : pendingCharactersPercentage > 50
                  ? 'warning'
                  : 'primary'
              }
            />
            <Button
              isDisabled={pendingCharactersPercentage > 100}
              color='primary'
              radius='full'
            >
              Publish
            </Button>
          </div>
        </div>
      </ModalFooter>
    </ModalContent>
  );
}
