import { Link } from "react-router-dom";
import { NotebookIcon } from "lucide-react";

export const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-b-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-xl font-bold">No Notes Found</h3>
      <p className="text-base-content/70">
        You don't have any notes yet. Create your first note!
      </p>

      <Link
        to={"/create"}
        className="btn btn-primary justify-center mt-4 block mx-auto"
      >
        Create Your First Note
      </Link>
    </div>
  );
};
