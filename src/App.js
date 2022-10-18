import { AboutSection } from "./components/AboutSection";
import { Header } from "./components/Header";
import { PhotoShoot } from "./components/PhotoShoot";
import { Schedule } from "./components/Schedule";
import { SponsorsSection } from "./components/SponsorsSection";
import { Wrapper } from "./util/generalStyles";

function App() {
  return (
    <Wrapper>
      <Header />
      <AboutSection />
      <Schedule />
      <SponsorsSection />
      <PhotoShoot />
    </Wrapper>
  );
}

export default App;
