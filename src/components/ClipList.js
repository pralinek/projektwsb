import React, { useState, useContext } from "react";
import { ClipContext } from "../contexts/ClipContext";
import Clipboard from "react-clipboard.js";
import uuid from "uuid/v1";
import "./ClipList.css";

const ClipList = () => {
  const [clips, setClips] = useState([]);
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState(
    "That's only simple demo, please highlight below text and click on it"
  );
  const { clipList } = useContext(ClipContext);

  const addClip = () => {
    let text = "";

    if (window.getSelection) {
      text = window.getSelection().toString();
    }
    if (text !== "") {
      setCount(count + 1);
      setClips([...clips, { clip: text, id: uuid() }]);
      clipList.push({ index: count, clip: text, id: uuid() });
    }
    let y = clipList.length;
    switch (y) {
      case 6:
        setMessage("I want some more:)");
        break;
      case 7:
        setMessage(
          "That's good, I can see you are having fun:), as you can see each clipboard is stored in the application, please copy one more time"
        );
        break;
      case 8:
        setMessage("Now click on the scissors, you will see what will happen");
        break;
    }
  };

  const setZero = () => {
    setCount(1);
    alert("The text you clicked is now in your clipboard");
    setMessage("Paste in anywhere you want:)");
    setTimeout(function () {
      setMessage(
        "Like in this simple example, in my application you can always go back to previous clipboard"
      );
    }, 5000);
    setTimeout(function () {
      setMessage(
        "Go to the Instruction and Download Tab if you want to use full version of the application it let you go back to previous clipboards and much more"
      );
    }, 5000);
  };

  const List = clipList.slice(clipList.length - 4, clipList.length).map((x) => {
    return (
      <div className="row container bord" key={x.id}>
        <div className="left truncate col s9">
          {x.index}.{x.clip}
        </div>

        <Clipboard
          className="right btn-floating valign-wrapper"
          onClick={() => setZero()}
          data-clipboard-text={x.clip}
          button-title="Great copy"
        >
          <i className=" tiny material-icons teal darken-4 white-text">
            content_cut
          </i>
        </Clipboard>
      </div>
    );
  });

  return (
    <div className="container row white-text light-blue darken-4 z-depth-5 radius">
      <div className="margin">
        <h5 className="center">Do you want to know how CyberPaste works?</h5>
        <br />
        <div className="grey darken-4 container app z-depth-5">{List}</div>

        <h5 className="center">{message}</h5>
        <br />
        <div
          onMouseDown={addClip}
          className="grey darken-4 white-text container cont"
        >
          <div className="container ">
            Who knew boredom could be so interesting? But it's not just being
            bored; it's what kind of boredom you are experiencing that has
            researchers intrigued. TODAY’S POPULAR STORIES HISTORY ‘It was a
            modern-day lynching’: Violent deaths reflect a brutal American
            legacy SCIENCE How long does the coronavirus last inside the body?
            ANIMALS West Nile virus is still here, and it has killed millions of
            U.S. birds According to an article published in the journal
            Motivation and Emotion, there are five types of boredom—which is one
            more than the research team expected to identify. The boredom
            varieties range from a calm and pleasant experience to something
            more like depression. The research team, led by Thomas Goetz of the
            University of Konstanz and the Thurgau University of Teacher
            Education in Konstanz, Germany, collected real-time data from
            university and high-school students multiple times a day over a
            two-week period. They found that boredom is not only
            widespread—every student in the study experienced some level of
            boredom—but it's also more common than other emotions. "Boredom is
            the most often and most intense emotion experienced by students,"
            wrote Goetz in an email, "much more intense than enjoyment, anxiety
            or anger." Students reported if they were bored, answered questions
            about their positive or negative feelings, and rated how calm or
            fidgety they felt. From these reports the researchers identified
            five different types of boredom. They also found that tedium is
            personal. "People tend to experience specific types of boredom,"
            said Goetz, which could mean that boredom is linked to your
            personality. So, which type of boredom do you experience?
            Indifferent boredom: This is a pleasant form of boredom, said Goetz,
            giving as an example a student who has had a really long day. "You
            go to a class, you are tired, and the class is boring. However, the
            boredom is experienced as rather relaxing and even positive. It is
            still boredom, but you like being bored." Another example? Zoning
            out on the couch in front of a marathon of trashy reality TV.
            Calibrating boredom: Do you let your thoughts wander? If you are
            open to new ideas but don't feel any motivation to actually get up
            and do something, that's calibrating boredom. "It is like
            daydreaming," said Goetz, "but not actively searching for new
            actions." Searching boredom: If you have ever responded to the
            question "why did you do it?" with "because I was bored," you have
            possibly experienced searching boredom. People who experience
            searching boredom are highly motivated to find a more interesting
            activity. This type of boredom can lead to innocuous behavior like
            texting a friend, or may prompt violent or risky actions, explained
            Goetz. "However, searching boredom can also result in highly
            creative and positive actions," he said. "Thus, it is a big
            chance—it leads to actions." Reactant boredom: Trapped in a boring
            lecture or never-ending meeting? You may be experiencing reactant
            boredom. When you can't change your circumstances—get up and leave
            the classroom or conference room—your boredom may be accompanied by
            restlessness and aggression, along with the desire to do something
            else. "You are bored, you can't leave the situations, and this goes
            in line with feelings of aggression," said Goetz. Apathetic boredom:
            This type of boredom was a surprise to the researchers. The other
            types were first identified in a 2006 study that Goetz participated
            in, but apathetic boredom—a very unpleasant form of boredom
            accompanied by a lack of motivation—emerged from this recent
            research. It seems to be similar to depression, and it may have more
            negative consequences than other types. "Apathetic boredom can be
            assumed to be detrimental for personal psychological health," Goetz
            said. Are there more ways to be bored out there? "I don't think that
            there are further types of boredom," said Goetz, "but let's see."
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipList;
