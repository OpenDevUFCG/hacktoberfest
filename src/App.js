import { AboutSection } from "./components/AboutSection";
import { Header } from "./components/Header";
import { Wrapper } from "./util/generalStyles";

function App() {
  return (
    <Wrapper>
      <Header />
      <AboutSection />
    </Wrapper>
  );
}

export default App;
