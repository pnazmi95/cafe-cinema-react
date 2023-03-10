import logo from "../../assets/logo.jpg";
import Farzaneh from "../../assets/membersImages/Farzaneh.jpg";
import Sina from "../../assets/membersImages/Sina.jpg";
import AmirReza from "../../assets/membersImages/AmirReza.jpg";
import Saba from "../../assets/membersImages/Saba.jpg";
import Parsa from "../../assets/membersImages/Parsa.jpg";
import Mohammad from "../../assets/membersImages/Mohammad.jpg";

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
              The first challenging bootcamp of Quera brought us together to
              solve hard problems in the field of front-end development. Over
              time, we got to know each other better and learn how to cooperate
              to handle difficult situations. This is our first project that we
              did as a team, and we hope that you enjoy it too.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 self-center lg:grid-cols-2 2xl:grid-cols-3">
          <TeamCard
            name="mohammad sina gholami"
            role="mentor, front-end developers"
            github="https://github.com/sinaGh-cyber"
            linkedin="https://www.linkedin.com/in/mohammad-sina-gholami/"
            imgSrc={Sina}
          />
          <TeamCard
            name="parsa nazmi"
            role="captain, front-end developers"
            github="https://github.com/pnazmi95"
            linkedin="https://www.linkedin.com/in/parsa-nazmi-452938168/"
            imgSrc={Parsa}
          />
          <TeamCard
            name="Farzane Aghaee"
            role="front-end developer"
            github="https://github.com/Faraghaee"
            linkedin="https://www.linkedin.com/in/farzaneh-aghaee/"
            imgSrc={Farzaneh}
          />
          <TeamCard
            name="Shahin Seyfi Alagoz"
            role="front-end developer"
            github="https://github.com/Michayilsa"
            linkedin="https://www.linkedin.com/in/shahin-saifi-alagoz-54345023/"
          />
          <TeamCard
            name="Amirreza Habibi"
            role="front-end  developer"
            github="https://github.com/amirreza-habibi"
            linkedin="https://www.linkedin.com/in/amirreza-habibi-b7467525b/"
            imgSrc={AmirReza}
          />
          <TeamCard
            name="Saba Afshar"
            role="front-end developer"
            imgSrc={Saba}
            github="https://github.com/sabaafshar7"
            linkedin="https://www.linkedin.com/in/saba-afshari-04452a25b"
          />
          <TeamCard
            name="Mohammad Nikkhah"
            role="front-end developer"
            github="https://github.com/Mohammad-Nikkhah"
            linkedin="https://www.linkedin.com/in/mohammad-nikkhah-4678521b8/"
            imgSrc={Mohammad}
          />
        </div>
      </div>
    </section>
  );
};
