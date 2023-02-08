"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AddTodo({ data, setData }: any) {
  const [task, setTask] = useState("");

  const addTask = () => {
    let obj = {
      id: data?.length + 1,
      task: task,
      complete: false,
    };
    setData([...data, obj]);
  };

  return (
    <>
      <input
        type={"text"}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      />
      <button style={{ margin: "5px" }} onClick={addTask}>
        {" "}
        Add
      </button>
    </>
  );
}
