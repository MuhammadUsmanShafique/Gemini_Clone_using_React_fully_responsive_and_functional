import Nav from "./Nav";
import "./MainSecStyle.css";
import Greet from "./Greet";
import Cards from "./Cards";
import MainBottom from "./MainBottom";

export default function MainSec() {
  return (
    <div className="main">
      <Nav />
      <Greet />
      <Cards />
      <MainBottom />
    </div>
  );
}
