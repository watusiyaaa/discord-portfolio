import { useState } from "react";
import Button from "./tools/button";
import "./mid-bt.css";

export default function MidBt() {
  /* The code snippet is using React's `useState` hook to create two state variables `ifOpen` and
`ifExist` along with their respective setter functions `setOpen` and `setExist`. */
  const [ifOpen, setOpen] = useState(false);
  const [ifExist, setExist] = useState(null);

  /**
   * The function `toggle` toggles the state of a panel between open and closed in a React component.
   */
  const toggle = (panel) => {
    if (ifOpen === panel) {
      setExist(panel);
      setTimeout(() => {
        setOpen(false);
        setExist(null);
      }, 500);
    } else {
      setOpen(panel);
      setExist(null);
    }
  };

  return (
    <div className="mid-bt">
      {/* buttons section */}
      <div className="buttons">
        <Button text={"Likes/Dislikes"} onClick={() => toggle("likes")} />
        <Button text={"DM's/Pings"} onClick={() => toggle("dm")} />
        <Button text={"Stanlist"} onClick={() => toggle("stan")} />
        <a
          href="https://tinyurl.com/danibotcardlist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text={"Card List [Dani Bot]"} />
        </a>
      </div>

      {/* panels section */}
      {(ifOpen === "likes" || ifExist === "likes") && (
        // placeholder only
        <div className={`panels${ifExist === "likes" ? " exit" : ""}`}>
          <h3>Like</h3>
          <ul>
            <li className="pnli">
              𖤐 Food: Chocolates, Ice Cream, Noodles{" "}
              <span className="prt">(any form of cooking them)</span>, Fish,
              Fruits and Veggies <span className="prt">(mostly)</span>
            </li>
            <li className="pnli">
              𖤐 Movies: Anime, C-Dramas{" "}
              <span className="prt">
                (more into the ancient history concept)
              </span>
              , and some K-Dramas, Action, Documentary
            </li>
            <li className="pnli">
              𖤐 Music Genre: Pop, Kpop, Jpop, Rap, Hiphop, R&B, Alternative,
              Alternative R&B, Ballad, Indie, Neo Soul
            </li>
            <li className="pnli">
              𖤐 Games: Hack and Slash, RPG, Turn-based{" "}
              <span className="prt">(a lil bit)</span>, Rhythm Games, Open World
            </li>
          </ul>

          <h3>Dislikes</h3>
          <ul>
            <li className="pnli">
              𖤐 Food: I really only hate eggplants and raw garlic{" "}
              <span className="prt">(i like the flavored one though)</span> also
              any food that is weird{" "}
              <span className="prt">(but that's given tbh so lol)</span>
            </li>
            <li className="pnli">
              𖤐 Movies: Horror. and Live-Actions{" "}
              <span className="prt">(not all of them ofc)</span>
            </li>
            <li className="pnli">
              𖤐 Music Genre: EDM, Metal Rock. Basically noise music{" "}
              <span className="prt">
                (ok tbf there are some EDM songs that i can tolerate lol)
              </span>
            </li>
            <li className="pnli">
              𖤐 Games: Just MOBA for now since i haven't even experienced the
              rest so{" "}
              <span className="prt">
                (i do like watching ppl play this tho)
              </span>
            </li>
          </ul>
        </div>
      )}

      {(ifOpen === "dm" || ifExist === "dm") && (
        // placeholder only
        <div className={`panels${ifExist === "dm" ? " exit" : ""}`}>
          <h3>DM</h3>
          <p className="dmpn">
            No DMs unless its really important. I don't really entertain people
            if the DM is not that important{" "}
            <span className="prt">(except for friends of course)</span>.
          </p>

          <h3>Pings</h3>
          <p className="dmpn">
            Only ping me if its important as well{" "}
            <span className="prt">(like card trade/buy or bug fix)</span>. I'd
            still entertain even if it isn't though.
          </p>
        </div>
      )}

      {(ifOpen === "stan" || ifExist === "stan") && (
        // placeholder only
        <div className={`panels${ifExist === "stan" ? " exit" : ""}`}>
          <h3>Ult</h3>
          <p className="tier">
            NJZ{" "}
            <span className="prt">
              (Im starting to actual ulting some artist so there might be more
              artist in this panel soon lol)
            </span>
          </p>

          <h3>Stan</h3>
          <p className="tier">2NE1, Blackpink, XG, aespa, Bigbang, Meovv</p>

          <h3>Casual</h3>
          <p className="tier">Ive, Seventeen, Boynextdoor, Riize</p>

          <h3 className="otk">Outside Kpop</h3>
          <p className="tier">
            Lady Gaga, Kendrick Lamar, The Internet, Tyler the Creator, SZA,
            Laufey, Chapell Roan, 5SOS, Bruno Mars, Joji, Vaundy, King Gnu
            Aimer, LiSA, YOASOBI, Yorushika, SawanoHiroyuki[nZk], Hikaru Utada
          </p>
        </div>
      )}
    </div>
  );
}
