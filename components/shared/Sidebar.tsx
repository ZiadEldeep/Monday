import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-700 p-4 text-white">
      <ul>
        <li className="mb-4">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
