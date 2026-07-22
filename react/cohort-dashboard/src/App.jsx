import './App.css';
import CohortList from './components/CohortList';

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Cohort Dashboard</h1>
        <p>Track learning progress across active and completed cohorts.</p>
      </header>
      <main>
        <CohortList />
      </main>
    </div>
  );
}

export default App;
