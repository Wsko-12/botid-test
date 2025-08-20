import Image from "next/image";
import styles from "./page.module.css";
import {ActionButton} from "@/app/components/action-button";

export default function Home() {
  return (
    <div className={styles.page}>
        <ActionButton />
    </div>
  );
}
