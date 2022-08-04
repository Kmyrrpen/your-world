import Navbar from "@/components/Navbar";
import DashboardList from "../DashboardList";
import S from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <S.Dashboard>
        <DashboardList />
      </S.Dashboard>
    </>
  );
};

export default Dashboard;
