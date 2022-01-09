import React from 'react'
import styled from 'styled-components';
import { Options } from '../../views/dasahboard/constants';
import Flex from '../styles/Flex';

interface Props {
    data: Record<string, {name: string}>;
    selected: Options;
    onChange: (value: Options) => void;
}

const Holder = styled(Flex)`
    border: #d7c0ff 1px solid;
    width: fit-content;
    border-radius: 10px;
    :hover {
        cursor: pointer;
    }
`;

const Item = styled.div<{selected: boolean}>`
    background-image: ${props=> props.selected? 'linear-gradient(to bottom right, #b08dec, #805dff)' : '#F3F4F7'};
    color: ${props=> props.selected? 'white': '#333'};
    border-radius: 10px;
    padding: 10px;
`;

const Toggle = ({data,onChange, selected}: Props) => {
    console.log(data, selected)
    return (
        <Holder>
            {
                Object.values(data).map(item =>{
                    return <Item 
                        key={item.name} 
                        selected={selected === item.name}
                        onClick={()=>onChange(item.name as Options)}
                        >
                       {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </Item>
                })
            }
        </Holder>
    )
}

export default Toggle
