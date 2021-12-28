import {css} from 'styled-components'

export const mobile = (props) => {
    return css `
    @media only screen and (max-width:1024px){
        ${props}
    `
}

export const table = (props) => {
    return css`
    @media only screen and (min-width:481px){
        ${props}
    `
}
export const medio = (props) => {
    return css`
    @media only screen and (min-width:1025px){
        ${props}
    `
}



