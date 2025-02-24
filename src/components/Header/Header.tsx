type HeaderProps = {
  logo: string;
  alt: string;
};

const Header = ({ logo, alt }: HeaderProps) => {
  return (
    <header>
      <img
        src={ logo }
        alt={ alt }
      />
    </header>
  )
}

export default Header
