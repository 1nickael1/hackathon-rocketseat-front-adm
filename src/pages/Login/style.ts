import styled from "styled-components";
import { pxToRem } from "helper";
import {Base} from "assets/images";


export const Container = styled.div`
    background: transparent linear-gradient(180deg, #360033 0%, #0B8793 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginContent = styled.div`
    display: flex;
    flex-direction: column;
    
    /* width:100%;
    height: 100%; */
    justify-content: center;
    align-items: center;
    z-index:1;
`;

export const Form = styled.input`
background: transparent;
border:none;
border-bottom:${pxToRem(1)} solid #FFF;
margin-bottom: 50px;
color: #FFF;
`;

export const Titulo = styled.text`
font: Light 29px/17px Acumin Pro;
font-size: 40px;
letter-spacing: 5.8px;
color: #9D9BA4;
margin-bottom: 50px;
`;

export const TituloForm = styled.text`
    text-align: left;
    width: 100%;
    color: #FFF;
`;

export const Botao = styled.button`
    background: #43425D 0% 0% no-repeat padding-box;
    border: 1px solid #43425D;
    width: 100%;
    height: 42px;
    border-radius: 4px;
    color: #FFF;
`;

export const Fundo = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 0;
`;
