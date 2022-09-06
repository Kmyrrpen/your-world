import { useSnapshot } from 'valtio';
import styled from 'styled-components';
import { world } from '@/app/world';
import Navbar from '@/components/Navbar';
import DashboardList from '../DashboardList';

const S = styled.div`
  width: ${(p) => p.theme.constants.contentWidth.default};
  max-width: ${(p) => p.theme.constants.contentWidth.max};

  .list-container {
    padding: 1rem 0rem 4rem;
  }
`;

const Dashboard: React.FC = () => {
  const { files } = useSnapshot(world);

  return (
    <S>
      <Navbar />
      <div className="list-container">
        <DashboardList files={Object.entries(files).map(([_, meta]) => meta)} />
      </div>
    </S>
  );
};

export default Dashboard;
