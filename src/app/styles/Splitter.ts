import styled  from 'styled-components'


const Splitter = styled.div<{width: string}>`
    width: ${props=> props.width};
`;

export default Splitter;