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
                <div className={styles.dropdownContainer}>
                    <p className={styles.nav}>OTHER SERVICES</p>
                    <ul className={styles.dropdownMenu}>
                        <li className={styles.dropdownItem}><Link href="/outplacement" className={styles.droplink}>Outplacement</Link></li>
                        <li className={styles.dropdownItem}><Link href="/news" className={styles.droplink}>News & Views</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.actiondiv}>
                <button className={styles.jobsearch}>JOB SEARCH</button>
                <button className={styles.register}>REGISTER</button>
                <button className={styles.enquire}>ENQUIRE</button>
            </div>

            <div className={styles.socialdiv}>
                <a target="_blank" href="https://www.instagram.com/optimusrecruitmentjersey/" ><Image className={styles.soc} src="/optimus_instagram.png" alt="Instagram" width={32} height={32}/></a>
                <a target="_blank" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF0s4uPAr7b6gAAAZEjDpVgkivS8I7CrewU9wR90JnWaEEqXAjtQQw2-GHl1MsEHsltd4VfWjODvgTovgVdTlAFRsjxqa1-ynpuZJR4nHIwZa7OVmiLYNESKjtJBp182k_bM9k=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Foptimus-recruitment" ><Image className={styles.soc} src="/optimus_linkedin.png" alt="LinkedIn" width={32} height={32}/></a>
                <a target="_blank" href="https://www.facebook.com/optimusrecruitment" ><Image className={styles.soc} src="/optimus_facebook.png" alt="Facebook" width={32} height={32}/></a>
            </div>
        </div>
    );
}

export default Header;