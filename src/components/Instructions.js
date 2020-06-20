import React from "react";
import "./Instructions.css";
import Pic1 from "./Instructions/image003.png";
import Pic2 from "./Instructions/move.png";
import Pi1 from "./Instructions/1.png";
import Pi2 from "./Instructions/2.png";
import Pi3 from "./Instructions/3.png";
import Pi4 from "./Instructions/4.png";
import Pi5 from "./Instructions/5.png";
import Pi7 from "./Instructions/7.png";
import Sett from "./Instructions/settings.png";
import Predefined from "./Instructions/predefined.png";
import Email from "./Instructions/email.jpg";
const Instructions = () => {
  return (
    <div>
      <br />
      <div className="container white z-depth-5 grey darken-4 white-text">
        <div className="container">
          <br />
          <h4 className="center">Instruction, key bindings and tips.</h4>
          <br />
          <h5>Installation</h5>
          <img
            src={Pic1}
            alt="application"
            style={{
              height: "100px",
              width: "auto",
            }}
          />
          <p>
            {" "}
            If you want to use the app just double click on it, any location on
            C:/drive will suite it, keeping it on shared drive location will
            work but it won’t be as fast and stable.
          </p>
          <img
            src={Pic2}
            alt="application instruction"
            style={{
              height: "70px",
              width: "auto",
            }}
          />
          <p>
            Moving the application to any other location press top/right button
            Then press c.. letter and drag the application where you want it.
          </p>
          <h5>Multiple clipboard storage</h5>
          <br />
          <div>
            <img
              src={Pi1}
              alt="application instruction"
              style={{
                height: "70px",
                width: "auto",
              }}
            />
            <img
              src={Pi2}
              alt="application instruction"
              style={{
                height: "70px",
                width: "auto",
              }}
            />
            <img
              src={Pi3}
              alt="application instruction"
              style={{
                height: "70px",
                width: "auto",
              }}
            />
            <img
              src={Pi4}
              alt="application instruction"
              style={{
                height: "70px",
                width: "auto",
              }}
            />
          </div>
          <br />
          <p>
            I have copied last 3 lines of this email as an example, indexing
            lasts until you use the script to paste anything then it starts
            counting from the beginning. When you paste anything the text
            becomes red (second picture), if the text is red and you copy
            something indexing starts again. Of course you can change the
            clipboard you want to use. Just Hold Ctrl and move mouse wheel
            up/down to change it. Each time you copy or change clipboard you can
            see the view near the mouse pointer.
          </p>
          <br />
          <div>
            <img
              src={Pi5}
              alt="application instruction"
              style={{
                height: "200px",
                width: "auto",
              }}
            />
            <img
              src={Pi7}
              alt="application instruction"
              style={{
                height: "100px",
                width: "auto",
              }}
            />
          </div>
          <br />
          <p>
            Tooltip view after pressing ctrl+middle key and the result of
            pasting with ctrl+right click. Tooltip view after pressing
            ctrl+middle key and the result of pasting with ctrl+right click.
          </p>
          <br />
          <h5>Settings</h5>
          <img
            src={Sett}
            alt="application instruction"
            style={{
              height: "200px",
              width: "auto",
            }}
          />
          <br />
          <p>
            There are 3 different controls, you can test and choose which one
            your prefer to use. You can enable all of the controls but I
            recommend to use Standard or Keyboard controls with enabled Ctrl+C
            shortcut.
          </p>
          <h5>Predefined messages</h5>
          <img
            src={Predefined}
            alt="application instruction"
            style={{
              height: "200px",
              width: "auto",
            }}
          />
          <br />
          <p>
            Predefined messages(start typing with “*” or “;”: If you want to
            save any clipboard as predefined message you can just copy it and
            then press M button on graphical interface, this window should open:
            Now to paste predefined message you can type “;test1” and it will be
            pasted automatically. Remember that codes have to start with “;” (If
            you have any other preferences let me know it can be easily
            updated). (OF COURSE DON’T USE QUOTATION MARKS)
          </p>
          <br />
          <h5>Email templates</h5>
          <img
            src={Email}
            alt="application instruction"
            style={{
              height: "200px",
              width: "auto",
            }}
          />
          <br />
          <p>
            Eample of email templates, if you will type "@dele" Email with clipboards in correct places will be produced. 
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
