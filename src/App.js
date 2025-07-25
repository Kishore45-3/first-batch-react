import Member from "./components/Member.js";
import AboutUs from "./components/About.js";
import "./App.css";
import Header from "./components/header.js";
import MembersList from "./components/memberslist/memberslist.js";
import Section from "./components/section/section.js";
function App() {
  return (
    <div>
      <Header />
      <div className="center-screen">
        <Section title="About Us">
          <AboutUs />
        </Section>
        <Section title="Member">
          <MembersList />
        </Section>
      </div>
    </div>
  );
}

export default App;
