/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-img": "url('./images/Background/bg.svg')",
        "trailer-border": "url('./images/Background/trailer_video_border.webp')",
        "nft-category-header": "url('./images/NFT/NFTCategoryNavbarHeader.webp')",
        "category-selected": "url('./images/NFT/highlighted_category.png')",
      },
      fontFamily: {
        heebo: "'Heebo', sans-serif",
      }
    },
    clipPath: {
      mypolygon: "polygon(50% 0px, 100% 50%, 50% 100%, 0% 50%)",
    },
  },
  plugins: [require("tailwind-clip-path")],
};
