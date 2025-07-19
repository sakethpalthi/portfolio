import React from 'react';
import './Coding.css';
import codechef from '../../assets/codechef.png';
import codeforces from '../../assets/codeforces.png';
import leetcode from '../../assets/leetcode.png';

import { FaArrowUp } from 'react-icons/fa';

const Coding = () => {
  return (
    <div className="coding-profiles" id="coding-profiles">
      <h3>Check Up On My</h3>
      <h2>Coding Profiles</h2>

      <a href="https://www.codechef.com/users/palthisaketh" className="profile-card" target="_blank" rel="noopener noreferrer">
        <img src={codechef} alt="CodeChef" />
        <span>palthisaketh</span>
        <p>Highest rating on Codechef - 1275</p>
        <FaArrowUp className="arrow" />
      </a>

      <a href="https://codeforces.com/profile/Sakethpalthi" className="profile-card" target="_blank" rel="noopener noreferrer">
        <img src={codeforces} alt="Codeforces" />
        <span>sakethpalthi</span>
        <p>Highest rating on Codeforces - 1097</p>
        <FaArrowUp className="arrow" />
      </a>

      <a href="https://leetcode.com/u/22r01a6746/" className="profile-card" target="_blank" rel="noopener noreferrer">
        <img src={leetcode} alt="Leetcode" />
        <span>22r01a6746</span>
        <p>Highest rating on leetcode - 1770</p>
        <FaArrowUp className="arrow" />
      </a>

      
    </div>
  );
};

export default Coding;
