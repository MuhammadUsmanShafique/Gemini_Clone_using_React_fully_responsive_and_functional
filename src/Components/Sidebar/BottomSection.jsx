import { assets } from "../../assets/assets";
export default function BottomSection({ extended }) {
  return (
    <div className="bottom">
      <div className="bottom-item">
        <img src={assets.question_icon} />
        {extended && <p>Help</p>}
      </div>
      <div className="bottom-item">
        <img src={assets.history_icon} />
        {extended && <p>Activity</p>}
      </div>

      <div className="bottom-item">
        <img src={assets.setting_icon} />
        {extended && <p>Setting</p>}
      </div>
    </div>
  );
}
