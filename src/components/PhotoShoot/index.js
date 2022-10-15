import { useState } from "react";
import { useInterval } from "../../util/hooks";
import {
  BiggerImage,
  SmallerImage,
  Wrapper,
  SmallerContainer,
  Cat,
  TitleSection,
  Title,
} from "./styles";
import cat from "../../assets/cat.png";

export const PhotoShoot = ({ photosIds }) => {
  const [photos, setPhotos] = useState(photosIds);

  const changePhotos = () => {
    const [firstElement, ...rest] = photos;
    setPhotos([...rest, firstElement]);
  };
  useInterval(changePhotos, 10000);

  return (
    <>
      <TitleSection>
        <Title>Outras edições</Title>
        <Cat src={cat} />
      </TitleSection>
      <Wrapper>
        <BiggerImage
          src={`https://drive.google.com/uc?export=view&id=${photos[0].id}`}
          alt={photos[0].alt}
        />
        <SmallerContainer>
          <SmallerImage
            src={`https://drive.google.com/uc?export=view&id=${photos[1].id}`}
            alt={photos[1].alt}
          />
          <SmallerImage
            src={`https://drive.google.com/uc?export=view&id=${photos[2].id}`}
            alt={photos[2].alt}
          />
        </SmallerContainer>
      </Wrapper>
    </>
  );
};

PhotoShoot.defaultProps = {
  photosIds: [
    {
      id: "1TVtOEGrDH_Jnj0j9VOSv43dDJu3roJrC",
      alt: "Grupo de 11 pessoas, e um balão branco com um rosto feliz, participantes do core team da opendev. Todos estão vestidos com a camisa do evento.",
    },
    {
      id: "1Q-oZgMUagvvTnLMQrna00m_NqsP1zKCQ",
      alt: "Grupo de muitas pessoas posando para a foto do evento, com todos os organizadores e participantes do evento amontoados.",
    },
    {
      id: "1yjYUSGM1WKEIdeQ_PNyhBQPmKOreeJAh",
      alt: "Mulher de costas com camisa com a logo da VTEX olhando para um grupo de pessoas sentadas em frente a computadores",
    },
  ],
};
