import styled from 'styled-components'

import UserPanel from './UserPanel';
import SystemPanel from './SystemPanel';
import Flex from '../../../app/styles/Flex';
import Splitter from '../../../app/styles/Splitter';

interface Props {}

const Container = styled(Flex)`
    padding: 20px;
    width: 95%;
    margin: auto;
`;


const DashboardHolder = (props: Props) => {
    return (
        <Container>
            <Splitter width='60%'>
                <SystemPanel />
            </Splitter>
            <Splitter width='40%'>
                <UserPanel />
            </Splitter>
        </Container>
    )
}

export default DashboardHolder
