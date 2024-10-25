import AnimatedLink from '@/components/common/AnimatedLink';

export default function NotFound() {
  return (
    <div className="w-full h-screen   flex flex-col gap-4 justify-center items-center sm:h-full">
      <h1 className="font-medium leading-none" style={{ fontSize: 'clamp(4rem, 12vw, 7.5rem)' }}>
        Not Found
      </h1>
      <p className="mb-6" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
        The page you&apos;re looking for does not exist.
      </p>
      <span className="leading-none" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
        <AnimatedLink title="Return Home" url="/" />
      </span>
    </div>
  );
}
