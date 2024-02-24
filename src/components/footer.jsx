import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-green-600 py-4 text-center bottom-0 mt-10" >
      <p>&copy; {new Date().getFullYear()} Traders Rights and Welfare Association. All rights reserved.</p>
      <p>Contact: tradersrightwelfare@gmail.com</p>
    </footer>
  );
}

export default Footer;
