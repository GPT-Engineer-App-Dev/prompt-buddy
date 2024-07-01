import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to Prompt Manager</h1>
      <p>Manage your prompts efficiently and effectively.</p>
      <div className="mt-4">
        <Link to="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}

export default Index;