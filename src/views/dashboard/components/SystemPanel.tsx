import React from 'react'
import styled from 'styled-components'


import Flex from './../../../app/styles/Flex'
import { Options, SYSTEM_CARDS } from '../constants';
import Toggle from './../../../app/components/Toggle';
import Table from '../../../app/components/Table';
import Data from '../../../app/config/DATA.json'

interface Props {}
const Container = styled.div`
  margin-top: 12px;
`
const Card = styled.div`
  height: 130px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08), 0 12px 16px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  background-color: #fff;
  width: 33%;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  > div > p {
      margin: 0px;
  }

  :hover {
       cursor: pointer;
  }
` 
const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const LongCard = styled.div`
  margin-top: 20px;
  min-height: auto;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08), 0 12px 16px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  background-color: #fff;
  width: 94%;
  margin-right: 10px;
  padding: 20px;
`;

const Icon = styled.i`
    color: #8247E5;
`;

const SystemPanel = (props: Props) => {
    const [selected, setSelected] = React.useState(Options.SUPPLY);

    function toggleSelected(value: Options) {
        setSelected(value);
    }
  return (
    <Container>
      <Flex>
        {
            SYSTEM_CARDS.map(item=>{
                return <Card key={item.label}>
                <div>
                  <Icon className={item.icon}></Icon>
                  <p>{item.label}</p>
                  <p>{item.value}</p>
                </div>
              </Card>
            })
        }
      </Flex>
      <LongCard>
          <Center>
            <Toggle data={{
                first: {
                    name: 'supply'
                },
                second: {
                    name: 'borrow'
                }
            }}
            selected={selected}
            onChange={toggleSelected}
            />
          </Center>
          <Table headings={['Asset', 'APY', 'Wallet', 'Collateral']} data={selected===Options.SUPPLY?Data.supply_assets:Data.borrow_assets}/>
      </LongCard>
    </Container>
  )
}

export default SystemPanel
