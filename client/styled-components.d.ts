import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      body: string;
      text: string;
      primaryBtn: string;
      primaryColor: string;
      secondaryColor: string;
      thirdColor: string;
      fourthColor: string;
      fifthColor: string;
    };
  }
}
