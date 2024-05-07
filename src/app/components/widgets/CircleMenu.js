import React, { useState } from 'react';

/**
 * TODO:
 */
function CircleMenu(props) {
  const { textColor } = props;
  const [activeSegment, setActiveSegment] = useState(null);
  const segmentsData = [
    {
      id: 1,
      label: 'princess cruiselines',
      value: 7,
      color: '#003595',
      content: 'Princess \n Cruiselines'
    },
    {
      id: 2,
      label: 'microsoft teams',
      value: 5,
      color: '#6264A7',
      content: 'Microsoft \n  Teams'
    },
    {
      id: 3,
      label: 'people tech',
      value: 3,
      color: '#A72037',
      content: 'People Tech \n Group'
    }
    // Add more sections with respective values
  ];

  const outerRadius = 100; // Default outer radius
  const innerRadius = 80; // Inner radius (hollow part)
  const expandedRadius = 105; // Expanded radius for the active segment
  const totalValue = segmentsData.reduce((acc, cur) => acc + cur.value, 0); // Total of all values

  const getCoordinatesForAngle = (angle, radius) => {
    // Calculate coordinates for a given angle and radius
    const angleRad = (angle + 90) * (Math.PI / 180);
    const x = outerRadius + radius * Math.cos(angleRad) + 5;
    const y = outerRadius + radius * Math.sin(angleRad) + 5;
    return {
      x,
      y
    };
  };

  const createSegmentPath = (index, isActive) => {
    const startAngle = segmentsData.slice(0, index)
      .reduce((acc, cur) => acc + (cur.value / totalValue) * 360, 0);
    const angleExtent = (segmentsData[index].value / totalValue) * 360;
    const endAngle = startAngle + angleExtent;
    const radius = isActive ? expandedRadius : outerRadius;
    const startOuter = getCoordinatesForAngle(startAngle, radius);
    const endOuter = getCoordinatesForAngle(endAngle, radius);
    const startInner = getCoordinatesForAngle(endAngle, innerRadius);
    const endInner = getCoordinatesForAngle(startAngle, innerRadius);
    return `M${startOuter.x},${startOuter.y} 
            A${radius},${radius} 0 ${(angleExtent > 180) ? 1 : 0},1 ${endOuter.x},${endOuter.y}
            L${startInner.x},${startInner.y} 
            A${innerRadius},${innerRadius} 0 ${(angleExtent > 180) ? 1 : 0},0 ${endInner.x},${endInner.y} z`;
  };

  return (
    <div>
      <svg
        width="200"
        height="200"
        viewBox="0 0 210 210"
        style={ { transition: 'all 0.3s ease-in-out' } }
      >
        { segmentsData.map((segment, index) => (
          <path
            key={ segment.id }
            d={ createSegmentPath(index, segment.id === activeSegment) }
            fill={ segment.id === activeSegment ? segment.color : 'grey' }
            onMouseEnter={ () => setActiveSegment(segment.id) }
            onClick={ () => setActiveSegment(segment.id) }
            style={ { transition: 'd 0.3s ease' } }
          />
        )) }
        <text x="105" y="110" textAnchor="middle" fill={ textColor } fontSize="18">
          { activeSegment ? segmentsData.find((seg) => seg.id === activeSegment).content : '5 years' }
        </text>
      </svg>
    </div>
  );
}

export default CircleMenu;
