import styles from "./Home.module.scss";

export const Home = () => {
  console.log("Homeloaded!");
  return <div className={styles.homeContainer}>Hello World !</div>;
};
