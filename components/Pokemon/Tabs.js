import styles from '@components/Pokemon/Pokemon.module.scss';
import TabButton from '@components/Pokemon/TabButton';
import { body as variants } from '@variants/pokemon';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0]?.props.label);
  const [content, setContent] = useState(children[0]?.props.children);
  const buttons = ['About', 'Base Stats', 'Evolution', 'Moves'];

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
    setContent(
      children.find(({ props }) => props.label === tab).props.children
    );
  };

  return (
    <motion.div
      className={styles.tabContainer}
      variants={variants.tabContainer}
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
  );
};

export default Tabs;
