module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Quét các tệp trong thư mục pages
    "./components/**/*.{js,ts,jsx,tsx}", // Quét các tệp trong thư mục components
    "./app/**/*.{js,ts,jsx,tsx}", // Quét các tệp trong thư mục app nếu bạn sử dụng thư mục app
  ],
  theme: {
    extend: {
      FontFamily: {
        Roboto: ["Jersey M7", "sans-serif"],
      },
    },
  },
  plugins: [],
};

