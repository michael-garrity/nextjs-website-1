import Link from 'next/link';

// eslint-disable-next-line no-unused-vars
const NavItem = ({ text, href, active }) => (
  <Link href={href} className="nav__link">
    {text}
  </Link>
);

export default NavItem;
