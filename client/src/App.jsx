import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/holidays" element={<p>Holidays</p>} />
        <Route path="/holidays/:id" element={<p>1 Holiday</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
