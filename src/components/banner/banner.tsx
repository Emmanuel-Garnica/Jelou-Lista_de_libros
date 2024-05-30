import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

const Banner = ({children}: Props) => {
  return (
    <section>{children}</section>
  )
}

export default Banner;