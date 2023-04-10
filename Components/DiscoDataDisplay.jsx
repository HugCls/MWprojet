import React from 'react';
import DiscBand from './DiscBand';
import DiscYear from './DiscYear';
import DiscLabel from './DiscLabel';
import styles from '../styles/Home.module.css';


const DiscoDataDisplay = ({ sortOption, sortedData, bandKeys, groupedData, currentTheme }) => {

    if (sortOption === 'band') {
        return  bandKeys.map((band, index) => (
          <div key={index}>
            <div data-aos="fade-up" className={styles.timeline2} >
            <h3 style={{ border: `2px solid ${currentTheme.accent}`, color: currentTheme.accent }}>
              {band}
            </h3>
            </div>
            {groupedData[band].map((disc, index) => (
              <DiscBand disc={disc} index={index} currentTheme={currentTheme} />
            ))}
          </div>
        ));
      } else if (sortOption === 'year') {
        return sortedData.map((disc, index) => (
          <DiscYear disc={disc} index={index} currentTheme={currentTheme} />
        ));
      } else if (sortOption === 'label') {
        return sortedData.map((disc, index) => (
          <DiscLabel disc={disc} index={index} currentTheme={currentTheme} />
        ));
      }
    
      return null;
    };
export default DiscoDataDisplay;    