import { useSnapshot } from "valtio";
import styled from "styled-components";
import { metaStore } from "@/app/meta/store";
import DashboardItem from "../DashboardItem";

const S = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const DashboardList: React.FC = () => {
  const { files } = useSnapshot(metaStore);
  return (
    <S>
      {Array.from(Object.entries(files)).map(([_, meta]) => (
        <DashboardItem meta={meta} key={meta.id} />
      ))}
    </S>
  );
};

export default DashboardList;
