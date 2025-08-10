import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  // React কম্পোনেন্টে
const fetchData = async () => {
  try {
    const response = await fetch('/api/message'); // শুধু /api/message ব্যবহার করুন
    const data = await response.json();
    console.log(data);
    setText(data.message)
  } catch (error) {
    console.error('ত্রুটি:', error);
  }
};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     <h1>{text}</h1>
    </>
  );
}

export default App;
