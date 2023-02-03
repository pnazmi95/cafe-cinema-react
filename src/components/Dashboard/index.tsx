import React from "react";
import CardBox from "./CardBox/CardBox";
import Chart from "./Chart/Chart";
import Mohammad from "../../assets/membersImages/Mohammad.jpg";

interface IDashboardProps extends React.PropsWithChildren {
  name: string;
  gmail: string;
}

const Dashboard: React.FunctionComponent<IDashboardProps> = ({
  name,
  gmail,
}): JSX.Element => {
  return (
    <div className="h-[calc(100vh-176px)] overflow-y-auto">
      <div className="Head py-2 text-center ">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex  flex-wrap flex-col gap-2 sm:flex-row items-center justify-center">
          <img className="w-32 rounded-lg" src={Mohammad} alt="logo" />
          <span className="mx-2 p-2 dark:rounded-md dark:bg-dark-primary dark:text-dark-content">
            <span className="font-bold">Username : </span> {name}
          </span>
          <span className="p-2 dark:rounded-md dark:bg-dark-primary dark:text-dark-content">
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
