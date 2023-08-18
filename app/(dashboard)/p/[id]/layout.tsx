import { Divider } from "@nextui-org/divider";
import { BackButton } from "@/components/navigation/back";

interface PublicationLayoutProps extends React.PropsWithChildren {}

export default function PublicationLayout({ children }: PublicationLayoutProps) {
  return (
    <section className="relative w-full lg:w-4/5">
      <header className="p-2 flex items-center gap-4 bg-background/80 backdrop-blur-sm z-50 sticky top-0">
        <BackButton />

        <div>
          <h2 className="font-semibold text-lg leading-tight">Publication</h2>
        </div>
      </header>
      <Divider orientation="horizontal" />

      <main className="w-full scrollbar-hide pb-4 absolute top-0 h-screen overflow-y-scroll pt-14">
        {children}
      </main>
    </section>
  );
}
