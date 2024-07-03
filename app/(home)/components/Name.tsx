import React from "react";

const Name = ({ name }: { name: string }) => {
  return (
    <div>
      <h1 className=" text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        {name}
      </h1>
    </div>
  );
};

export default Name;
