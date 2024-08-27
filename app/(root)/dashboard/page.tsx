import { PrismaClient } from '@prisma/client';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const prisma = new PrismaClient();

export default async function Dashboard() {
  const projects = await prisma.project.findMany({
    include: {
      user: true,
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Projects</h1>
      <ul>
        {projects.map((project: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; user: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; }) => (
          <li key={project.id} className="mb-2">
            {project.name} - Owned by {project.user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
