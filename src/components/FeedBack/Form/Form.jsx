import styles from "./Form.module.css";

const Form = () => {
  return (
    <form>
      <div className={styles.form}>
        <div className={styles.inputCon}>
          <label htmlFor="name" className={styles.label}>
            Your Name <span className={styles.asterix}>*</span>
          </label>
          <input type="text" id="name" className={styles.input} />
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="email" className={styles.label}>
            Email <span className={styles.asterix}>*</span>
          </label>
          <input type="email" id="email" className={styles.input} />
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="reason" className={styles.label}>
            Reason for Contacting <span className={styles.asterix}>*</span>
          </label>
          <select type="text" id="reason" className={styles.input}>
            <option value=""></option>
            <option value="boring">boring</option>
            <option value="eager to annoy">eager to annoy</option>
            <option value="I am just a dumb">I am just a dumb</option>
            <option value="Fck them all!">Fck them all!</option>
          </select>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="phone" className={styles.label}>
            Phone
          </label>
          <input type="phone" id="phone" className={styles.input} />
        </div>
        <div className={styles.textareaCon}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            name=""
            id="message"
            rows="10"
            className={styles.textArea}
          ></textarea>
          <small className={styles.small}>
            <span className={styles.asterix}>*</span>indicates a required field
          </small>
        </div>
      </div>
      <button type="submit" className={styles.btnSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
