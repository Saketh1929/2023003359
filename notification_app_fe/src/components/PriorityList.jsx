import React from "react";
import { getPriority } from "../utils/priorityCalculator";

const PriorityList = ({ notifications }) => {
  const sorted = [...notifications]
    .sort(
      (a, b) =>
        getPriority(b.Type) -
        getPriority(a.Type)
    )
    .slice(0, 5);

  return (
    <div>
      <h2>Priority Notifications</h2>

      {sorted.map((item) => (
        <p key={item.ID}>
          {item.Type} - {item.Message}
        </p>
      ))}
    </div>
  );
};

export default PriorityList;