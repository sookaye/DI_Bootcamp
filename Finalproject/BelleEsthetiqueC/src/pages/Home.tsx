import logo from "../images/logobandeau.png"
import { Intro } from "./intro";
import { Store } from "./Store";

export function Home() {
  return (
    <>
  <div className="headerstyle">
    <a href="/" className="logo-bandeau">
          <img src={logo} alt="Belle esthetique" />
    </a>
    <span>Belle Esthetique C</span>
  </div>
  <Intro />
   <Store />
   </>
  );
}
