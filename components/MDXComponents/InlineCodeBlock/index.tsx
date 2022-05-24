import * as React from 'react';

const InlineCodeBlock = (props: any) => {
  return (
    <span
      style={{
        fontFamily: 'monospace',
        padding: '0px 3px',
        paddingBottom: '2px',
        borderRadius: '4px',
        backgroundColor: 'rgba(206,206,206,0.4)',
        fontSize: '97%',
      }}
    >
      {props.children}
    </span>
  );
};

export default InlineCodeBlock;
