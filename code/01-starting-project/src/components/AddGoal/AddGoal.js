import { useState } from "react";

const AddGoal = ({ setMyGoals }) => {
  const [title, setTitle] = useState("");

  const addNewGoal = (e) => {
    e.preventDefault();
    setMyGoals((prevGoals) => [
      ...prevGoals,
      {
        title,
        id: Math.round(Math.random() * 100),
        date: new Date(),
        completed: false,
      },
    ]);
    setTitle("");
  };

  return (
    <form onSubmit={addNewGoal}>
      <label htmlFor=""></label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add New Goal</button>
    </form>
  );
};

export default AddGoal;
