import { AboutSection } from "./components/AboutSection";
import { Header } from "./components/Header";
import { HomeItems } from "./components/HomeItems";
import { PhotoShoot } from "./components/PhotoShoot";
import { Schedule } from "./components/Schedule";
import { SponsorsSection } from "./components/SponsorsSection";
import { ContainerHome, Wrapper } from "./util/generalStyles";

function App() {
  return (
    <Wrapper>
      <ContainerHome>
        <Header />
        <HomeItems />
      </ContainerHome>
      <AboutSection />
      <Schedule />
      <SponsorsSection />
      <PhotoShoot />
    </Wrapper>
  );
}

export default App;
