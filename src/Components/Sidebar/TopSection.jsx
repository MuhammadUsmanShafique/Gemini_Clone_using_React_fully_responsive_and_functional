import { assets } from "../../assets/assets";
export default function TopSection({ extended, manageExtend }) {
  console.log(extended);
  return (
    <div className="top">
      <img className="menu" src={assets.menu_icon} onClick={manageExtend} />
      <div className="new-chat">
        <img src={assets.plus_icon} />
        {extended ? <p>New Chat</p> : null}
      </div>
      {extended && (
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} />
            <p>Recent Question</p>
          </div>
        </div>
      )}
    </div>
  );
}
