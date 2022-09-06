import styled from 'styled-components';

import Navbar from '@/components/Navbar';
import DashboardList from '../DashboardList';

const S = styled.div`
  ${(p) => p.theme.constants.contentWidth};
  .list-container {
    padding: 1rem 0rem 4rem;
  }
`;

const Dashboard: React.FC = () => {
  return (
    <S>
      <Navbar />
      <div className="list-container">
        <DashboardList />
      </div>
    </S>
  );
};

export default Dashboard;
