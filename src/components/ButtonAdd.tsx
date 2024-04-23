"use client";
import { title } from "process";
import { useState, useEffect } from "react";

export default function ButtonAdd({ }) {

  const liste = 
  return (
    <div>
      <ul>
        {liste.map((liste) => (
          <li key={numero}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
