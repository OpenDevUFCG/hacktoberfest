import React from "react";
import { SocialIcon } from "./styles";

export const Opencollective = ({ url, color }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <SocialIcon
        width="35"
        height="36"
        viewBox="0 0 35 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.6226 17.954C28.6226 20.1579 27.9828 22.2716 26.8846 24.0172L31.3668 28.518C33.562 25.5785 34.9341 21.9041 34.9341 17.9535C34.9341 14.0028 33.5614 10.3289 31.3668 7.38892L26.8846 11.8897C27.9822 13.6353 28.6226 15.656 28.6226 17.9529V17.954Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.471 29.1617C11.3422 29.1617 6.31148 24.1086 6.31148 17.9546C6.31148 11.8006 11.3427 6.7475 17.471 6.7475C19.758 6.7475 21.7694 7.39062 23.5085 8.585L27.9907 4.08422C25.0633 1.87812 21.4047 0.5 17.471 0.5C7.8657 0.5 0 8.30828 0 18.0459C0 27.7836 7.8657 35.5 17.471 35.5C21.496 35.5 25.1546 34.1219 28.082 31.918L23.5998 27.4172C21.8619 28.5197 19.758 29.1628 17.471 29.1628V29.1617Z"
          fill={color}
        />
      </SocialIcon>
    </a>
  );
};

Opencollective.defaultProps = {
  color: "#D9D9D9",
};
