import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Consistency</h3><br/>
              <p>
              I pride myself on my consistent approach to work, maintaining a steadfast commitment to quality and reliability in all tasks and projects. By adhering to established standards and routines, I ensure that I consistently deliver results that meet expectations
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Collaboration</h3><br/>
              <p>
              Collaboration is integral to my work philosophy. I thrive in team environments, actively engaging with colleagues to achieve common goals. Through open communication and mutual respect, I foster an inclusive atmosphere where diverse perspectives are valued, driving innovation and achieving shared success.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Adaptability</h3><br/>
              <p>
              I'm someone who handles change pretty well. When things shift, I don't panic. I'm flexible and can adjust to new situations without much fuss. Whether it's dealing with new priorities or unexpected challenges, I'm good at finding practical solutions and keeping things on track. It's all about staying calm and adaptable, no matter what comes up.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
