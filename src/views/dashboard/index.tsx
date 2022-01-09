import DashboardHolder from './components/DashboardHolder';
import {isMobile} from 'react-device-detect';
interface Props {}

const Dashboard = (props: Props) => {
    if(isMobile) return <p>gm ser. device not supported.</p>
    return <DashboardHolder/> 
    
}

export default Dashboard;
