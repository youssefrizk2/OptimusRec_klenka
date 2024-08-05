import styles from "./candidates.module.css";

const Candidates = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <p className={styles.imagetext}>Finding you the right role with the right employer at the right time...</p>
            </div>
            <div className={styles.contentcontainer}>
            <div className={styles.content}>
                    Your next move is the most important career decision you make.<br/>
                    <br/>
                    Sometimes, that move might be just around the corner, sometimes it will take time to find the right fit.<br/>
                    <br/>
                    For those early on in their career, your next role will enable you to flex and hone the skills you already have, as well as develop those that will put you in the best position to build a bright and successful future. For more senior individuals, the right position will enable you to use all your skills and expertise to take the business onto even greater success.<br/>
                    <br/>
                    Our team of consultants have each worked in the financial and professional services industries - from trainee positions to members of management boards - our extensive experience equipping us with the knowledge and insight to give you an honest appraisal of what, when and where, your next move might be.<br/>
                    <br/>
                    Our ethos is to:<br/>
                    <br/>
                    <ul>
                        <li>
                            Be easy and approachable - no onerous paperwork or time-consuming questionnaires</li>
                        <li>
                            Provide accurate insight into the market and our clients' current and future requirements</li>
                        <li>
                            Provide access to a wide range of positions - many of our clients use us exclusively and confidentially (positions don't always appear on our website)</li>
                        <li>
                            Give you an honest appraisal of your skills and expertise, and fit with market opportunities</li>
                        <li>
                            Develop a shortlist of potential roles that match your skills, experience and aspirations</li>
                        <li>
                            Ensure your CV reflects you in the best possible light</li>
                        <li>
                            Prepare you for interviews</li>
                    </ul>
                    Jersey's offshore financial and professional services sectors offer fantastic opportunities for those looking for a highly challenging but hugely rewarding career. Let us help you find a position in which you can truly thrive.<br/>
                    <br/>
                    <p className={styles.linktext}>Contact one of our experts today for a consultation on 01534 832660 or <a href="mailto:info@optimus.je" className={styles.mail}>info@optimus.je</a>.</p>
                </div>
                </div>
        </div>
    );
}

export default Candidates;