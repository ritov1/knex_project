/** @type {import('tailwind.css').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "variable-collection-background":
          "var(--variable-collection-background)",
        "variable-collection-black-knex":
          "var(--variable-collection-black-knex)",
        "variable-collection-blue-knex": "var(--variable-collection-blue-knex)",
        "variable-collection-color": "var(--variable-collection-color)",
        "variable-collection-dark-green-knex":
          "var(--variable-collection-dark-green-knex)",
        "variable-collection-gray-dark-knex":
          "var(--variable-collection-gray-dark-knex)",
        "variable-collection-gray-knex": "var(--variable-collection-gray-knex)",
        "variable-collection-gray-light-knex":
          "var(--variable-collection-gray-light-knex)",
        "variable-collection-light-green-knex":
          "var(--variable-collection-light-green-knex)",
        "variable-collection-orange-knex":
          "var(--variable-collection-orange-knex)",
        "variable-collection-pink-knex": "var(--variable-collection-pink-knex)",
        "variable-collection-purple-dark-knex":
          "var(--variable-collection-purple-dark-knex)",
        "variable-collection-yellow-knex":
          "var(--variable-collection-yellow-knex)",
      },
      fontFamily: {
        h1: "var(--h1-font-family)",
        h2: "var(--h2-font-family)",
        h3: "var(--h3-font-family)",
        paragraph: "var(--paragraph-font-family)",
      },
    },
  },
  plugins: [],
};
