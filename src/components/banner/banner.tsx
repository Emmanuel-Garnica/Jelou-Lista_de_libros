import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  classNames?: string;
}

const Banner = ({children, classNames}: Props) => {
  return (
    <section className={classNames}>{children}</section>
  )
}

export default Banner;