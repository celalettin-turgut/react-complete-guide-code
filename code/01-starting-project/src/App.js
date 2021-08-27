import { useState } from "react";
import AddGoal from "./components/AddGoal/AddGoal";
import GoalList from "./components/GoalList/GoalList";
import "./App.css";

const App = () => {
  const [myGoals, setMyGoals] = useState([]);

  console.log(myGoals);

  const sortedGoals = myGoals.sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div>
      <section id="goal-form">
        <AddGoal setMyGoals={setMyGoals} />
      </section>
      <section id="goals">
        <GoalList data={sortedGoals} setMyGoals={setMyGoals} />
      </section>
    </div>
  );
};

export default App;
