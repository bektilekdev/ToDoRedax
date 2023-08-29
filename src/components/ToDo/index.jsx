import React, { useEffect, useState } from "react";

const ToDo = () => {
  const [name, setName] = useState("");
  const [task, setTask] = useState([]);
  console.log(task);

  function addTask() {
    if (name === "") {
      alert("404");
    } else {
      const newTask = {
        id: task.length ? task[task.length - 1].id + 1 : 1,
        name: name,
      };
      const data = JSON.parse(localStorage.getItem("todo")) || [];
      data.push(newTask);
      localStorage.setItem("todo", JSON.stringify(data));
      read();
      setName("");
    }
  }

  function read() {
    const newTask = JSON.parse(localStorage.getItem("todo")) || [];
    setTask(newTask);
  }

  function delTask(btnId) {
    localStorage.setItem(
      "todo",
      JSON.stringify([...task.filter((el) => el.id !== btnId)])
    );
    read();
  }

  useEffect(() => {
    read();
  }, []);

  return (
    <div className="container flex items-center justify-center flex-col">
      <div className="flex items-center justify-center">
        <input
          onChange={(e) => setName(e.target.value)}
          type="search"
          id="default-search"
          className="block w-100 my-5 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={name}
        />

        <button
          type="button"
          onClick={addTask}
          className="py-3 px-5 my-2 mx-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          add
        </button>
      </div>

      <ul className="bg-gray-700  text-gray-900 font-medium pl-5 mt-2 space-y-1 list-disc list-inside ">
        {task.map((el) => (
          <li
            className="px-4 py-2 w-[300px] border-b border-gray-900 flex items-center justify-between color-[white] "
            key={el.id}
          >
            {el.name}
            <button
              onClick={() => delTask(el.id)}
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
