import styled  from 'styled-components'


const Flex = styled.div<{vertical?: boolean}>`
    display: flex;
    flex-direction: ${props=> props.vertical?'column':'row'};
`;


export default Flex;