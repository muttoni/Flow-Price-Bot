import { VscGithub } from "react-icons/vsc";

export default function Github() {
  return (
    <a
      rel="noreferrer"
      className="github"
      href="https://github.com/muttoni/Flow-Price-Bot"
      target="_blank"
      aria-label="GitHub"
      style={{ color: "black", fontSize: "30px" }}
    >
      <VscGithub />
    </a>
  );
}
