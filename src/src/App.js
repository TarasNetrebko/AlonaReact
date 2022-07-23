import "./App.css";
import Section from "./components/Section/Section";
import FeaturesList from "./components/FeaturesList/FeaturesList";
import features from "./data/features.json";

import TeamMembers from "./components/TeamMembers/TeamMembers";
import teamMembers from "./data/teamMembers.json"

function App() {
  return (
    <div>
      <Section title="Особенности">
        <FeaturesList features={features} />
        <TeamMembers teamMembers={teamMembers} />
      </Section>
    </div>
  );
}

export default App;
