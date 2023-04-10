import React from 'react';
import DiscBand from './DiscBand';
import DiscYear from './DiscYear';
import DiscLabel from './DiscLabel';


const DiscoDataDisplay = ({ sortOption, sortedData, bandKeys, groupedData, currentTheme }) => {

    if (sortOption === 'band') {
        return  bandKeys.map((band, index) => (
          <div key={index}>
            <h3 style={{ border: `2px solid ${currentTheme.accent}`, color: currentTheme.accent }}>
              {band}
            </h3>
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