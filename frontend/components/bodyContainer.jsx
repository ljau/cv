import React from 'react'
import styles from '../styles/Body.scss'

const BodyContainer = () => {
    return (
        <div className={styles.MainContainer}>
            <div className={styles.LeftContainer}>
                Left container
                <div className={styles.PhotoContainer}>
                    Photo container
                </div>            
            </div>
            <div className={styles.RightContainer}>
                <div className={styles.ExperiencesContainer}>
                    <h2>Profile</h2>                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, corrupti! Rem quae accusantium magni ullam possimus ex ea ab totam! Nisi rerum nam voluptas reprehenderit atque molestiae, quaerat reiciendis voluptatibus!
                    </p>
                </div>
                <div className={styles.ExperiencesContainer}>
                    <h2>Experiences</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, corrupti! Rem quae accusantium magni ullam possimus ex ea ab totam! Nisi rerum nam voluptas reprehenderit atque molestiae, quaerat reiciendis voluptatibus!
                    </p>
                </div>
                <div className={styles.ExperiencesContainer}>
                    <h2>Education</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, corrupti! Rem quae accusantium magni ullam possimus ex ea ab totam! Nisi rerum nam voluptas reprehenderit atque molestiae, quaerat reiciendis voluptatibus!
                    </p>
                </div>
                <div className={styles.ExperiencesContainer}>
                    <h2>Training</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, corrupti! Rem quae accusantium magni ullam possimus ex ea ab totam! Nisi rerum nam voluptas reprehenderit atque molestiae, quaerat reiciendis voluptatibus!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BodyContainer
