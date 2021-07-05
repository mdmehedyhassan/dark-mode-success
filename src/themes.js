import { createGlobalStyle } from "styled-components";

export const lightTheme ={
    body: 'white',
    fontColor: "black",
    border: "red"
}

export const darkTheme ={
    body: "black",
    fontColor: "white",
    border: 'yellow',

}

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.fontColor}
    }
    p{
        border: 10px solid ${props => props.theme.border};
    }
    
`