import styled from 'styled-components';
import { Meta } from '@/app/world';
import DashboardItem from '../DashboardItem';

const S = styled.div`
  display: grid;
  gap: 1.5rem;
`;

type Props = {
  files: Meta[];
};

const DashboardList: React.FC<Props> = ({ files }) => {
  return (
    <S>
      {files.map((meta) => (
        <DashboardItem meta={meta} key={meta.id} />
      ))}
    </S>
  );
};

export default DashboardList;
