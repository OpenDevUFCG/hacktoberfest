import { AboutSection } from "./components/AboutSection";
import { Header } from "./components/Header";
import { HomeItems } from "./components/HomeItems";
import { PhotoShoot } from "./components/PhotoShoot";
import { Wrapper } from "./util/generalStyles";

function App() {
  return (
    <Wrapper>
      <Header />
      <HomeItems />
      <AboutSection />
      <PhotoShoot />
    </Wrapper>
  );
}

export default App;
