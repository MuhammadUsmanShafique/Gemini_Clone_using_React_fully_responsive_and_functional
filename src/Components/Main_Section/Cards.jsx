import { assets } from "../../assets/assets";
import Card from "./Card";
const cardsTextData = [
  "Suggest beautiful places to see on an upcoming road trip",
  "Briefly summarize this concept: urban planning",
  "Brainstorm team bonding activities for our work retreat",
  "Tell me about React js and React native",
];
export default function Cards() {
  return (
    <div className="cards">
      <Card text={cardsTextData[0]} image={assets.compass_icon} />
      <Card text={cardsTextData[1]} image={assets.bulb_icon} />
      <Card text={cardsTextData[2]} image={assets.message_icon} />
      <Card text={cardsTextData[3]} image={assets.code_icon} />
    </div>
  );
}
