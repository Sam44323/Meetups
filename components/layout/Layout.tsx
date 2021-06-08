import React from "react";
import styles from "./Layout.module.scss";
import MainNavigation from "./MainNavigation";

const Layout: React.FC = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
