import React from "react";
import styles from "./index.module.css";
import Dropdown from "./dropdown";

const MenuPanel = ({ item, prefix }) => {
  return (
    <>
      {
        item.src && (
          <div className={styles.MenuImg}>
            <img
              src={item.src}
              alt={item.text}
              loading="eager"
            />
          </div>
        )
      }
      <Dropdown items={item.children}></Dropdown>
    </>
  );
};

export default MenuPanel;
