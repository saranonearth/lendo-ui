import React from 'react'
import styled from 'styled-components'
import Flex from './../styles/Flex';
import SETTINGS from '../config/SETTINGS.json'
interface Props {
    
}

const NavHolder = styled.div`
    background-color: #fff;
    height: 50px;
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 3px 8px rgba(0,0,0,.08),0 12px 16px rgba(0,0,0,.04);
`;

const Brand = styled.h1`
    color: #363434;
    font-size: 1.5em;
`;

const Logo = styled.div`
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 100%;
    border: 7px solid #8247E5;
    margin-top: 17px !important;

`;

const AccountHolder = styled.div`
    background-color: #F3F4F7;
    border-radius: 30px;
    padding: 10px 20px;
    :hover {
        cursor: pointer;
    }
`;

const Navbar = (props: Props) => {
    return (
        <NavHolder>
            <Flex>
            <Logo></Logo> &nbsp;
            <Brand>
                Lendo.
            </Brand>
            </Flex>
            <AccountHolder>
            <i style={{color: SETTINGS.appPrimaryColor}} className="fas fa-wallet"></i>
           &nbsp; 0x8E4..03F
            </AccountHolder>
        </NavHolder>
    )
}

export default Navbar
