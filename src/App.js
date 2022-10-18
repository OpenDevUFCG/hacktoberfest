import { AboutSection } from "./components/AboutSection";
import { Header } from "./components/Header";
import { HomeItems } from "./components/HomeItems";
import { PhotoShoot } from "./components/PhotoShoot";
import { SponsorsSection } from "./components/SponsorsSection";
import { Wrapper } from "./util/generalStyles";

function App() {
  return (
    <Wrapper>
      <Header />
      <HomeItems />
      <AboutSection />
      <SponsorsSection />
      <PhotoShoot />
    </Wrapper>
  );
}

export default App;
