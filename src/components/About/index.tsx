import logo from "../../assets/logo.jpg";
import Farzaneh from "../../assets/membersImages/Farzaneh.jpg";
import { TeamCard } from "./TeamCard";
interface AboutProps extends React.PropsWithChildren {}

export const About: React.FunctionComponent<AboutProps> = (): JSX.Element => {
  return (
    <section className="flex min-h-[calc(100vh-176px)] w-screen select-none flex-col items-center justify-center bg-light-primary p-5 text-light-content dark:bg-dark-primary dark:text-dark-content">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <img
            className="w-52 rounded-full shadow-md shadow-light-heading dark:shadow-dark-heading"
            src={logo}
            alt="gof logo"
          />
          <div className="flex w-[90vw] flex-col items-center justify-center gap-4 sm:w-[70vw] lg:w-[600px] xl:w-[650px] 2xl:w-[1100px]">
            <h2 className="uppercase text-light-hover dark:text-dark-hover sm:text-lg">
            You see us, put your head down
            </h2>
            <p className="text-justify">
              The first challenging bootcamp of Quera brought us together to solve hard problems in the field of front-end development. Over time, we got to know each other better and learn how to cooperate to handle difficult situations. This is our first project that we did as a team, and we hope that you enjoy it too. 
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 self-center lg:grid-cols-2 2xl:grid-cols-3">
          <TeamCard
            name="mohammad sina gholami"
            role="mentor, front-end developers"
            github="https://github.com/sinaGh-cyber"
            linkedin="https://www.linkedin.com/in/mohammad-sina-gholami/"
          />
          <TeamCard
            name="parsa nazmi"
            role="captain, front-end developers"
            github="https://github.com/pnazmi95"
            linkedin = "https://www.linkedin.com/in/parsa-nazmi-452938168/"
          />
          <TeamCard
            name="Farzane Aghaee"
            role="front-end developer"
            github="https://github.com/Faraghaee"
            linkedin="https://www.linkedin.com/in/farzaneh-aghaee/"
            imgSrc= {Farzaneh}
          />
          <TeamCard
            name="Shahin Seyfi Alagoz"
            role="front-end developer"
          />
          <TeamCard
            name="Amirreza Habibi"
            role="front-end developer"
          />
          <TeamCard
            name="Saba Afshar"
            role="front-end developer"
          />
          <TeamCard
            name="Mohammad Nikkhah"
            role="front-end developer"
          />
        </div>
      </div>
    </section>
  );
};
