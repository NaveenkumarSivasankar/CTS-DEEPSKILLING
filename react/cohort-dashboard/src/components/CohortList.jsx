import CohortDetails from "./CohortDetails";
import cohorts from "../data/cohorts";

function CohortList() {
  return (
    <div className="cohort-list">
      {cohorts.map((cohort) => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default CohortList;
