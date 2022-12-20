/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-img": "url('./images/bg.svg')",
        "trailer-border": "url('./images/trailer_video_border.webp')",
        "nft-category-header": "url('./images/NFTCategoryNavbarHeader.webp')",
      },
    },
    clipPath: {
      mypolygon: "polygon(50% 0px, 100% 50%, 50% 100%, 0% 50%)",
    },
  },
  plugins: [require("tailwind-clip-path")],
};
