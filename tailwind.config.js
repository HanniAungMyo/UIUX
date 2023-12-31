/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'color-primary':"#01051e",
        'color-primary-light':"#020726",
        'color-primary-dark':"#010417",
        'color-primary-secondary':"#ff7d3b",
        'color-primary-gray':"#333",
        'color-primary-white':"#fff",
        'color-primary-bold':"#A427DF",

      }
    },
    container:{
      center:true,
      padding:{
      DEFAULT:"20px",
      md:"50px"
      }
    }
  },
  plugins: [],
}

