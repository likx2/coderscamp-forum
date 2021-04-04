import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    background-color: ${(props) =>
      props.theme.colors.lightTheme ? '#F4F4F4' : '#3D4443'};
  }
`;

export default GlobalStyle;
