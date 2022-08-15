import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 .layout {
    ${tw`max-w-layout w-full`};
    &--center {
        ${tw`mx-auto`};
    }
   }
  
   @font-face {
    font-family: Consolas;
    src: url("../public/fonts/consolas.ttf"),format("truetype");;
   }

   body{
       ${tw`uppercase`}
       font-family:Consolas;
    }
    
`;

export default GlobalStyle;
