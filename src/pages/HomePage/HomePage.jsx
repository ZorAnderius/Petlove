import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={styles}>
      <Section name='home'>
        <Container>
          <div className={styles['hero-wrap']}>
            <div className={styles['hero-txt-container']}>
              <h1 className={styles['hero-title']}>
                Take good <span>care</span> of your small pets
              </h1>
              <p className={styles['hero-txt']}>
                Choosing a pet for your home is a choice that is meant to enrich
                your life with immeasurable joy and tenderness.
              </p>
            </div>
            <div className={styles['hero-img']}></div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default HomePage;
