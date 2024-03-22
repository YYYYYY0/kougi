"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [todohuken, setTodohuken] = useState("");
  const [narimoto, setNarimoto] = useState([
    {
      id: "0",
      name: "一番め",
      address: "東京",
      tel: "080-1234-1234",
    },
    {
      id: "1",
      name: "2番目",
      address: "千葉",
      tel: "080-1111-2222",
    },
    {
      id: "2",
      name: "3番目",
      address: "群馬",
      tel: "080-3333-4444",
    },
  ]);

  useEffect(() => {
    const aa = fetch("http://localhost:8000/list");
  }, []);

  const asd = (a: number, b: number): number => {
    const ccc = a + b;
    return ccc;
  };

  const result: number = asd(3, 4);

  console.log(result);

  const handleChangeInput = (event: React.ChangeEvent<HTMLButtonElement>) => {
    setTodohuken(event.target.value);
  };

  const addUser = () => {
    setNarimoto([
      ...narimoto,
      {
        id: "3",
        name: "lee",
        address: todohuken,
        tel: "080-9999-8888",
      },
    ]);

    setTodohuken("");
  };

  return (
    <div>
      <input
        type='text'
        value={todohuken}
        onChange={() => handleChangeInput(event)}
      />
      <button onClick={() => addUser()}>追加する</button>
      {narimoto.map((n) => {
        return <div key={n.id}>{n.address}</div>;
      })}
    </div>
  );
}
