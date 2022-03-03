import classes from './MainNavigation.module.css';
import Link from 'next/link'
function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Excusepedia</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All</Link>
          </li>
          <li>
            <Link href='/children'>Children</Link>
          </li>
          <li>
            <Link href='/family'>Family</Link>
          </li>
          <li>
            <Link href='/office'>Office</Link>
          </li>
          <li>
            <Link href='/party'>Party</Link>
          </li>
          <li>
            <Link href='/college'>College</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
