import DashboardNavBar from "../components/DashboardNavBar";
import LineChart from "../components/LineChart";
import Summary from "../components/Summary";
const Dashboard = (props) => {
  return (
    <>
      <DashboardNavBar />
      <div>
        <Summary />
      </div>
      <div>chart will go here</div>
      <div>something else may go here</div>
    </>
  );
};

export default Dashboard;
