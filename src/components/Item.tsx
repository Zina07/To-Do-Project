"use client";
import { useState, useEffect } from "react";

export default function Item({ numero, title }) {
  return (
    <div className="">
      {numero} - {title}
    </div>
  );
}
