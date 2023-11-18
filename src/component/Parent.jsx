import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
function Parent() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <ChildA number={number} />
      <ChildB number={number} />
      <button onClick={() => setNumber((number) => number + 1)}>
        plus + 1
      </button>
    </div>
  );
}

export default Parent;
