import DropdownMenu from './DropdownMenu';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 flex justify-between items-start w-full p-6">
      <h2 className="font-medium leading-none uppercase">Victor Lebecq</h2>
      {/* TODO : Enhance the style of the location */}
      <span className="text-xs leading-none uppercase">Grenoble, France</span>
      <DropdownMenu />
    </header>
  );
}
