import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

function Contact() {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form action="https://formspree.io/xleoedkv" method="POST" className={styles.form}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Enter your name..."
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="Enter your email..."
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Enter your message"
            />
          </div>
          <div>
              <input type="submit" value="send message" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
