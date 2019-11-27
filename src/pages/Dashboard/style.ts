import styled from "styled-components";

export const Container = styled.div`
    background: transparent linear-gradient(180deg, #360033 0%, #0B8793 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 3px 3px 13px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 13px 0px rgba(0,0,0,0.75);
    box-shadow: 3px 3px 13px 0px rgba(0,0,0,0.75);
    margin: 5px;
    border-radius: 4px;
    padding: 5px;
    width: 300px;
    background-color: rgba(255,255,255, 1)
`;

export const CardName = styled.div`
    display: flex;
    flex-direction: row;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: row;
`;
