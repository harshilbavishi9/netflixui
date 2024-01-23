import React, { useState } from 'react';
import './more.scss';

const MoreDetails = () => {
  const [isOpenSection1, setIsOpenSection1] = useState(false);
  const [isOpenSection2, setIsOpenSection2] = useState(false);
  const [isOpenSection3, setIsOpenSection3] = useState(false);

  const toggleAccordion = (section) => {
    switch (section) {
      case 1:
        setIsOpenSection1(!isOpenSection1);
        break;
      case 2:
        setIsOpenSection2(!isOpenSection2);
        break;
      case 3:
        setIsOpenSection3(!isOpenSection3);
        break;
      default:
        break;
    }
  };

  return (
    <div className='container-detail'>
      <div className="detail">
        <h3>Episodes</h3>
        <h1>│</h1>
        <span> title</span>
        <p className='top'>Seasons</p>
        <p>Release year</p>
        <p>description</p>
      </div>

      <h2>Accordion</h2>
      <div className='demo'>
        <button className="accordion" onClick={() => toggleAccordion(1)}>
          Section 1
        </button>
        {isOpenSection1 && (
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        )}

        <button className="accordion" onClick={() => toggleAccordion(2)}>
          Section 2
        </button>
        {isOpenSection2 && (
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        )}

        <button className="accordion" onClick={() => toggleAccordion(3)}>
          Section 3
        </button>
        {isOpenSection3 && (
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreDetails;
