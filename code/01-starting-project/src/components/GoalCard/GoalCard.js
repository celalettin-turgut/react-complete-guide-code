import React from "react";
import styles from "./GoalCard.module.css";

const GoalCard = ({ goal, index, setMyGoals }) => {
  const deleteGoal = () => {
    setMyGoals((prevGoals) =>
      prevGoals.filter((prevGoal) => prevGoal.id !== goal.id)
    );
  };

  const goalCompletedHandler = () => {
    setMyGoals((goals) => [
      ...goals.map((task) => {
        if (task.id === goal.id) goal.completed = !goal.completed;
        return task;
      }),
    ]);
  };

  return (
    <div
      className={`${styles.cardContainer} ${
        goal.completed ? styles.goalCompleted : ""
      }`}
    >
      <span>{index + 1} - </span>
      {goal.title}
      <input
        className={styles.goalCheckBox}
        type="checkbox"
        onChange={goalCompletedHandler}
      />
      <span onClick={deleteGoal} className={styles.deleteGoal}>
        X
      </span>
    </div>
  );
};

export default GoalCard;
