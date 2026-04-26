import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="sticky h-10 bg-gray-950 text-white flex justify-end pr-10 items-center gap-6">
      <ul className="flex gap-6">
        <li><Link to="/sorting" className="hover:underline">Sorting</Link></li>
        <li><Link to="/typeshow" className="hover:underline">Type Show</Link></li>
      </ul>
    </nav>
  )
}