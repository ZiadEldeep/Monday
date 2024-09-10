// import { Task } from '@/types/types';
// import Board from '@asseinfo/react-kanban';
// import '@asseinfo/react-kanban/dist/styles.css';

// export default function KanbanBoard({ tasks }:{tasks:Task[]}) {
//   const board = {
//     columns: [
//       {
//         id: 1,
//         title: 'To Do',
//         cards: tasks.filter(task => task.status === 'To Do'),
//       },
//       {
//         id: 2,
//         title: 'In Progress',
//         cards: tasks.filter(task => task.status === 'In Progress'),
//       },
//       {
//         id: 3,
//         title: 'Completed',
//         cards: tasks.filter(task => task.status === 'Completed'),
//       },
//     ],
//   };

//   return (
//     <Board
//       initialBoard={board}
//       renderCard={(task) => (
//         <div>
//           <h5>{task.title}</h5>
//           <p>{task.description}</p>
//         </div>
//       )}
//     />
//   );
// }
