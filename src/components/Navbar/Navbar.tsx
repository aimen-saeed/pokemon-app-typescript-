import { FC } from 'react';
import './Navbar.css';

interface AppProps {
  title?: string
}

const Navbar: FC<AppProps> = ({ title = "PokeReact" }) => {
  return (
    <div className="navbar">
      <div className="nav-text">
        {title}
      </div>
    </div>
  );
};

export default Navbar;
