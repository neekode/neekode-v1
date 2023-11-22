import * as React from 'react';

function NeekodeIcon({ isDark }) {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={ 64 } height={ 64 } viewBox="0 0 400 300">
        <title>Neekode Brand Icon</title>
        <path
          fill="none"
          stroke={ isDark ? '#fff' : '#000' }
          strokeWidth={ 8 }
          d="M135.233 244.814V94.698l120 150.116h-120zM257.558 56.534v147.791l-120-147.79h120zM72.605 79.581h44v205h-44zM276.07 19.116h44.186v202H276.07z"
        />
      </svg>
    </div>
  );
}

export default NeekodeIcon;
