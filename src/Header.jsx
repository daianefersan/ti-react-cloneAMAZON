import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const Container = styled.div`
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    color: white;
`
const HeaderLogo = styled.div`
    img{
        width: 100px;
        margin-left: 11px;
        height: 30px;
        margin-right: 20px;
    }
`
const HeaderOptionAddress = styled.div`

`
const OptionLineOne = styled.div`
    
`
const OptionLineTwo = styled.div`
    font-weight: 700;
`
const HeaderSearch = styled.div`
    display: flex;
`
const HeaderSearchInput = styled.input`
    
`
const HeaderSearchIconContainer = styled.div`

`
const HeaderOption = styled.div`
    
`
const HeaderOptionCart = styled.div`

`
const HeaderNavItems = styled.div`
    display: flex;
`
const CartCount = styled.div`
    
`


function Header() {
  return (
    <Container>
        
        <HeaderLogo>
            <img src={"https://i.imgur.com/tV2N1Nw.png"}/>
        </HeaderLogo>

        <headerOptionAddress>
            <optionalLineOne>A entrega será feita em São João ... 36680000</optionalLineOne>
            <optionLineTwo>Atualizar CEP</optionLineTwo>
        </headerOptionAddress>

        <HeaderSearch>
            <HeaderSearchInput type='text'/>
            <HeaderSearchIconContainer>

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
                <AddShoppingCartIcon />            </HeaderOptionCart>
                <CartCount>4</CartCount>
        </HeaderNavItems>

    </Container>
  )
}

export default Header
