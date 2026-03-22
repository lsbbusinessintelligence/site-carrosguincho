import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Index />} />
      </Routes>
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;
