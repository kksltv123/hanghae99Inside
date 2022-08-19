const colors = {
    mainColor: "#3b4890"
}

//반응형을 위해 픽셀을 rem으로 컨버팅해주는 함수
const pixelToRem = (size) => `${size / 16}rem`; 

const fontsizes = {
    title :pixelToRem(60),
    subtitle: pixelToRem(35),
    subtitle2:  pixelToRem(24),
    contentstext: pixelToRem(18),
    alerttext: pixelToRem(16)
  }

const theme = {
    colors,
    fontsizes
  };

export default theme;