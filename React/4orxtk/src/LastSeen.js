import React from "react";

const LastSeen = ({ dateTime }) => {
  const formateDate = (dt) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const a = new Date(dt);
    const b = new Date();
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    const diffDays = Math.floor((utc2 - utc1) / _MS_PER_DAY);
    if (diffDays === 0) {
      return `today at ${a.getHours()}:${a.getMinutes()}`;
    } else if (diffDays === 1) {
      return `yeaster day at ${a.getHours()}:${a.getMinutes()}`;
    } else if (diffDays > 30) {
      return `a month ago ${a.getFullYear()}-${a.getMonth()}-${a.getDate()}`;
    } else {
      return `at ${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`;
    }
  };
  return (
    <div>
      <p>last seen {formateDate(dateTime)}</p>
    </div>
  );
};

export default LastSeen;
