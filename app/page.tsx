"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import { useState } from "react";
import { Data } from "../constants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState(Data);

  return (
    <div>
      <AddTodo data={data} setData={setData} />
      <TodoList data={data} setData={setData} />
    </div>
  );
}
