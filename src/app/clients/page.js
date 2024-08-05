import styles from "./clients.module.css";

const Clients = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <div className={styles.imagetext}>
                Finding you the right candidates to fit your needs...
                </div>
            </div>

            <div className={styles.contentcontainer}>
            <div className={styles.content}>

                    Unearthing the best talent is a constant challenge for any business, especially when skills are short on supply yet high in demand.<br/>
                    <br/>
                    Finding the right people is a particular challenge for the offshore financial services sector. To succeed, Trust Companies, Fund Administrators, Banks, indeed all Financial Services companies need to attract talented and ambitious individuals, from seasoned executives to new trainees, to join them.<br/>
                    <br/>
                    At Optimus we strive to hire consultants who have worked in the financial services industry and within our team some of us have worked our way up from trainee to manager, others have acted as members of management boards and all have worked for leading financial organisations.<br/>
                    <br/>
                    At Optimus, we are proud of our fifteen-year history of providing our clients with the right individuals, at the right point in their career, and with the right aptitude and ambition to succeed.<br/>
                    <br/>
                    Our success is built upon the following principles:<br/>
                    <br/>
                    <ul>
                        <li>
                            Working in partnership with you to understand your exact requirements</li>
                        <li>
                            Collaborating with you to help you meet your future strategic needs and long-term goals</li>
                        <li>
                            Providing up-to-date insight into the candidate market to help you offer the most appropriate salary and package</li>
                        <li>
                            Having access to a large candidate base - many candidates return to us to guide them through their career</li>
                        <li>
                            Identifying the best candidates for the role, not the most - our consultants are not driven by commission or monthly targets</li>
                        <li>
                            Fully briefing and preparing candidates before we present them to you</li>
                    </ul>
                    <br/>
                    <p className={styles.linktext}>Find the best people for your business, contact us today on 01534 832660 or <a className={styles.mail} href="mailto:info@optimus.je">info@optimus.je</a>.</p><br/>
                    <br/>
                    We look forward to working with you.<br/>

                </div>
            </div>
        </div>
    );
}

export default Clients;