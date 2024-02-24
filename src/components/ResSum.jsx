import IconMemory from "/images/icon-memory.svg";
import IconReaction from "/images/icon-reaction.svg";
import IconVerbal from "/images/icon-verbal.svg";
import IconVisual from "/images/icon-visual.svg";
import "./ressum.css";

export default function ResSum() {
  return (
    <>
      <div className="main_container">
        <div className="container">
          <div className="res">
            <h1>Your Result</h1>
            <div className="cyrcle">
              <p>76</p>
              <span>of 100</span>
            </div>

            <div className="bottom">
              <h2>Great</h2>
              <p>
                Your performance exceed 65% of the people conducting the test
                here!
              </p>
            </div>
          </div>
          <div className="summary">
            <h3>Summary</h3>
            <div className="reaction_cont">
              <div className="reaction">
                <div className="left">
                  <img src={IconReaction} alt="Reaction icon" />
                  <p className="red">Reaction</p>
                </div>
                <div className="score_num">
                  <p>80</p> <span>/ 100</span>
                </div>
              </div>
              <div className="memory">
                <div className="left">
                  <img src={IconMemory} alt="Reaction icon" />
                  <p className="yellow">Memory</p>
                </div>
                <div className="score_num">
                  <p>92</p> <span>/ 100</span>
                </div>
              </div>
              <div className="verbal">
                <div className="left">
                  <img src={IconVerbal} alt="Reaction icon" />
                  <p className="green">Verbal</p>
                </div>

                <div className="score_num">
                  <p>61</p> <span>/ 100</span>
                </div>
              </div>
              <div className="visual">
                <div className="left">
                  <img src={IconVisual} alt="Reaction icon" />
                  <p className="blue">Visual</p>
                </div>

                <div className="score_num">
                  <p>73</p> <span>/ 100</span>
                </div>
              </div>
              <button className="btn">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
