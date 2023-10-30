import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskList from './TaskList';
import axiosInstance from '../../utils/axios';
import AddTodo from './AddTask';

export default function Todo() {
  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.get('/tasks');
        setTaskList(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    const newTodo = taskList.filter((todo) => id !== todo.id);
    try {
      const response = await axiosInstance.delete(`/task/${id}`);
      const data = await response.data;
      setTaskList(newTodo);
      toast.success(data.message);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="max-w-sm w-full shadow-lg bg-white p-8 rounded-xl opacity-70">
      <ToastContainer
        position="bottom-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex justify-center cursor-default bg-gray-200 rounded-3xl px-4 py-1 color-gray hover:scale-110 transition-all">
        <div className="w-full p-3">
          <p className="text-3xl text-gray-600">Task List</p>
        </div>
      </div>
      <AddTodo setTodoList={setTaskList} />
      {isLoading && <div className="mt-3">loading...</div>}
      <TaskList
        todoList={taskList}
        handleDelete={handleDelete}
        setTodoList={setTaskList}
      />
    </div>
  );
}
