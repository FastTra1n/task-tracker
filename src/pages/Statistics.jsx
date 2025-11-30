import ProgressHeader from "../components/ProgressHeader";

function Statistics() {
  const saved = localStorage.getItem('techTrackerData');
  const technologies = saved ? JSON.parse(saved) : [];
  return (
    <ProgressHeader techs={technologies} />
  );
}

export default Statistics;