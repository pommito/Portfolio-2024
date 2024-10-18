import Grid from '@/components/Grid';

export default function Playground() {
  return (
    <div className="font-pp h-[100dvh] w-screen p-2">
      <div className="relative bg-white h-full w-full border rounded-md px-6 py-6">
        <Grid />
        <header className="flex justify-between items-start">
          <h2 className="font-medium leading-none uppercase">Victor Lebecq</h2>
          <details className="group leading-none uppercase text-right">
            <summary className="cursor-pointer font-medium list-none opacity-80 hover:opacity-100 transition-opacity pl-4 pb-4">
              Menu
            </summary>
            <nav>
              <ul className="flex flex-col gap-4">
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </details>
        </header>
        <main></main>
      </div>
    </div>
  );
}
