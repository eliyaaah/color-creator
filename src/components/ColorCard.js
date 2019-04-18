import React from 'react';

function ColorCard(props)	{
 return (
    <div 
        className="color-card"
        style = {{ 
        	backgroundColor: `#${props.background}`,
            color: `#${props.foreground}`
        }}
        >
          <h2>{ props.name }</h2>
          <h3>{ props.foreground }</h3>
          <h3>{ props.background }</h3>
        </div>
      );
}

export default ColorCard;