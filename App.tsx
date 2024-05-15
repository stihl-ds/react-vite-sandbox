import { useState } from 'react';
import { DSButton, DSText } from '@stihl-design-system/components';


export const App = () : JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <>
      
        <DSButton onClick={() => setCount((count) => count + 1)} variant="highlight">
          count is {count}
        </DSButton>

        <DSText>
          Place your reproduction code here.
        </DSText>
      </>
  );
}

