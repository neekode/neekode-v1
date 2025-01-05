import React, { useCallback, useState, useEffect, useRef } from 'react';
import { WrapItem } from '@chakra-ui/react';

export default function Timeline({
  isMobile,
  isTablet,
  activeSegment,
  setActiveSegment,
  shapeColor,
  textColor,
  segments
}) {
  const containerRef = useRef(null); // Ref to observe container size
  const [dimensions, setDimensions] = useState({
    width: 950, // Adjusted width for padding
    height: !isMobile ? 200 : 160
  });
  const gap = 8; // Gap between segments
  const {
    width,
    height
  } = dimensions; // Destructure dimensions
  // Calculate spacing dynamically
  const segmentSpacing = (width - gap * (segments.length + 1)) / segments.length;

  useEffect(() => {
    // Resize observer to update dimensions dynamically
    const resizeObserver = new ResizeObserver((entries) => {
      const newDimensions = entries.map((entry) => ({
        width: entry.contentRect.width - 120, // Subtract 120px for padding
        height: !isMobile ? 200 : 160
      }))[0]; // Use the first entry for dimensions
      setDimensions(newDimensions);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  /**
   * Generate the path and details for a specific segment
   */
  const getSegmentDetails = useCallback(
    (index) => {
      const startX = index * (segmentSpacing + gap) + gap;
      const endX = startX + segmentSpacing;
      const controlX = startX + segmentSpacing / 2;
      const controlY = index % 2 === 0 ? height / 5 : (4 * height) / 5;

      return {
        path: `M${startX},${height / 2} Q${controlX},${controlY} ${endX},${height / 2}`,
        startX,
        endX,
        controlX,
        controlY
      };
    },
    [segmentSpacing, gap, height]
  );

  const svgHeight = isMobile || isTablet ? height - 50 : height / 2 + 80;

  return (
    <WrapItem
      width={ isMobile || isTablet ? '100%' : '59%' }
      position="relative"
      ref={ containerRef } // Attach ref to observe the container
    >
      <svg
        width="100%"
        height="100%"
        viewBox={ `0 0 ${width} ${svgHeight}` }
        style={ { transition: 'all 0.5s ease-in-out' } }
      >
        { segments.map((segment, index) => {
          const {
            path,
            startX,
            endX
          } = getSegmentDetails(index);
          const isActive = segment.id === activeSegment?.id;

          return (
            <g
              key={ segment.id }
              onMouseEnter={ () => setActiveSegment(segment) }
              onClick={ () => setActiveSegment(segment) }
              style={ { cursor: 'pointer' } }
            >
              { /* Hoverable Background Rectangle */ }
              <rect
                x={ startX }
                y="0"
                width={ endX - startX + 20 }
                height={ height + 50 } // Ensure rect fills the parent SVG height
                fill="transparent"
                opacity="0.1"
                style={ {
                  transition: 'fill 0.3s ease, opacity 0.3s ease'
                } }
              />

              { /* Foreground Segment Line */ }
              <path
                d={ path }
                stroke={ isActive ? segment.color : shapeColor }
                strokeWidth="6" // Adjust stroke width if needed
                fill="none"
                strokeLinecap="round"
                style={ {
                  transition: 'stroke 0.3s ease, stroke-width 0.3s ease',
                  filter: isActive
                    ? 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3))'
                    : 'drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.2))'
                } }
              />

              { /* Timeline Separator Line */ }
              <rect
                x={ endX }
                y="0"
                width="2"
                height={ height - 32 }
                fill={ shapeColor }
                opacity=".2"
              />

              { /* Foreground Segment Circle */ }
              <circle
                cx={ endX }
                cy={ height / 2 }
                r={ isActive ? 12 : 10 }
                fill={ isActive ? segment.color : '#ffffff' }
                stroke={ isActive ? segment.color : shapeColor }
                strokeWidth="4"
                style={ {
                  transition: 'r 0.3s ease, fill 0.3s ease, stroke 0.3s ease',
                  filter: isActive
                    ? 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3))'
                    : 'drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.2))'
                } }
              />

              { /* Time Label */ }
              <text
                opacity=".4"
                x={ endX }
                y={ isMobile ? height / 2 + 48 : height / 2 + 80 }
                textAnchor="middle"
                fontSize="12px"
                fill={ textColor }
                style={ { fontFamily: 'Arial, sans-serif' } }
              >
                { segment.time }
              </text>
            </g>
          );
        }) }
      </svg>
    </WrapItem>
  );
}
