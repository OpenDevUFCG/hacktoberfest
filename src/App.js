import { AboutSection } from "./components/AboutSection";
import { Header } from "./components/Header";
import { PhotoShoot } from "./components/PhotoShoot";
import { SponsorsSection } from "./components/SponsorsSection";
import { Wrapper } from "./util/generalStyles";

function App() {
  return (
    <Wrapper>
      <Header />
      <AboutSection />
      <SponsorsSection />
      <PhotoShoot />
    </Wrapper>
  );
}

export default App;
