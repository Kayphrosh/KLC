import React from 'react';
// import styles from '../src/styles/layout.module.scss';
const Layout = ({ children }) => {
  return (
    <section>
      <main>{children}</main>
    </section>
  );
};

export default Layout;
