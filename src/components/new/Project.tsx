import Image from 'next/image';

export default function Project() {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <div className="relative w-full h-full">
        <Image src="/projects/gaitoni.webp" alt="todo" fill className="object-cover" />
      </div>
      <h3 className="text-sm font-medium leading-none uppercase">Gaitoni Plomberie</h3>
    </div>
  );
}
