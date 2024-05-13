import styled from "styled-components";

const Cores = {
    DarkCyan: "hsl(158,36%,37%)",
    Verydarkblue: "hsl(212,21%,14%)",
    DarkGrayishblue: "hsl(228,12%,48%)"
}

export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 50%;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    padding: 30px;
    gap: 15px;
`

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    width: 700px;
    height: 500px;
`
export const MiniPhrase = styled.p`
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 5px;
`
export const MainPhrase = styled.p`
    font-size: 18px;
    margin-bottom: 12px;
    font-weight: 500;
`

export const Title = styled.h1`
    font-family: Fraunces;
    font-weight: 1000;
    font-size: 38px;
    color: ${Cores.Verydarkblue};
`

export const Price = styled.h1`
    font-family: Fraunces;
    font-size: 38px;
    color: ${Cores.DarkCyan};
`

export const Prices = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px
`

export const OldPrice = styled.p`
    font-size: 16px;
    font-weight: 600;
    text-decoration-line: line-through;
    color: ${Cores.DarkGrayishblue};
`

export const ButtonBuy = styled.button`
    background-color: ${Cores.DarkCyan};
    color: white;
    border: none;
    height: 55px;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-radius: 12px
`