type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const Banner = ({children}: Props) => {
  return (
    <section>{children}</section>
  )
}

export default Banner;