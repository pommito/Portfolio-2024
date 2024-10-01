import FullScreenCanvas from './components/Canvas';
import Experience from './components/Experience';

export default function Playground() {
  return (
    <main className="relative h-screen">
      <FullScreenCanvas>
        <Experience />
      </FullScreenCanvas>
    </main>
  );
}
