import { ReactNode, Fragment, useMemo } from 'react'
import { useSession } from 'next-auth/react';

import Header from 'components/Header';
import AddPostButton from 'components/AddPostButton';
import BottomNavigation from 'components/BottomNavigation';
import { useRouter } from 'next/router';

interface AppMainLayoutProps {
  children: ReactNode;
}
const AppMainLayout = ({ children }: AppMainLayoutProps) => {

  const { data } = useSession();
  const { pathname } = useRouter()

  const inPostPage = useMemo(() => {
    return pathname.includes("/post/")
  }, [pathname])

  return (
    <Fragment>
      <Header {...data as any} withBackButton={inPostPage} />
      {children}
      {/* {!inPostPage && <AddPostButton />} */}
      {!inPostPage && <BottomNavigation />}

    </Fragment>
  )
}

export default AppMainLayout