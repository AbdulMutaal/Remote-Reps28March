import Input from "./components/input/Input";
import ButtonSection from "./components/buttons/ButtonSection";
import Hero from "./components/hero/Hero";
import Tasks from "./components/tasks/tasks";

import "./global.css";

function App() {
  return (
    <>
      <Hero />

      <Tasks />

      <ButtonSection />
      <Input />
    </>
  );
}

export default App;
