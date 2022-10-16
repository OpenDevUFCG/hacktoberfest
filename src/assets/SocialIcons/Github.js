import React from "react";
import { SocialIcon } from "./styles";

export const Github = ({url}) => {
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
        d="M17.5 0.5C7.83563 0.5 0 8.33563 0 18C0 27.6644 7.83563 35.5 17.5 35.5C27.1644 35.5 35 27.6644 35 18C35 8.33563 27.1644 0.5 17.5 0.5ZM20.7346 27.6483C20.2183 27.749 20.0521 27.431 20.0521 27.1583V24.3569C20.0521 23.4046 19.7181 22.7833 19.3506 22.4669C21.6256 22.2146 24.0144 21.3513 24.0144 17.4298C24.0144 16.3142 23.6163 15.4042 22.9629 14.6896C23.0679 14.4315 23.4179 13.3931 22.8623 11.9873C22.8623 11.9873 22.0063 11.7131 20.0579 13.0329C19.2398 12.8083 18.3677 12.696 17.5 12.6917C16.6323 12.696 15.7602 12.8083 14.9435 13.0344C12.9937 11.7146 12.1362 11.9888 12.1362 11.9888C11.5835 13.3946 11.9321 14.4329 12.0385 14.6896C11.3852 15.4042 10.9856 16.3142 10.9856 17.4298C10.9856 21.341 13.3685 22.216 15.6363 22.4742C15.3446 22.7294 15.0806 23.1785 14.9888 23.8392C14.4054 24.1002 12.9281 24.5508 12.0181 22.9904C12.0181 22.9904 11.4785 22.0104 10.4533 21.9375C10.4533 21.9375 9.45729 21.9244 10.3833 22.5588C10.3833 22.5588 11.0542 22.8723 11.5165 24.0521C11.5165 24.0521 12.1071 25.875 14.9479 25.2567V27.1569C14.9479 27.4267 14.7831 27.7431 14.2742 27.6483C10.2171 26.2994 7.29167 22.4727 7.29167 17.9635C7.29167 12.3242 11.8635 7.75521 17.5 7.75521C23.1365 7.75521 27.7083 12.3242 27.7083 17.9635C27.7083 22.4713 24.7873 26.2979 20.7346 27.6483Z"
        fill="#D9D9D9"
      />
    </SocialIcon>
    </a>
  );
};