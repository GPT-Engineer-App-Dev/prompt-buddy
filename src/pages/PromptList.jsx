import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function PromptList() {
  const [prompts, setPrompts] = useState([
    { id: 1, title: "Prompt 1", description: "Description for Prompt 1" },
    { id: 2, title: "Prompt 2", description: "Description for Prompt 2" },
  ]);

  return (
    <div>
      <h1 className="text-3xl text-center">Prompt List</h1>
      <div className="flex justify-end mb-4">
        <Link to="/add-prompt">
          <Button>Add New Prompt</Button>
        </Link>
      </div>
      <ul>
        {prompts.map((prompt) => (
          <li key={prompt.id} className="mb-4">
            <h2 className="text-xl">{prompt.title}</h2>
            <p>{prompt.description}</p>
            <Link to={`/edit-prompt/${prompt.id}`}>
              <Button>Edit</Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PromptList;