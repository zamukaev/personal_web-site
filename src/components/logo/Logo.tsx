import { FC } from "react";
import { BsCodeSlash } from 'react-icons/bs';

import styles from "./Logo.module.scss";
interface LogoProps {

}

const Logo: FC<LogoProps> = () => {
  return (
    <div className={styles.logo}>
      <BsCodeSlash size={40} fontWeight="bold" /> <h2 className={styles.name}>Muslim Zamukaev</h2>
    </div >
  );
}

export default Logo;