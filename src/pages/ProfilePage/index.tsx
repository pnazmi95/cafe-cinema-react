import Dashboard from "../../components/Dashboard";

interface IProfilePageProps extends React.PropsWithChildren {}
const ProfilePage: React.FunctionComponent<IProfilePageProps> = (
  props
): JSX.Element => {
  return (
    <div>
      <Dashboard name="monik" gmail="monik@gmail.com" />
    </div>
  );
};

export default ProfilePage;
