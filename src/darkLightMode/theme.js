import { createGlobalStyle } from "styled-components"



export const lightTheme = {
    body: '#fff',
    fontColor: '#000'
}

export const darkTheme = {
    body: '#000',
    fontColor: '#f5f5f5f3'
}

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${props => props.theme.body};
    color:${props => props.theme.fontColor};
}

`