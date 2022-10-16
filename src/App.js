import { AboutSection } from "./components/AboutSection";
import { Header } from "./components/Header";
import { PhotoShoot } from "./components/PhotoShoot";
import { Wrapper } from "./util/generalStyles";

function App() {
  return (
    <Wrapper>
      <Header />
      <AboutSection />
      <PhotoShoot />
    </Wrapper>
  );
}

export default App;
