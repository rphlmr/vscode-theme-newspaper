import React from "react";

type FuncParam = {
  length: number;
};

/**
 * @param {number} length
 */
function forcePush(param: FuncParam) {
  return {
    force: param.length * 1_000,
    lightSide: true,
  };
}

const Jedi = ({ name }: { name: string }) => {
  return <h2>{name}</h2>;
};

export function View() {
  const title = "Master";

  return (
    <div className="flex flex-col">
      <h1>Hello there</h1>
      <Jedi name={`${title} Obi-wan`} />
    </div>
  );
}
