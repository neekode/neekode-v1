import React from 'react';
import ProfessionContent from '../components/contents/Profession';

export const metadata = {
  title: 'profession'
};

// { children }
export default function Profession() {
  return (
    <div
      id="profession"
      className="page"
    >
      <ProfessionContent />
    </div>
  );
}
