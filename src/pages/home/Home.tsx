import styles from "./Home.module.scss";
import { About } from "./components/about/About";
import { Advertising } from "./components/advertising/Advertising";
import { Benefits } from "./components/benefits/Benefits";
import { Goals } from "./components/goals/Goals";
import { PlanRefund } from "./components/plan-refund/PlanRefund";
import { Welcome } from "./components/welcome/Welcome";

export const Home = () => {
  return (
    <main>
      <Welcome />
      <Advertising />
      <Benefits />
      <Goals />
      <About />
      <PlanRefund />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.1692821380966!2d-51.39348542390978!3d-22.119520510211675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f5fdf1eef00d%3A0x9926b1e92e623fec!2sRISE%20performance%20e%20sa%C3%BAde!5e0!3m2!1spt-BR!2sbr!4v1696466851781!5m2!1spt-BR!2sbr"
        width="100%"
        height="550"
        style={{
          filter: "invert(90%) hue-rotate(180deg)",
          border: 0,
          borderRadius: "16px",
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
};
