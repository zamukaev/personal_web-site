import { FC, ReactNode } from "react";

import styles from "@/components/layout/Layout.module.scss";

interface LayoutProps {
  children: ReactNode
  className?: string;
}

const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={`${styles.layout} ${className}`}>
      {children}
    </div>
  );
}

export default Layout;