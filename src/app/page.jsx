import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`${styles.container !== undefined ? styles.container : ''} global__container login`}>
      <div className={styles.box}>
        <h2>Cardápio Virtual</h2>
        <p>
          Seja bem vindo a nosso cardápio virtual!
        </p>
        <Link href="/cardapio">Começar</Link>
      </div>
    </div>
  );
}
