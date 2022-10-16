import React from "react";
import { SocialIcon } from "./styles";

export const Twitter = ({url}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
    <SocialIcon
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.4341 0.5C8.76971 0.5 0.934082 8.33563 0.934082 18C0.934082 27.6644 8.76971 35.5 18.4341 35.5C28.0985 35.5 35.9341 27.6644 35.9341 18C35.9341 8.33563 28.0985 0.5 18.4341 0.5ZM27.2803 14.5656C27.5472 20.4573 23.1532 27.0256 15.3745 27.0256C13.0091 27.0256 10.8085 26.3315 8.95492 25.1429C11.1774 25.4054 13.3955 24.7871 15.1557 23.409C13.3241 23.3754 11.7768 22.1635 11.2416 20.4996C11.8993 20.625 12.5468 20.5885 13.1345 20.4281C11.1205 20.0227 9.72929 18.2085 9.7745 16.2675C10.3403 16.581 10.9849 16.7692 11.6718 16.791C9.80658 15.5442 9.27867 13.081 10.3753 11.1983C12.4403 13.7329 15.5276 15.3998 19.0087 15.5748C18.3976 12.9556 20.3853 10.4313 23.0905 10.4313C24.2937 10.4313 25.383 10.9402 26.1472 11.754C27.101 11.5673 27.9993 11.2173 28.8072 10.7375C28.4937 11.716 27.8301 12.5356 26.9653 13.0548C27.8126 12.9527 28.6205 12.7281 29.3701 12.3942C28.8101 13.2371 28.1014 13.975 27.2803 14.5656Z"
        fill="#D9D9D9"
      />
    </SocialIcon>
    </a>
  );
};