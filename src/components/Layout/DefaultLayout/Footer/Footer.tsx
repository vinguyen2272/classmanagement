import styles from "./Footer.module.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'
import Tailwind from "primereact/passthrough/tailwind";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export default function Footer() {
  return <footer className={styles.footer}>
   Copyright @2022 BA Warrior. All right reserved
  </footer>;
}
