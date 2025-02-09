import Container from '../../components/Container/Container.jsx';
import FriendsList from '../../components/FriendsList/FriendsList.jsx';
import Section from '../../components/Section/Section.jsx';
import Title from '../../components/Title/Title.jsx';
import styles from './FriendsPage.module.css';

const FriendsPage = () => {
  return (
    <main>
      <Section style="main-section">
        <Container style='container64'>
          <div className={styles['our-friends-container']}>
            <Title style="our-friends">Our friends</Title>
            <FriendsList />
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default FriendsPage;
