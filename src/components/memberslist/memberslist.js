import { useState } from "react";
import Member from "../Member";
import StyleButton from "../styledbutton/styleButton";
import "./memberslist.css";
import Confetti from "react-confetti";

const people = [
  { name: "Naga Lakshmi", city: "Chennai" },
  { name: "kota srikanth reddy", city: "Chennai" },
  { name: "Manikanta Kolusu", city: "Texas" },
  { name: "Someswararao M", city: "Anakapalle" },
  {
    name: "Jaya Surya ",
    city: "Anantapur",
  },
  { name: "mallikarjun thagili", city: "Telangana" },
  { name: "Maruthi Rao", city: "hyderabad" },
  { name: "Siva Kumar", city: "Bengaluru" },
  { name: "Siva Kumar", city: "Bengaluru" },
  { name: "Satyasai Kandivalasa", city: "Kakinada" },
  { name: "RAMESHBABU K", city: "Palakollu" },
  { name: "Siva Kumar", city: "Bengaluru" },
  { name: "Sripathi Mamillapalli", city: "guntur" },
  { name: "gajula venkateswaramma", city: "Bengaluru" },
  { name: "Vamsi Kuncham", city: "Visakhapatnam" },
  { name: "praveen achari", city: "Kurnool" },
  { name: "mallikarjun thagili", city: "Telangana" },
  { name: "Maruthi Rao", city: "hyderabad" },
  { name: "Siva Kumar", city: "Bengaluru" },
  { name: "Satyasai Kandivalasa", city: "Kakinada" },
  { name: "RAMESHBABU K", city: "Palakollu" },
  { name: "Kothakandriga Surya", city: "tirupati" },
  { name: "Vamsi Kuncham", city: "Visakhapatnam" },
  { name: "praveen achari", city: "Kurnool" },
  { name: "Vamsi Kuncham", city: "Visakhapatnam" },
  { name: "mallikarjun thagili", city: "Telangana" },
  { name: "Maruthi Rao", city: "hyderabad" },
];

function MembersList() {
  const [LuckyPerson, setLuckyPerson] = useState("");
  const [Loading, setLoading] = useState(false);
  const [showCelebrations, setCelebrations] = useState(false);
  function pickPerson() {
    setLoading(true);
    const randomNumber = Math.floor(Math.random() * people.length);
    // console.log(people[randomNumber].name);
    const person = people[randomNumber];
    console.log(`${person.name} from ${person.city}`);
    const LuckyMessage = `${person.name} from ${person.city}`;
    setTimeout(() => {
      setLuckyPerson(LuckyMessage);
      setLoading(false);
      setCelebrations(true);
    }, 2000);
  }
  return (
    <>
      {showCelebrations && <Confetti numberOfPieces={1000} />}

      <div className="members-container">
        {people.map((member) => {
          return <Member name={member.name} city={member.city} />;
        })}
      </div>
      <div className="flex-container">
        {Loading && <h3>Loading....!</h3>}
        <h2>{LuckyPerson}</h2>
        <StyleButton text="Lucky Draw" onclick={pickPerson} />
      </div>
    </>
  );
}

export default MembersList;
