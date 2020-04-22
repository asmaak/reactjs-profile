import styled from 'styled-components';

export const Contac =styled.div` 
    padding: 50px 0;
    text-align: center
`

export const Title=styled.h2` 
    font-size: 60px;
    margin-bottom: 30px
`

export const Span =styled.span`
    font-weight: normal
`

export const Form =styled.form`
    width: 70%;
    margin: auto;
`

export const Input=styled.input `
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    width: 49%;
    
`
export const InputSub=styled(Input)`
  width:100%;
  `
export const FormInput=styled.div` 
    overflow: hidden
`

// .drop form .form-input input {
//     width: 49%;
// }
export const InputText=styled(Input)`

    float: left
`

export const InputEmail=styled(Input) `
    float: right
`

// .drop form input.sub {
//     width: 100%;
// }
export const TextArea=styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
`

export const InputSubmit=styled(Input) `
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
`
