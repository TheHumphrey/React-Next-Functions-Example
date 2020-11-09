import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: {
        table: {
          title: string;
          tdOdd: string;
          tdEven: string;
        };
      };
      text: {
        table: {
          title: string;
        };
      };
    };
  }
}
