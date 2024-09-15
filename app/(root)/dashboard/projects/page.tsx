"use client"
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
  const { data } = await axios.get('/api/project');
  return data.projects;
};

export default function Dashboard() {

  const {
    data: projects,
    error: error,
    isLoading: isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchProjects(),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Projects</h1>
      <ul>
        {projects?.map((project:Project) => (
          <li key={project.id} className="mb-2">
            {project.name} - Owned by {project.user.name}
          </li>
        ))}
        {/* <KanbanBoard tasks={tasks}/> */}
      </ul>
    </div>
  );
}
