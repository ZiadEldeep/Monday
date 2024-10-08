"use client"
import KanbanBoard from '@/components/shared/KanbanBoard';
import TaskTable from '@/components/shared/Table';
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
  name: "IDIA",
}
export default function Dashboard() {

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
        <KanbanBoard board={BoardData}/>
        <TaskTable/>
    </div>
  );
}
