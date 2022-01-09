import styled from 'styled-components';

import Flex from './../../../app/styles/Flex';
import Splitter from './../../../app/styles/Splitter';

interface Props {}

const Container = styled.div`
    height: 85vh;
    border-radius: 25px;
    padding: 10px;
    color: white;
    position: sticky;
    display: flex;
    flex-direction: column;
`;

const APYHolder = styled(Flex)`
    background-image: linear-gradient(to bottom right, #b08dec, #805dff);
    border-radius: 25px;
    width: 100%;
    height: 180px;
    box-shadow: 0 10px 20px rgba(0,0,0,.08),0 12px 16px rgba(0,0,0,.04);
    padding: 10px;

    > div {
        height: 100%;
    }
`;

const LimitHolder = styled.div`
    margin-top: 10px;
    background-image: linear-gradient(to bottom right, #383838, #101011);
    border-radius: 25px;
    width: 100%;
    height: 180px;
    box-shadow: 0 10px 20px rgba(0,0,0,.08),0 12px 16px rgba(0,0,0,.04);
    padding: 10px;

    > div {
        height: 100%;
    }
    > p {
        margin-top: -30px;
    }
    > p:nth-child(1) {
        margin-top: 10px; 
    }
`;
const CardItem = styled.div`
    margin-top: 10px;
    background-color: white;
    border-radius: 25px;
    width: 33%;
    height: 157px;
    box-shadow: 0 10px 20px rgba(0,0,0,.08),0 12px 16px rgba(0,0,0,.04);
    margin-right: 10px;  
    color: #8247E5;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    i {
        font-size: 3.5em;
    }

    p {
        margin-top: 5px;
    }
    :hover {
        cursor: pointer;
    }
`;

const Big = styled.h1`
    font-size: 7em;
    margin: 0px;
    width: 100%;
    text-align: center;
    color: white;
`;

const Center = styled.div`
    width: 100%;
    text-align: center;
    color: white;
    margin-top: -30px;
`;

const Heading = styled.div`
    font-weight: 500;
    font-size: 1.5em;
`;

const Value = styled.div`
    font-size: 1.2em;
`;

const TotalHolder = styled.div`
    margin-left: 20px;
`;

const VerticalAlign = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const Spread = styled(Flex)`
    justify-content: space-between;
`;

const Bold = styled.p`
    font-size: 2em;
`;

const Bar = styled.div`
    width: 100%;
    background-color: #474747;
    height: 5px !important;
    border-radius: 2px;
    margin-top: -130px;
`;

const BarCompleted = styled.div`
    width: 32%;
    background-color: #303030;
    height: 5px !important;
    border-radius: 2px;
    margin-top: -130px;
`;
const UserPanel = (props: Props) => {
    return (
        <Container>
            <APYHolder>
                <Splitter width='40%'>
                    <Flex vertical>
                       <TotalHolder>
                       <div>
                            <Heading>
                                Supply Balance
                            </Heading>
                            <Value>
                                $12,325.32
                            </Value>
                        </div>
                        <div>
                            <Heading>
                                Borrow Balance
                            </Heading>
                            <Value>
                                $2,215.12
                            </Value>
                        </div>
                       </TotalHolder>
                    </Flex>
                </Splitter>
                <Splitter width='60%'>
                    <VerticalAlign>
                        <div>
                        <Big>
                            18.2%
                        </Big>
                        <Center>
                            APY
                        </Center>
                        </div>
                    </VerticalAlign>

                </Splitter>
            </APYHolder>
            <LimitHolder>
                <Bold>$6313.21</Bold>
                <p>Available Credit</p>
                <Spread>
                    <div>
                    <p>Borrow Limit</p>
                    </div>
                    <div>
                    <p>32%</p>
                    </div>
                </Spread>
                <Bar>
                    <BarCompleted></BarCompleted>
                </Bar>
            </LimitHolder>
            <Flex>
            <CardItem>
                <div>
                <i className="fas fa-concierge-bell"></i>
                <p>Governance</p>
                </div>
            </CardItem>
            <CardItem>
            <div>
            <i className="fas fa-th-list"></i>
            <p>Transactions</p>
            </div>
            </CardItem>
            </Flex>
        </Container>
    )
}

export default UserPanel
