import React, { useState } from 'react';

const tools = [
  {
    id: 'nextjs',
    label: 'NextJS 13'
  },
  {
    id: 'react',
    label: 'ReactJS 18'
  },
  {
    id: 'redux',
    label: 'Redux Toolkit'
  },
  {
    id: 'the basics',
    label: 'The Basics'
  }
];

const initialToolState = {
  id: '',
  label: ''
};

export default function ToolBelt(props) {
  const { beltColor } = props;
  const [activeTool, setActiveTool] = useState(initialToolState);

  return (
    <div style={ {
      textAlign: 'center'
    } }
    >
      <div style={ {
        display: 'flex',
        height: '30px',
        borderRadius: '16px',
        background: beltColor,
        margin: '10px 0'
      } }
      />
      <div>
        { tools.map((tool) => (
          <button
            key={ tool.id }
            style={ {
              margin: '0 10px',
              fontSize: activeTool.id === tool.id ? '22px' : '20px',
              border: 'none',
              cursor: 'pointer'
            } }
            type="button"
            onClick={ () => setActiveTool(tool) }
            onFocus={ () => setActiveTool(tool) }
            onMouseOver={ () => setActiveTool(tool) }
            onMouseOut={ () => setActiveTool(initialToolState) }
            onBlur={ () => setActiveTool(initialToolState) }
          >
            { tool.label }
          </button>
        )) }
      </div>
      { /* { activeTool.id && ( */ }
      { /*   <div style={ { marginTop: '20px' } }> */ }
      { /*     { activeTool.label } */ }
      { /*   </div> */ }
      { /* ) } */ }
    </div>
  );
}
