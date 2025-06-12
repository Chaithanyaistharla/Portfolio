import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        &copy; {new Date().getFullYear()} Chaithanya Sujith Sinha Istharla. All rights reserved.
      </div>
    </footer>
  );
}