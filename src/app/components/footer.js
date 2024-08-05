import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <>
        <div className={styles.registerdiv}>
        <div className={styles.registertext}>
            <p className={styles.regtext}>
            We see new jobs on a daily basis. Register with us today to be kept up <br/>
            to date with these roles.
            </p>
            <button className={styles.registerbutton}>Register</button>
        </div>
        </div>
        <div className={styles.contact}>
        <div className={styles.contactlogo}>
            <div className={styles.contactimg}>
            <Image  src="/icon.png" alt="logo" width={35} height={35} className={styles.aboutimg}/>
            CONTACT
            </div>
            <div className={styles.contacttext}>
            <b className={styles.opt}>Optimus Recruitment</b>
            <p className={styles.firstfloor}>First Floor, Commercial House Annex <br/>
            Commercial Street, St Helier<br/>
            Jersey, JE2 3RU
            </p>
            <b>Tel:        <span className={styles.pink}>01534 832660</span></b>
            <b>Email:      <a className={styles.mail} href="mailto:info@optimus.je"><span className={styles.pink}>info@optimus.je </span></a></b>
            <div className={styles.contactsocdiv}>
                <b>Follow Us</b>
                <a target="_blank" href="https://www.instagram.com/optimusrecruitmentjersey/" ><Image className={styles.soc} src="/optimus_instagram.png" alt="Instagram" width={52} height={52}/></a>
                <a target="_blank" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF0s4uPAr7b6gAAAZEjDpVgkivS8I7CrewU9wR90JnWaEEqXAjtQQw2-GHl1MsEHsltd4VfWjODvgTovgVdTlAFRsjxqa1-ynpuZJR4nHIwZa7OVmiLYNESKjtJBp182k_bM9k=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Foptimus-recruitment" ><Image className={styles.soc} src="/optimus_linkedin.png" alt="LinkedIn" width={52} height={52}/></a>
                <a target="_blank" href="https://www.facebook.com/optimusrecruitment" ><Image className={styles.soc} src="/optimus_facebook.png" alt="Facebook" width={52} height={52}/></a>
            </div>
        </div>
        </div>
        <div className={styles.contactmap}>
            <a className={styles.maplink} target="_blank" href="https://www.google.co.uk/maps/dir/''/optimus+recruitment+jersey/@49.1832731,-2.1090762,17.83z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480c528eaaaaaaab:0x4d640d32cc8e7eb6!2m2!1d-2.108602!2d49.183638">
            </a>
        </div>
        </div>
        <div className={styles.container}>
            <p>Copyright © Optimus Recruitment All Rights Reserved
                | Privacy Policy  | Website Terms  
                | Website design by Limetree Creative powered by Chameleon-i Recruitment Software</p>
        </div>
        </>
    );
}

export default Footer;