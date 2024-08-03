import React, { useState, useEffect } from 'react';

export default function SectionedShape(props) {
  const {
    activeSegment,
    setActiveSegment,
    segments,
    shapeColor,
    textColor,
    lineColor
  } = props;
  const [shape, setShape] = useState({
    radius: 100,
    expandedRadius: 105,
    type: '',
    angleVariable: 0,
    posX: 0,
    posY: 0
  });

  /**
   * useEffect - Determine Shape Type
   */
  useEffect(() => {
    if (segments.length) {
      let newShape = {};
      switch (segments.length) {
      case 3:
        newShape = {
          ...shape,
          type: 'triangle',
          angleVariable: 2,
          posX: 105,
          posY: 125
        };
        break;
      case 4:
        newShape = {
          ...shape,
          type: 'square',
          angleVariable: 4,
          posX: 105,
          posY: 105
        };
        break;
      case 5:
        newShape = {
          ...shape,
          type: 'pentagon',
          angleVariable: 2,
          posX: 105,
          posY: 105
        };
        break;
      default:
        break;
      }
      setShape(newShape);
    }
  }, [segments.length]);

  /**
   * useEffect - Reset Active Segment After Timeout
   */
  useEffect(() => {
    let timeoutId;
    if (activeSegment !== null) {
      timeoutId = setTimeout(() => {
        setActiveSegment(null);
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [activeSegment]);

  const getPolygonVertices = (numSides, newRadius) => {
    const angleStep = (2 * Math.PI) / numSides;
    return Array.from({ length: numSides }, (_, i) => {
      const angle = angleStep * i - Math.PI / shape.angleVariable; // Start from the top
      const x = shape.posX + newRadius * Math.cos(angle);
      const y = shape.posY + newRadius * Math.sin(angle);
      return {
        x,
        y
      };
    });
  };

  const createSegmentPath = (index, numSides, isActive) => {
    const vertices = getPolygonVertices(numSides, isActive ? shape.expandedRadius : shape.radius);
    const start = vertices[index];
    const end = vertices[(index + 1) % numSides];
    return `M${start.x},${start.y} L${end.x},${end.y}`;
  };

  return !!shape.type && (
    <div>
      <svg
        width={ 210 }
        height={ 210 }
        viewBox="0 0 220 220"
        style={ { transition: 'all 0.3s ease-in-out' } }
      >
        { segments.map((segment, index) => (
          <g key={ segment.id }>
            <path
              d={ createSegmentPath(index, segments.length, segment.id === activeSegment?.id) }
              stroke={ segment.id === activeSegment?.id ? segment.color : shapeColor }
              strokeWidth="20"
              fill="none"
              onMouseEnter={ () => setActiveSegment(segment) }
              onClick={ () => setActiveSegment(segment) }
              style={ { transition: 'all 0.3s ease' } }
            />
          </g>
        )) }
        { segments.map((segment, i) => (
          <path
            key={ `${segment.id}-segment` }
            d={ createSegmentPath(i, segments.length, false) }
            stroke={ lineColor }
            strokeWidth="2"
            fill="purple"
            vectorEffect="non-scaling-stroke"
          />
        )) }
        <text
          x={ shape.posX }
          y={ shape.posY }
          textAnchor="middle"
          fill={ textColor }
          fontSize={ activeSegment ? 22 : 30 }
        >
          { activeSegment ? segments.find((seg) => seg.id === activeSegment.id)?.innerContent1 : '' }
        </text>
        <text
          x={ shape.posX }
          y={ shape.posY + 30 }
          textAnchor="middle"
          fill={ textColor }
          fontSize={ activeSegment ? 22 : 30 }
        >
          { activeSegment ? segments.find((seg) => seg.id === activeSegment.id)?.innerContent2 : '' }
        </text>
      </svg>
    </div>
  );
}
