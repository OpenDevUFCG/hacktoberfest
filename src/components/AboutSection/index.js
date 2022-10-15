import { SectionTitle } from "../../util/generalStyles";
import { AboutSectionContent, Alien, Text, Wrapper } from "./styles";
import alien from "../../assets/alien.png";

export const AboutSection = () => {
  return (
    <Wrapper>
      <SectionTitle>Sobre o nosso evento</SectionTitle>
      <AboutSectionContent>
        <Alien
          src={alien}
          alt="Alienígena verde com chapeu de bruxa, uma varinha mágica e uma capa, todos laranja"
        />
        <article>
          <Text>
            Durante o mês de outubro, a comunidade de tecnologia celebra o
            código aberto com PRs, contribuições, palestras e muita mão na
            massa!
          </Text>
          <Text>
            A ideia foi difundida pela Digital Ocean que possui o seu evento
            mundialmente famoso, por isso, várias empresas e organizações ao
            redor do mundo tentam fazer as suas versões e participar com o seu
            DNA no evento.
          </Text>
          <Text>
            Dessa forma, não tinha como a OpenDevUFCG ficar de fora, né? Todo
            mês de outubro fazemos nossa versão com a comunidade da UFCG
            buscando disseminar como o open-source funciona e promovendo
            palestras e conteúdos entre a própria comunidade. Os estudantes,
            professores e ex-alunos sempre participam da ideia de braços
            abertos, adicionando conteúdos, projetos e energia!
          </Text>
        </article>
      </AboutSectionContent>
    </Wrapper>
  );
};
