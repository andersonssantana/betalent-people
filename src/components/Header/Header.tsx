import './Header.css';

type HeaderProps = {
  logo: string;
  alt: string;
};

function Header ({ logo, alt }: HeaderProps) {
  return (
    <header className="header">
      <img src={ logo } alt={ alt } className="header__logo" />
    </header>
  );
};

export default Header;
