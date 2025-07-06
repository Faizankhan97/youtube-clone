import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [isY, setIsY] = useState(0);
  let x = 0;
  const ref = useRef(0);

  let i;
  useEffect(() => {
    i = setInterval(() => {
    //   console.log("Youtube", Math.random());
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="m-2 p-2 border border-black w-96 bg-slate-100">
      <div>
        <button
          className="my-3 p-2 bg-green-300"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Update
        </button>
        <h1 className="font-bold text-2xl">Let = {x}</h1>
      </div>
      <div>
        <button
          className="my-3 p-2 bg-green-300"
          onClick={() => {
            setIsY(isY + 1);
          }}
        >
          Update State
        </button>
        <h1 className="font-bold text-2xl">State = {isY}</h1>
      </div>
      <div>
        <button
          className="my-3 p-2 bg-green-300"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref= ", ref.current);
          }}
        >
          Update Ref
        </button>
        <h1 className="font-bold text-2xl">Ref = {ref.current}</h1>
      </div>
      <button className="bg-red-700 text-white py-2 px-8 my-2 rounded-lg" onClick={() => clearInterval(i)}>Stop</button>
    </div>
  );
};

export default Demo2;
