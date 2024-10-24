import React from 'react';
import { Renderable } from '../../../types/protocols';
import ViewControllerMapping from './ViewControllerMapping';

const ViewController: React.FC<{ renderable?: Renderable | null }> = ({
  renderable,
}) => {
    console.log("ViewController: " + renderable)
    
    const containerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%', // Full vertical height
  };

    const Component = ViewControllerMapping.shared?.get(renderable?.display?.presentation?.asScreen?.view?.layout);

    if (!Component) {
        return null;
    }

    return <Component renderable={renderable} />;
};

export default ViewController;
