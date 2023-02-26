import { SvgIcon } from "@mui/material";
import React from "react";

function AppLogo(props) {
  return (
    <SvgIcon viewBox="0 0 56 56" {...props}>
      <g filter="url(#filter0_d_308_8402)">
        <rect
          x="4"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint0_linear_308_8402)"
        />
        <path
          d="M36 25.3333H35.0933L32.4267 28H34.9733L37.3333 30.6666H18.6667L21.04 28H23.7733L21.1067 25.3333H20L16 29.3333V34.6666C16 36.1333 17.1867 37.3333 18.6533 37.3333H37.3333C38.0406 37.3333 38.7189 37.0524 39.219 36.5523C39.719 36.0522 40 35.3739 40 34.6666V29.3333L36 25.3333ZM34.6667 18.6L28.0667 25.2L23.3467 20.48L29.9467 13.88L34.6667 18.6ZM29.0133 11.0533L20.52 19.5466C20.3964 19.67 20.2983 19.8165 20.2314 19.9778C20.1645 20.1391 20.1301 20.312 20.1301 20.4866C20.1301 20.6613 20.1645 20.8342 20.2314 20.9955C20.2983 21.1568 20.3964 21.3033 20.52 21.4266L27.12 28.0266C27.64 28.5466 28.48 28.5466 29 28.0266L37.48 19.5466C37.6036 19.4233 37.7017 19.2768 37.7686 19.1155C37.8355 18.9542 37.8699 18.7813 37.8699 18.6066C37.8699 18.432 37.8355 18.2591 37.7686 18.0978C37.7017 17.9365 37.6036 17.79 37.48 17.6666L30.88 11.0666C30.7597 10.9408 30.6154 10.8404 30.4555 10.7713C30.2957 10.7023 30.1236 10.6661 29.9495 10.6649C29.7754 10.6636 29.6028 10.6974 29.442 10.7641C29.2812 10.8308 29.1354 10.9292 29.0133 11.0533V11.0533Z"
          fill="url(#paint1_linear_308_8402)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_308_8402"
          x="0"
          y="0"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_308_8402"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_308_8402"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_308_8402"
          x1="28"
          y1="0"
          x2="28"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#272646" />
          <stop offset="1" stopColor="#4f4c96" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_308_8402"
          x1="16.9176"
          y1="10.6649"
          x2="41.6717"
          y2="12.8637"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#d6d6d6" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}

export default AppLogo;
