import * as React from "react";
import { Counter } from "./Counter";
// import { JSCounter } from "./JSCounter";

interface IAppProps {
  greeting?: string;
}

export function App({ greeting }: IAppProps) {
  return (
    <div>
      <h1>Typescript Playground</h1>
      <p>{greeting ? greeting : "Hello world"}</p>
      <Counter start={5} />
      {/* <JSCounter start={10} /> */}
    </div>
  );
}
