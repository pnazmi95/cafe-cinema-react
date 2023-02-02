import React from "react";
import CardBox from "./CardBox/CardBox";
import Chart from "./Chart/Chart";
interface IDashboardProps extends React.PropsWithChildren {
  name: string;
  gmail: string;
}

const Dashboard: React.FunctionComponent<IDashboardProps> = ({
  name,
  gmail,
}): JSX.Element => {
  return (
    <div className="h-[calc(100vh-176px)] bg-light-primary dark:bg-dark-content">
      <div className="Head py-2 text-center ">
        <h1>Dashboard</h1>
        <div className="flex  flex-wrap items-center justify-center">
          <span className="mx-2 p-2 dark:bg-dark-primary dark:text-dark-content">
            <span className="font-bold">Username : </span> {name}
          </span>
          <span className="p-2 dark:bg-dark-primary dark:text-dark-content">
            <span className="font-bold">Gmail : </span>
            {gmail}
          </span>
        </div>
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-evenly gap-1">
        <CardBox title="Clients" number="512" />
        <CardBox title="Sales" number="$7,770" />
        <CardBox title="Performance" number="256%" />
        <CardBox title="Performance" number="256%" />
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
