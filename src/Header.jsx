import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

const Container = styled.div`
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`
const HeaderLogo = styled.div`
    img{
        width: 100px;
        margin-left: 11px;
        height: 30px;
        margin-right: 20px;
        padding: 10px 9px 10px 9px;
    }
`
const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`
const OptionLineOne = styled.div`
    
`
const OptionLineTwo = styled.div`
    font-weight: 700; 
    font-weight: bolder  ;
`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    /* overflow: hidden; */
    margin-left: 4px;
    background-color: white;

    :focus-within {
        box-shadow: 0 0 0 3px #f90;
    }
`
const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus {
        outline: none;
    }
`
const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderOption = styled.div`
    //TRouBLe
    padding: 10px 9px 10px 9px;
    
`
const HeaderOptionCart = styled.div`
    padding: 10px 9px 10px 9px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderNavItems = styled.div`
    display: flex;
    padding: 10px 9px 10px 9px;
`
const CartCount = styled.div`
    padding-left: 4px;
    color: #febd69;
`


function Header() {
    return (
        <Container>

            <HeaderLogo>
                <img src={"https://i.imgur.com/tV2N1Nw.png"} />
            </HeaderLogo>


            <img src={"https://i.imgur.com/uh8UmMB.png"} />
            <headerOptionAddress>


                <HeaderOption>

                    <optionalLineOne>A entrega será feita em São João ... 36680000</optionalLineOne>
                    <optionLineTwo> Atualizar CEP</optionLineTwo>

                </HeaderOption>
            </headerOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>

                <HeaderOption>
                    <optionLineOne>Olá, faça seu login </optionLineOne>
                    <optionLineTwo>Contas e Listas</optionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <optionLineOne>Devoluções </optionLineOne>
                    <optionLineTwo>e Pedidos</optionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <img src={"https://i.imgur.com/dBIJhtA.png"} />
                    <CartCount>0</CartCount>
                </HeaderOptionCart>
            </HeaderNavItems>

        </Container>
    )
}

export default Header
