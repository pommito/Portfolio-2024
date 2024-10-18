import Grid from '@/components/Grid';

export default function Playground() {
  return (
    <main className="h-[100dvh] w-screen p-2">
      <div className="relative bg-white border rounded-md h-full w-full ">
        <Grid />
      </div>
    </main>
  );
}
