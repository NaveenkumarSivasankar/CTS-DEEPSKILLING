import "./App.css";
import CohortList from "./components/CohortList";
import cohorts from "./data/cohorts";

function App() {
  return (
    <div>
      <h1>Cohort Dashboard</h1>
      <CohortList cohorts={cohorts} />
    </div>
  );
}

export default App;
