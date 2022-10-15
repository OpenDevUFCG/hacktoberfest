import { AboutSection } from "./components/AboutSection";
import { PhotoShoot } from "./components/PhotoShoot";
import { Wrapper } from "./util/generalStyles";

function App() {
  return (
    <Wrapper>
      <AboutSection />
      <PhotoShoot />
    </Wrapper>
  );
}

export default App;
