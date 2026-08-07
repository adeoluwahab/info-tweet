import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import CreatePage from "./page/CreatePage.jsx";
import NoteDetailpage from "./page/NoteDetailpage.jsx";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 [background:linear-gradient(135deg,_#DCDF3D_0%,_#362CBB_190%)]"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailpage />} />
      </Routes>
    </div>
  );
};

export default App;
