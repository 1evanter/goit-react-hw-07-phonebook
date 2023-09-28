import styled from "styled-components";
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
max-width: 300px;
display: flex;
flex-wrap: wrap;
margin-top: 15px;
margin-bottom: 15px;
padding: 15px;
gap: 15px;
align-items: center;
border: 3px dashed #526D82;
`
export const StyledField = styled(Field)`
display: flex;
flex-direction: column;
margin-top: 3px;
border: 1px solid #526D82;
border-radius: 3px;
outline: none;
padding: 4px;
`

export const Button = styled.button`
color: 27374D;
background-color: #DDE6ED;
border: 1px solid #526D82;
border-radius: 3px;
padding: 3px;
min-width: 80px;
`

export const Label = styled.label`
font-weight: 500;
`