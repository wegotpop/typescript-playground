import * as React from "react";

export function JSCounter({ start }) {
  const [count, updateCounter] = React.useState(start);

  return (
    <div className="counter">
      JS Based counter:
      <div className="count">{count}</div>
      <button onClick={() => updateCounter(count + 1)}>Update</button>
    </div>
  );
}
