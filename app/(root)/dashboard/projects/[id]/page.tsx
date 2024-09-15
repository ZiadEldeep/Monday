"use client"
import KanbanBoard from '@/components/shared/KanbanBoard';
import { tasks } from '@/constant/data';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



// const fetchProjects = async () => {
//   const { data } = await axios.get('/api/project');
//   return data.projects;
// };
const BoardData= {
  tasks: tasks,
  _id: "2",
  name: "ffff",
}
export default function Project() {
  // const {
  //   data: projects,
  //   error: error,
  //   isLoading: isLoading,
  // } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: () => fetchProjects(),
  // });
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading projects</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Projects</h1>
      <ul>
        <KanbanBoard board={BoardData}/>
      </ul>
    </div>
  );
}
