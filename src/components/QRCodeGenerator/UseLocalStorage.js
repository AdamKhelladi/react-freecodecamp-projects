import { useEffect, useState } from "react";

export default function UseLocalStorage(key, defaultVlaue) {
  const [value, setValue] = useState(() => {
    let currentVlaue;

    try {
      currentVlaue = JSON.parse(
        localStorage.getItem(key) || String(defaultVlaue)
      );
    } catch (error) {
      console.log(error);
      currentVlaue = defaultVlaue;
    }

    return currentVlaue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue];
}
