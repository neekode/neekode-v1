import * as React from 'react';

/**
 *  My current logo for Neekode.
 *  Note: for future SVGs, we can just convert them into components.
 *  My workflow for this one was--
 *  1. Create SVG using https://editor.method.ac/. Export code.
 *  2. Get code into SVGR.com. Export custom component using their awesome tools.
 *
 *  It being a component brings it into React land, which allows us to do stuff like
 *  passing props and customizing pieces. This one has a dark mode toggle, for instance.
 *
 *  TODO: Workshop icon?
 */
function NeekodeIcon({ theme }) {
  return (
    <div className="m-2">
      <svg xmlns="http://www.w3.org/2000/svg" width={ 36 } height={ 36 } viewBox="0 0 260 260">
        <title>Neekode Brand Icon</title>
        <path
          fill="none"
          stroke={ theme === 'dark' ? '#fff' : '#000' }
          strokeWidth={ 8 }
          d="M69.233 225.814V75.698l120 150.116h-120zM190.558 40.534v147.791l-120-147.79h120zM3.605 59.581h44v197h-44zM212.07 3.116h44.186v192H212.07z"
        />
      </svg>
    </div>
  );
}

export default NeekodeIcon;
