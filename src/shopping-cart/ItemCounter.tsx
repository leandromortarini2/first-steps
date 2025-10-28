import React, { useState } from "react";

interface Props {
  name: string;
  quantity: number;
}

export default function ItemCounter({ name, quantity }: Props) {
  const [counter, setCounter] = useState(quantity);

  const handleCounter = (prop: string) => {
    if (prop && prop === "more") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
      }}
    >
      <span
        style={{
          width: "150px",
        }}
      >
        {name}
      </span>
      <button onClick={() => handleCounter("more")}>+1</button>
      <span>{counter}</span>
      <button onClick={() => handleCounter("rest")}>-1</button>
    </section>
  );
}
