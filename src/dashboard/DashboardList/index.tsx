import { useSnapshot } from "valtio";
import { metaStore } from "@/app/meta/store";
import DashboardItem from "../DashboardItem";

const DashboardList: React.FC = () => {
  const { files } = useSnapshot(metaStore);
  return (
    <div>
      {Array.from(files.values()).map((meta) => (
        <DashboardItem meta={meta} key={meta.id} />
      ))}
    </div>
  );
};

export default DashboardList;
