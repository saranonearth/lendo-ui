import React from 'react'
import styled from 'styled-components';

import Flex from './../styles/Flex';
import { AssetDataType } from '../../views/dashboard/types'
import {USDC, USDT, DAI, wBTC, MATIC} from '../../assets'

interface Props {
    headings: string[],
    data: AssetDataType[]
}

const Container = styled.div`
    margin-left: 60px;
    margin-top: 20px;
`;
const Headings = styled(Flex)`
    justify-content: space-between;
    margin-bottom: 20px;
    > div {
        width: 25%;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    :hover {
        cursor: pointer;
    }
`;

const Value = styled.div`
    width: 25%;
`;

const Text = styled.p`
    margin-top: 15px;
    color: #747474;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    transition: 0.2s;
    border-radius: 100%;
`;

const Logo = styled.div`
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 100%;
    border: 7px solid #949494;
    margin-top: 17px !important;
    margin-left:30px;
    transition: 0.5s;
    :hover {
        cursor: pointer;
        border: 7px solid #8247E5;
    }
`;

function getImage(val: string) {
    switch(val){
        case 'USDC':
            return USDC;
        case 'USDT':
            return USDT;
        case 'DAI':
            return DAI;
        case 'wBTC':
            return wBTC;
        case 'MATIC':
            return MATIC;
    }
}

const Table = ({data, headings}: Props) => {
    return (
        <Container>
            <Headings>
                {
                    headings.map(item=> <div>{item}</div>)
                }
            </Headings>
            
            {
                data.map(item=>{
                   return <Row>
                       <Value>
                           <Image src={getImage(item.icon)} />
                       </Value>
                       <Value>
                           <Text>{item.APY}%</Text>
                       </Value>
                       <Value>
                           <Text>{item.wallet} {item.name}</Text>
                       </Value>
                       <Value>
                           <Logo></Logo>
                       </Value>
                   </Row>
                })
            }
        </Container>
    )
}

export default Table
