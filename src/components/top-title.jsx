import "./top-title.css";

export default function TopTitle() {
  return (
    <div className="top">
      <img
        src="./src/assets/profile1.jpg"
        alt="watusiyaaa-website-profile"
        className="img"
      />
      <div className="info-container">
        <h1 className="title">WATUSIYAAA</h1>
        <h2 className="nick">
          Hi! Call me <span className="s1">Jini</span>
        </h2>
        <ul>
          <li className="info">She/Her</li>
          <li className="info">Philippines</li>
          <li className="info">04z</li>
        </ul>
      </div>
    </div>
  );
}
