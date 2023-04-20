import React, { useState } from 'react';
import Products from './constants';
import classes from './styles.module.css';

const Amazon = () => {
  const [selectedColor, setColor] = useState(Products.colorOptions[0].imageUrl);
  const [option, setOption] = useState('time');
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.image} />
      </div>
      <div className={classes.detailsContainer}>
        <div className={classes.colorSelected}>
          <img src={selectedColor} alt="" width="500" height="500" />
          <div className={classes.colorDetails}>
            {option === 'time' && (
              <div className={classes.timeValue}>00:44</div>
            )}
            {option === 'heartRate' && (
              <div className={classes.heartRateContainer}>
                <div className={classes.heartRatePic} />
                <div className={classes.heartRateValue}>83</div>
              </div>
            )}
          </div>
        </div>
        <div className={classes.details}>
          <div className={classes.title}>{Products.title}</div>
          <div className={classes.desc}>{Products.description}</div>
          <div>
            <div className={classes.selectColor}>Select Color</div>
            <div className={classes.colorContainer}>
              {Products.colorOptions?.map((color) => (
                <div
                  onClick={() => setColor(color.imageUrl)}
                  className={`${classes.color} ${selectedColor === color.imageUrl && classes.selectedColor}`}
                >
                  <img src={color.imageUrl} alt="" height="100" width="100" />
                </div> 
              ))}
            </div>
          </div>
          <div className={classes.features}>
            <div className={classes.selectColor}>Features</div>
            <div className={classes.buttonContainer}>
              <div
                className={classes.time}
                onClick={() => setOption('time')}
              >
                Time
              </div>
              <div
                className={classes.heartRate}
                onClick={() => setOption('heartRate')}
              >
                Heart Rate
              </div>
            </div>
          </div>
          <div className={classes.buyNow}>Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default Amazon;