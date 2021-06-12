import { useEffect, useState } from 'react';
import TabButton from '@components/Pokemon/TabButton';
import styles from '@components/Pokemon/Pokemon.module.scss';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { body as animation } from '@components/Pokemon/animation';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0]?.props.label);
  const [content, setContent] = useState(children[0]?.props.children);
  const buttons = ['about', 'stats', 'evolution', 'moves'];

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
    setContent(
      children.find(({ props }) => props.label === tab).props.children
    );
  };

  return (
    <AnimateSharedLayout>
      <motion.div
        className={styles.tabContainer}
        variants={animation.tabContainer}
      >
        <div className={styles.tabButtons}>
          {buttons.map((label) => {
            return (
              <TabButton
                key={label}
                label={label}
                isActive={label === activeTab}
                onClick={() => handleChangeTab(label)}
              />
            );
          })}
        </div>
        {content}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Tabs;
