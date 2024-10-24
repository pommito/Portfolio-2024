import Link from 'next/link';

// TODO : Create a 404 page
export default function NotFound() {
  return (
    <div className="global">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
