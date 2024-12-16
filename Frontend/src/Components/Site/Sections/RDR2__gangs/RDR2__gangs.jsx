import React from "react";
import "./RDR2__gangs.css";
import scroll from "../../../../assets/img/scroll.svg";
import dutch from "../../../../assets/img/Dutch.png";
import hosea from "../../../../assets/img/Hosea.png";
import arthur from "../../../../assets/img/Arthur.png";
import john from "../../../../assets/img/John.png";
const RDR2__gangs = () => {
  return (
    <section className="rdr2__gangs">
      <div className="custom-container">
        <div className="row">
          <div className="col-12">
            <div className="rdr2__gangs__heading">
              <h1>The Van der Linde Gang</h1>
              <p>
                A gang of outlaws, renegades and misfits, bonded together under
                the charismatic and idealistic Dutch van der Linde. They have
                chosen to live outside the law and now fear it may be catching
                up with them.
              </p>
              <h2>Outlaws For Life</h2>
              <img
                className="rdr2__gangs__img"
                width="20px"
                src={scroll}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="dutch">
              <div className="dutch__background">
                <img src={dutch} alt="" />
                <h2>Dutch Van Der Linde</h2>
                <h3>
                  "They're chasing us hard, because we represent everything that
                  they fear."
                </h3>
              </div>
              <div className="dutch__info">
                <p>
                  The leader of a sizeable gang of outlaws and misfits.
                  Idealistic, anarchic, charismatic, well-read, well-lived, but
                  possibly starting to unravel under the pressures of the
                  encroaching modern world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="hosea">
              <div className="hosea__background">
                <img src={hosea} alt="" />
                <h2>Hosea Matthews</h2>
                <h3>
                "I wish I had acquired wisdom at less of a price."
                </h3>
              </div>
              <div className="hosea__info">
                <p>
                A master con artist, gentleman and thief, Hosea has been Dutch's closest friend and right-hand man for over twenty years. Intelligent and quick-witted, he can talk his way into, or out of, just about anything.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="arthur">
              <div className="arthur__background">
                <img src={arthur} alt="" />
                <h2>Arthur Morgan</h2>
                <h3>
                "We're thieves in a world that don't want us no more."
                </h3>
              </div>
              <div className="arthur__info">
                <p>
                Dutch's most dependable and capable enforcer since he was a boy, the outlaw life is all Arthur has ever known. Sharp, cool-headed, and ruthless, but with his own sense of honor. A man who gets the job done.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="john">
              <div className="john__background">
                <img src={john} alt="" />
                <h2>John Marston</h2>
                <h3>
                "Guess about all I got left now is doubts. Doubts and scars."
                </h3>
              </div>
              <div className="john__info">
                <p>
                Once an orphaned street kid taken under Dutch's wing at the age of twelve, John has always had to live by his wits. Shrewd, fearless and strong-willed, he and Arthur are Dutch’s proudest protégés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RDR2__gangs;
