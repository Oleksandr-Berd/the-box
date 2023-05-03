import styles from "./FeedBack.module.css"
import Form from "./Form/Form";

const FeedBack = () => {
    return (
      <section className={styles.feedBackSec}>
        <h2 className={styles.feedBackTitle}>What can us do for you?</h2>
        <p className={styles.feedBackText}>
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>
        <Form/>
      </section>
    );
}
 
export default FeedBack;