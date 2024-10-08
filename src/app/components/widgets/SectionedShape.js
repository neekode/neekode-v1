import React, { useState, useEffect, useCallback } from 'react';
import { Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../../../constants';

const MotionBox = motion(Heading);

export default function SectionedShape(props) {
  const {
    isMobile,
    isTablet,
    activeSegment,
    setActiveSegment,
    segments,
    shapeColor,
    // textColor,
    shadowColor
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
   * This useEffect determines the type of shape based on the number of segments.
   * It sets the appropriate shape type, angle variable, and initial positioning for the shape.
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
          posX: 125,
          posY: 140
        };
        break;
      case 4:
        newShape = {
          ...shape,
          type: 'square',
          angleVariable: 4,
          posX: 125,
          posY: 115
        };
        break;
      case 5:
        newShape = {
          ...shape,
          type: 'pentagon',
          angleVariable: 2,
          posX: 125,
          posY: 110
        };
        break;
      default:
        break;
      }
      setShape(newShape);
    }
  }, [segments.length]);

  /**
   * useCallback - Evaluate Vertices Coords
   * Takes in number of sides and calculates render coordinates for each vertex.
   * Includes optional offsets for positioning adjustment (used for 3D effect).
   */
  const getPolygonVertices = useCallback((numSides, newRadius, offsetX = 0, offsetY = 0) => {
    const angleStep = (2 * Math.PI) / numSides;
    return Array.from({ length: numSides }, (_, i) => {
      const angle = angleStep * i - Math.PI / shape.angleVariable;
      const x = shape.posX + newRadius * Math.cos(angle) + offsetX;
      const y = shape.posY + newRadius * Math.sin(angle) + offsetY;
      return {
        x,
        y
      };
    });
  }, [shape.angleVariable, shape.posX, shape.posY]);

  /**
   * useCallback - Draw Segment
   * This useCallback creates an SVG path string for each segment of the shape.
   * It uses the vertices calculated by getPolygonVertices and applies any specified offsets.
   * The end point of each path is adjusted with a gap factor to bring the segments closer together.
   */
  const createSegmentPath = useCallback((index, numSides, isActive, offsetX = 0, offsetY = 0) => {
    const vertices = getPolygonVertices(numSides, isActive
      ? shape.expandedRadius
      : shape.radius, offsetX, offsetY);
    const start = vertices[index];
    const nextIndex = (index + 1) % numSides;

    // Adjusted to bring segments closer together
    const gapFactor = 0.83; // Control how close the segments are
    const end = {
      x: start.x + (vertices[nextIndex].x - start.x) * gapFactor,
      y: start.y + (vertices[nextIndex].y - start.y) * gapFactor
    };

    return `M${start.x},${start.y} L${end.x},${end.y}`;
  }, [getPolygonVertices, shape.expandedRadius, shape.radius]);

  return !!shape.type && (
    <svg
      width={ isMobile || isTablet ? 120 : 240 }
      height={ isMobile || isTablet ? 110 : 240 }
      viewBox="0 0 240 220"
      style={ { transition: 'all 0.5s ease-in-out' } }
    >
      { segments.map((segment, index) => (
        <g key={ segment.id }>
          { segment.id !== activeSegment?.id
            ? (
              <path
                d={ createSegmentPath(
                  index,
                  segments.length,
                  segment.id === activeSegment?.id,
                  -5,
                  3
                ) }
                stroke={ shadowColor }
                style={ {
                  transition: 'all .5s ease',
                  filter: segment.id !== activeSegment?.id ? 'drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.2))' : 'none'
                } }
                strokeLinecap="round"
                strokeWidth="16"
                fill="none"
              />
            ) : null }

          <path
            d={ createSegmentPath(
              index,
              segments.length,
              false,
              0,
              0
            ) }
            stroke={ segment.id === activeSegment?.id ? segment.color : shapeColor }
            strokeWidth="16"
            fill="none"
            onMouseEnter={ () => setActiveSegment(segment) }
            onClick={ () => setActiveSegment(segment) }
            style={ {
              transition: 'all 0.5s ease',
              cursor: 'pointer'
            } }
            strokeLinecap="round"
          />
        </g>
      )) }
      <foreignObject
        x={ shape.posX - 30 } // Adjust X position
        y={ shape.posY - 30 } // Adjust Y position
        width="60"
        height="60"
      >
        <MotionBox
          { ...fadeAnimation }
          key={ activeSegment?.id }
          style={ {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          } }
        >
          { activeSegment
            ? segments.find((seg) => seg.id === activeSegment.id)?.icon
            : '' }
        </MotionBox>
      </foreignObject>
    </svg>
  );
}
