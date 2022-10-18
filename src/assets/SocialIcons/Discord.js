import React from "react";
import { SocialIcon } from "./styles";

export const Discord = ({ url, color }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <SocialIcon
        target="_blank"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.4341 0.5C8.77117 0.5 0.934082 8.33417 0.934082 18C0.934082 27.6644 8.77117 35.5 18.4341 35.5C28.0985 35.5 35.9341 27.6644 35.9341 18C35.9341 8.33417 28.0985 0.5 18.4341 0.5ZM23.1707 27.2575L22.6297 25.369L23.9364 26.5837L25.1716 27.7271L27.3664 29.6667V11.3529C27.3664 10.1892 26.4272 9.25 25.2737 9.25H11.5945C10.441 9.25 9.50179 10.1892 9.50179 11.3529V25.1546C9.50179 26.3183 10.441 27.2575 11.5945 27.2575H23.1707ZM21.3333 22.5821L20.6595 21.7552C21.9968 21.3775 22.5072 20.5404 22.5072 20.5404C22.0887 20.816 21.6905 21.01 21.3333 21.1427C20.8228 21.3571 20.3328 21.5 19.853 21.5817C18.873 21.7654 17.9747 21.7144 17.2091 21.5715C16.6272 21.4592 16.127 21.2958 15.7085 21.1325C15.4737 21.0406 15.2185 20.9283 14.9632 20.7854L14.9224 20.7621L14.9122 20.7577L14.8714 20.7344L14.8305 20.7038L14.5447 20.5302C14.5447 20.5302 15.0347 21.3469 16.3312 21.7348L15.6472 22.5821C13.3912 22.5106 12.5337 21.0304 12.5337 21.0304C12.5337 17.7433 14.0037 15.079 14.0037 15.079C15.4737 13.9765 16.8722 14.0071 16.8722 14.0071L16.9743 14.1296C15.1368 14.6604 14.2895 15.4669 14.2895 15.4669L14.8918 15.1708C15.9841 14.691 16.8518 14.5583 17.2091 14.5277L17.3826 14.5073C18.0053 14.4256 18.7097 14.4052 19.4447 14.4869C20.4145 14.5992 21.4557 14.885 22.5174 15.4669C22.5174 15.4669 21.711 14.7013 19.9755 14.1704L20.1185 14.0071C20.1185 14.0071 21.517 13.9765 22.987 15.079C22.987 15.079 24.457 17.7433 24.457 21.0304C24.457 21.0304 23.6214 22.4552 21.3333 22.5821ZM20.3124 17.8148C19.7305 17.8148 19.2712 18.3252 19.2712 18.9479C19.2712 19.5706 19.7407 20.081 20.3124 20.081C20.8943 20.081 21.3537 19.5706 21.3537 18.9479C21.3537 18.3252 20.8943 17.8148 20.3124 17.8148ZM16.5864 17.8148C16.0045 17.8148 15.5451 18.3252 15.5451 18.9479C15.5451 19.5706 16.0147 20.081 16.5864 20.081C17.1682 20.081 17.6276 19.5706 17.6276 18.9479C17.6378 18.3252 17.1682 17.8148 16.5864 17.8148Z"
          fill={color}
        />
      </SocialIcon>
    </a>
  );
};

Discord.defaultProps = {
  color: "#D9D9D9",
};
