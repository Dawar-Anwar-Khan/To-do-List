import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className=" flex-1 flex flex-col bg-gray-200 items-center pt-10 space-y-4">
      <Card
        className="w-full max-w-md shadow-2xl py-6 bg-no-repeat bg-right-bottom"
        style={{
          backgroundImage: "url('/sticker.jpg')",
          backgroundSize: "580px, 148px",
        }}
      >
        <CardContent className="space-y-6">
          <h1 className="text-xl text-white bg-gray-400 max-w-fit px-2 py-1 rounded-2xl font-bold">
            To do List
          </h1>
          <div className="flex space-x-3">
            <Input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your task"
              className="w-full border-0 bg-gray-400 text-white"
            />
            <Button
              onClick={addTodo}
              className="border-none bg-gray-400 hover:bg-gray-500"
            >
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Show todos */}
      <ul className="space-y-2 w-full max-w-md ">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white p-2 rounded shadow"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ToDoList;
