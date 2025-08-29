import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task.trim()) return;
    console.log(
      setTodos([...todos, { id: Date.now(), text: task, completed: false }])
    );
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
    <div className="flex justify-center items-center min-h-screen bg-gray-400 p-6 ">
      <Card className="w-full max-w-md shadow-2xl py-6 bg-no-repeat bg-right-bottom" style={{ backgroundImage: "url('/sticker.jpg')", backgroundSize: "488px, 180px", }}>
        <CardContent className="space-y-6">
          <h1 className="text-xl text-white bg-gray-400 max-w-fit px-2 py-1 rounded-2xl font-bold ">To do List</h1>
          <div className="flex space-x-3">
            <Input
              type="text"
              placeholder="Enter your task"
              className="w-full border-0 bg-gray-400 text-white"
            ></Input>
            <Button className=" border-none bg-gray-400">Add</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
