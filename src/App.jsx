import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import JobListing from "./pages/JobListing";
import CandidateProfile from "./pages/CandidateProfile";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/job-listings" element={<JobListing />} />
        <Route path="/candidate-profile" element={<CandidateProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
