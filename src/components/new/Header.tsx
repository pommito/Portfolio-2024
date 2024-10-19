import DropdownMenu from './DropdownMenu';

export default function Header() {
  return (
    <header className="flex justify-between items-start">
      <h2 className="font-medium leading-none uppercase">Victor Lebecq</h2>
      <DropdownMenu />
    </header>
  );
}
