import logo from "../../assets/logo.jpg";
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
            alt="mad frogs logo"
          />
          <div className="flex w-[90vw] flex-col items-center justify-center gap-4 sm:w-[70vw] lg:w-[600px] xl:w-[650px] 2xl:w-[1100px]">
            <h2 className="uppercase text-light-hover dark:text-dark-hover sm:text-lg">
            You see us, put your head down
            </h2>
            <p className="text-justify">
              The first challenging bootcamp of quera brought us together to solve hard problems in the field of front-end development ...
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
            name="mehrdad azizkhani"
            role="captain, front-end developers"
          />
          <TeamCard
            name="monireh bastami"
            role="front-end developer"
            github="https://github.com/monirehbastami"
          />
          <TeamCard
            name="mohamad basabr"
            role="front-end developer"
            github="https://github.com/MohammadBasabr"
          />
          <TeamCard
            name="amir isfahani"
            role="front-end developer"
            github="https://github.com/amirhossein1811"
          />
          <TeamCard
            name="mohamad reza rezvani"
            role="front-end developer"
            github="https://github.com/Mrrsh2000"
          />
        </div>
      </div>
    </section>
  );
};
