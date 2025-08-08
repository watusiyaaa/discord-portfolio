import Profile from "../assets/profile.jpg";
import MusicPlayer from "./tools/music-player";
import "./top-title.css";

export default function TopTitle() {
  return (
    <>
      <div className="top">
        <img src={Profile} alt="watusiyaaa-website-profile" className="img" />
        <div className="info-container">
          <h1 className="title">WATUSIYAAA</h1>
          <h2 className="nick">
            Hi! Call me <span className="s1">Jini</span>
          </h2>
          <ul className="list">
            <li className="info">She/Her</li>
            <li className="info">Philippines</li>
            <li className="info">04z</li>
          </ul>
        </div>
      </div>
      <div className="below">
        <MusicPlayer />
      </div>
    </>
  );
}
