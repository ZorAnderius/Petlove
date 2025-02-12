import clsx from 'clsx';
import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import NoticesList from '../NoticesList/NoticesList.jsx';
import styles from './MyNotices.module.css';

const MyNotices = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <aside className={styles['notice-aside']}>
      <Tabs
        selectedIndex={activeTab}
        onSelect={index => setActiveTab(index)}
        className={styles['notices-container']}
      >
        <TabList className={styles['notices-tab-list']}>
          <Tab
            className={clsx(
              styles['notices-tab-item'],
              activeTab === 0 && styles['active'],
            )}
          >
            My favorite pets
          </Tab>
          <Tab
            className={clsx(
              styles['notices-tab-item'],
              activeTab === 1 && styles['active'],
            )}
          >
            Viewed
          </Tab>
        </TabList>

        <div>
          <TabPanel>
            <NoticesList />
          </TabPanel>

          <TabPanel>
            <NoticesList />
          </TabPanel>
        </div>
      </Tabs>
    </aside>
  );
};

export default MyNotices;
