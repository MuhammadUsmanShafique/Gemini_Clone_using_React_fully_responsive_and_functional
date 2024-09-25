import { assets } from "../../assets/assets";

export default function MainBottom() {
  return (
    <div className="main-bottom">
      <div className="search-box">
        <input type="text" placeholder="Please enter your prompt" />
        <div className="icon">
          <img src={assets.gallery_icon} />
          <img src={assets.mic_icon} />
          <img src={assets.send_icon} />
        </div>
      </div>
      <p className="bottom-info">
        {" "}
        Gemini may display inaccurate info, including about people, so
        double-check its responses. Your privacy and Gemini Apps
      </p>
    </div>
  );
}
