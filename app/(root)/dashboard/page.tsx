import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Project {
  id: string;
  name: string;
  user: {
    name: string;
  };
}

const fetchProjects = async () => {
  const { data } = await axios.get('/api/projects');
  return data.projects;
};

export default function Dashboard() {
  const { data: projects, error, isLoading } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Projects</h1>
      <ul>
        {projects?.map((project) => (
          <li key={project.id} className="mb-2">
            {project.name} - Owned by {project.user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
