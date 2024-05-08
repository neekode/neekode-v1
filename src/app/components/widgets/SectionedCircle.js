import React, { useState } from 'react';

/**
 * TODO:
 */
export default function SectionedCircle(props) {
  const {
    segments,
    ringColor,
    textColor
  } = props;
  const [activeSegment, setActiveSegment] = useState(null);

  const outerRadius = 100; // Default outer radius
  const innerRadius = 80; // Inner radius (hollow part)
  const expandedRadius = 105; // Expanded radius for the active segment
  const totalValue = segments.reduce((acc, cur) => acc + cur.value, 0); // Total of all values

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
    const startAngle = segments.slice(0, index)
      .reduce((acc, cur) => acc + (cur.value / totalValue) * 360, 0);
    const angleExtent = (segments[index].value / totalValue) * 360;
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
        { segments.map((segment, index) => (
          <path
            key={ segment.id }
            d={ createSegmentPath(index, segment.id === activeSegment) }
            fill={ segment.id === activeSegment ? segment.color : ringColor }
            onMouseEnter={ () => setActiveSegment(segment.id) }
            onClick={ () => setActiveSegment(segment.id) }
            style={ { transition: 'd 0.3s ease' } }
          />
        )) }
        <text
          x="105"
          y="95"
          textAnchor="middle"
          fill={ textColor }
          fontSize={ activeSegment ? 22 : 30 }
        >
          { activeSegment ? segments.find((seg) => seg.id === activeSegment).content1 : '5' }
        </text>
        <text
          x="105"
          y="125"
          textAnchor="middle"
          fill={ textColor }
          fontSize={ activeSegment ? 22 : 30 }
        >
          { activeSegment ? segments.find((seg) => seg.id === activeSegment).content2 : 'years' }
        </text>
      </svg>
    </div>
  );
}
