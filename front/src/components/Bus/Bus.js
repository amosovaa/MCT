import React from "react";
import MapBus from "../MapBus/MapBus";
import styles from "./bus.module.scss";

function Bus(props) {
  return (
    <div className={styles.wrapper}>
      <MapBus />
    </div>
  );
}

export default Bus;
