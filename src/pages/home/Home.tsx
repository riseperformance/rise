import styles from "./Home.module.scss";
import { Address } from "./components/address/Address";
import { About } from "./components/about/About";
import { Advertising } from "./components/advertising/Advertising";
import { Benefits } from "./components/benefits/Benefits";
import { Goals } from "./components/goals/Goals";
import { PlanRefund } from "./components/plan-refund/PlanRefund";
import { Reviews } from "./components/reviews/Reviews";
import { Welcome } from "./components/welcome/Welcome";
import { Contacts } from "../../components/contacts/Contacts";

export const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <Welcome />
      <Advertising />
      <Benefits />
      <Goals />
      <About />
      <PlanRefund />
      <Reviews />
      <Address />
      <Contacts />
    </main>
  );
};
