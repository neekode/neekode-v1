import * as React from 'react';

/**
 *  PTG Icon
 *  Because i am in no way commercializing the Princess brand or utilizing it to make money,
 *  i've opted to include it in my public portfolio.
 *  I was able to copy this SVG code from their main website,
 *  which i then altered to fit inside my use case.
 */
function PTGIcon({
  colorHexes
}) {
  return (
    <a
      aria-label="Go to ptg website"
      className="m-2 icon-path-hover-effect"
      href="https://peopletech.com/home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={ colorHexes.iconHex }
        width="70" // Match the width to the other icons
        height="70" // Match the height to the other icons
        viewBox="200 450 1240 1240" // Adjusted viewBox to better fit the content
      >
        <g
          fill={ colorHexes.iconHex }
          stroke="none"
        >
          <path
            d="M1075 2018 c-33 -19 -44 -41 -45 -84 0 -89 101 -131 164 -67 77 76 -25 205 -119 151z"
            transform="scale(0.7)" // Adjust the scale if needed
          />
          <path
            d="M1291 1855 c-96 -96 -176 -175 -180 -175 -3 0 -56 51 -118 112 l-113 113 -37 -37 -36 -37 154 -150 154 -151 207 207 c115 114 208 213 208 218 0 6 -15 25 -33 43 l-33 32 -173 -175z"
            transform="scale(0.7)" // Adjust the scale if needed
          />
          <path
            d="M567 1838 l-28 -32 170 -170 c94 -94 171 -177 171 -184 0 -6 -49 -62 -109 -123 l-109 -111 33 -29 c18 -16 35 -29 38 -29 4 0 72 66 153 146 l146 147 -209 208 c-114 115 -213 209 -218 209 -6 0 -23 -14 -38 -32z"
            transform="scale(0.7)" // Adjust the scale if needed
          />
          <path
            d="M1432 1687 c-34 -35 -61 -65 -60 -68 2 -2 1 -3 -1 -1 -10 5 -80 -72 -74 -81 3 -6 2 -7 -4 -4 -5 3 -29 -14 -53 -38 -38 -39 -42 -46 -30 -61 11 -12 382 -382 405 -403 7 -6 65 51 65 63 0 6 -77 87 -170 180 -94 93 -170 172 -170 175 0 3 50 56 112 118 l111 112 -34 35 -35 36 -62 -63z"
            transform="scale(0.7)" // Adjust the scale if needed
          />
          <path
            d="M577 1544 c-52 -28 -62 -95 -21 -143 21 -26 33 -31 69 -31 89 0 129 97 66 161 -33 33 -70 37 -114 13z"
            transform="scale(0.7)" // Adjust the scale if needed
          />
          <path
            d="M1529 1501 c-48 -48 -37 -116 23 -147 94 -49 181 63 112 145 -36 43 -93 44 -135 2z"
            transform="scale(0.7)" // Adjust the scale if needed
          />
          <path
            d="M919 1178 c-263 -263 -239 -231 -199 -273 l34 -35 178 177 178 178 115 -115 115 -115 37 38 38 37 -151 151 -151 151 -194 -194z"
            transform="scale(0.7)" // Adjust the scale if needed
          />
          <path
            d="M1029 1031 c-21 -22 -29 -39 -29 -66 0 -52 44 -95 97 -95 46 0 76 19 93 59 40 98 -85 177 -161 102z"
            transform="scale(0.7)" // Adjust the scale if needed
          />
        </g>
      </svg>
    </a>
  );
}

export default PTGIcon;
