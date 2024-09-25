import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const [extended, setExtended] = useState(false);
  function manageExtend() {
    setExtended((prev) => !prev);
  }
  return (
    <div className="sidebar">
      <TopSection extended={extended} manageExtend={manageExtend} />
      <BottomSection extended={extended} />
    </div>
  );
}
