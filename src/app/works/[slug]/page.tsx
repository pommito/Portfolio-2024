import SocialLink from '@/components/common/SocialLink';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function Page({ params: { slug } }: { params: { slug: string } }) {
  return (
    <main className="grid grid-rows-8 grid-cols-8 gap-4 w-full h-full max-w-[1920px] sm:gap-6 2xl:mx-auto">
      <section className="flex flex-col gap-3 col-start-1 col-span-8 row-start-2 row-span-2 sm:col-span-5 md:col-span-5">
        <Breadcrumb pageTitle="Work title" />
        <h1 className="font-medium text-6xl leading-none">Work title</h1>
        <p className="text-balance leading-normal lg:w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
          enim. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod
          felis, at varius
        </p>
        <ul className="flex items-end gap-6">
          <SocialLink title="Source code" url="mailto:victor.lebecq.pro@gmail.com" />
          <SocialLink title="Visit website" url="https://github.com/pommito" />
        </ul>
      </section>
    </main>
  );
}
