import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logodiv}>
                <Link href="/"><Image className={styles.logo} src="/logo.png" alt="Logo" width={200} height={55}/></Link>
            </div>

            <div className={styles.linksdiv}>
                <Link className={styles.nav} href="/meetteam">MEET THE TEAM</Link>
                <Link className={styles.nav} href="/candidates">CANDIDATES</Link>
                <Link className={styles.nav} href="/clients">CLIENTS</Link>
                <Link className={styles.nav} href="/">OTHER SERVICES</Link>
            </div>

            <div className={styles.actiondiv}>
                <button className={styles.jobsearch}>JOB SEARCH</button>
                <button className={styles.register}>REGISTER</button>
                <button className={styles.enquire}>ENQUIRE</button>
            </div>

            <div className={styles.socialdiv}>
                <Image src="/optimus_instagram.png" alt="Instagram" width={32} height={32}/>
                <Image src="/optimus_linkedin.png" alt="LinkedIn" width={32} height={32}/>
                <Image src="/optimus_facebook.png" alt="Facebook" width={32} height={32}/>
            </div>
        </div>
    );
}

export default Header;