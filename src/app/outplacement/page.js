import styles from './outplacement.module.css';

const Outplacement = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <div className={styles.imagetext}>
                Outplacement...
                </div>
            </div>

            <div className={styles.contentcontainer}>
            <div className={styles.content}>
                    <p className={styles.subtitle}>What is Outplacement?</p>
                    What is Outplacement? Outplacement is practical support from professional consultants with the purpose of assisting an individual to move on with their careers, following a redundancy or severance. Companies will often provide outplacement to employees to help them through this period of change and to encourage them to make positive moves forward. We will help people to focus on the options available to them and to make the right choices for their professional future. Our role is to provide the level of support and assistance that the individual needs to successfully re-enter the job market through the following services:<br/>
                    <br/>
                    <ul >
                        <li className={styles.listtext}>
                            Initial consultation with the affected company, to understand the reasoning behind the redundancy or severance</li>
                        <li className={styles.listtext}>
                            Preparation of CVs</li>
                        <li className={styles.listtext}>
                            Advice in relation to interview techniques and personal marketing skills</li>
                        <li className={styles.listtext}>
                            Structured job search process, including advice on possible career changes</li>
                        <li className={styles.listtext}>
                            Ongoing support which is provided in an independent and highly confidential manner, ensuring that both the affected company and the individual receive a professional service throughout the entire Outplacement process.</li>
                    </ul><br/>
                    Our costs for this service are charged on a fixed fee basis and we would be happy to provide interested parties with further information on this.
                                        
                </div>
            </div>
        </div>
    );
}
 
export default Outplacement;