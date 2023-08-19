import React, { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // execute side effect
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      // cleanup function on unmounting or re-running effect
      clearInterval(key);
    };
    // optional dependency array
  }, [/* 0 or more entries */]);

  //   useEffect(() => {
  //     // This runs after every render
  //   });

  //   useEffect(() => {
  //     // This runs only on mount (when the component appears)
  //   }, []);

  //   useEffect(() => {
  //     // This runs on mount *and also* if either a or b have changed since the last render
  //   }, [a, b]);

  return <p>{counter} seconds have passed.</p>;
}
