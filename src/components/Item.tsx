"use client";
import { Todo } from "./Todo";

export default function Item({ num, title, designation }: Todo) {
  return (
    <div className="">
      {num} {title} {designation}
    </div>
  );
}
