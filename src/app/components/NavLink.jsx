import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="tabname">{title}</a>
    </Link>
  );
};

export default NavLink;
