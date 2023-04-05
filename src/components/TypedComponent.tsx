import React from 'react';
import Typed from 'typed.js';

const TypedComponent: React.FC = () => {
    // Ref to hold the Typed instance
    const typedRef = React.useRef<Typed | null>(null);
  
    // Use React's useEffect hook to initialize the Typed instance
    React.useEffect(() => {
      // Define the options for the Typed instance
      const options = {
        strings: ['Youtuber', 'UI/UX Designer','Affiliation Marketer','Blogger','Front-End Developer','Back-End Developer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      };
  
      // Create a new Typed instance with the options
      typedRef.current = new Typed('#typed-element', options);
  
      // Clean up the Typed instance when the component is unmounted
      return () => {
        if (typedRef.current) {
          typedRef.current.destroy();
          typedRef.current = null;
        }
      };
    }, []);
  
    // Render the element that will display the typed text
    return (
      <div>
        <span id="typed-element" />
      </div>
    );
  };
  
  export default TypedComponent;