import AnimatedLink from '@/components/common/AnimatedLink';
import Image from 'next/image';

// TODO : Create a 404 page
export default function NotFound() {
  return (
    <div className="w-full h-screen   flex flex-col gap-4 justify-center items-center sm:h-full">
      <h1 className="font-medium leading-none" style={{ fontSize: 'clamp(4rem, 12vw, 7.5rem)' }}>
        Not Found
      </h1>
      <p className="mb-10" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
        The page you're looking for does not exist.
      </p>
      <span className="leading-none  uppercase">
        <AnimatedLink title="Return Home" url="/" />
      </span>
    </div>
  );
}
