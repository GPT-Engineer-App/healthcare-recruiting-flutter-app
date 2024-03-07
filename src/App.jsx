import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import JobListing from "./pages/JobListing";
import CandidateProfile from "./pages/CandidateProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/job-listings" element={<JobListing />} />
        <Route path="/candidate-profile" element={<CandidateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
