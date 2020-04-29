import React from 'react';
import { styled } from '@storybook/theming';
import { css } from "@storybook/theming";

export function FontSample (props) {
  const style = {...props.styles};
  return <div style={style}>{props.text}</div>;
}

export function FontSamples (props) {
  return props.samples.map((sample, index) =>
    <FontSample key={index} {...sample} />
  )
}

/* *
* Display a square div of a given size.
*
* Usage: <SwatchSquare size={'16px'} />
*
* @class SwatchSquare
*/
const SwatchSquare = styled.div`
  /**
    The height/width of the square.
 
    @property size
    @type {String}
  */
  ${props =>
    props.size &&
    css`
      width: ${props.size};
      height: ${props.size};
    `}
`;

// A styled square to demonstrate spacing value
export const SpacingSwatch = styled(SwatchSquare)`
  background-color: aliceblue;
  border: 1px solid steelblue;
`;




// To match the swatches in figma for color and border
const SwatchLabel = styled.div({
  fontWeight: 'bold',
  fontSize: '14.222px',
  lineHeight: '20px',
})
const SwatchDetails = styled.div({
  fontSize: '14.222px',
  lineHeight: '20px',
})

// TEST SWATCH RED ONLY
export function ColorSwatch(props) { 
  return <div>
    <SwatchSquare style={{backgroundColor: 'red'}} /> 
    <SwatchLabel>RED</SwatchLabel>
    <SwatchSquare>#ff0000</SwatchSquare>
  </div>
}