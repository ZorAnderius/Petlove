import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import MyNotices from '../../components/MyNotices/MyNotices.jsx';
import UserCard from '../../components/UserCard/UserCard.jsx';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <main>
      <Section>
        <Container>
          <div className={styles['profile-container']}>
            <UserCard />
            <MyNotices />
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default ProfilePage;
