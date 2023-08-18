import { Divider } from "@nextui-org/divider";
import { BackButton } from "@/components/navigation/back";

interface UsernameLayoutProps extends React.PropsWithChildren {
  params: {
    username: string;
  };
}

export default function UserLayout({ children, params }: UsernameLayoutProps) {
  return (
    <section className="relative w-full lg:w-4/5">
      <header className="p-2 flex items-center gap-4 bg-background/80 backdrop-blur-sm z-50 sticky top-0">
        <BackButton />

        <div>
          <h2 className="font-semibold text-lg leading-tight">{params.username}</h2>
          <p className="text-neutral-600 text-sm">20k publications</p>
        </div>
      </header>
      <Divider orientation="horizontal" />

      <main className="w-full scrollbar-hide pb-4 absolute top-0 h-screen overflow-y-scroll pt-14">
        {children}
      </main>
    </section>
  );
}
