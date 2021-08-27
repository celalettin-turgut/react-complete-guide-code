import React from "react";
import GoalCard from "../GoalCard/GoalCard";

const GoalList = ({ data, setMyGoals }) => {
  return (
    <div>
      {data.map((goal, index) => (
        <GoalCard
          setMyGoals={setMyGoals}
          index={index}
          key={goal.id}
          goal={goal}
        />
      ))}
    </div>
  );
};

export default GoalList;
