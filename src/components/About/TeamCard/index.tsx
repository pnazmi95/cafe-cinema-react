import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from "../../../assets/logo.jpg";
interface TeamCardProps extends React.PropsWithChildren {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
  imgSrc?: string;
}

export const TeamCard: React.FunctionComponent<TeamCardProps> = ({
  name,
  role,
  github,
  linkedin,
  imgSrc
}): JSX.Element => {
  return (
    <div className="flex w-[450px] items-center justify-between gap-3 rounded-xl bg-light-secondary p-3 text-light-content transition-all hover:scale-[102%] dark:bg-dark-secondary dark:text-dark-content">
      <img className="w-32 rounded-lg" src={
        imgSrc ? imgSrc : logo 
      } alt="logo" />
      <div className="flex h-full w-full flex-col justify-between">
        <p className="te flex flex-col uppercase text-light-heading dark:text-dark-heading">
          {name}
          <span className="capitalize italic text-light-content dark:text-dark-content">
            {" "}
            {role}
          </span>
        </p>
        <div className="flex gap-2">
          <a
            className={`hover:text-light-hover dark:hover:text-dark-hover ${
              !github && "hidden"
            }`}
            target="_blank"
            href={github}
          >
            <BsGithub size={25} />
          </a>
          <a
            className={`hover:text-light-hover dark:hover:text-dark-hover ${
              !linkedin && "hidden"
            }`}
            target="_blank"
            href={linkedin}
          >
            <BsLinkedin size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};
