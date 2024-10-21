import React from 'react';
import { Renderable } from '../../../types/protocols';
import ViewControllerMapping from './ViewControllerMapping';

const ViewController: React.FC<{ renderable?: Renderable | null }> = ({
  renderable,
}) => {
    // Get the component based on the type
    const Component = ViewControllerMapping.shared?.get(renderable?.display?.presentation?.asScreen?.view?.layout);

    // If the component doesn't exist in the mapping, render nothing
    if (!Component) {
        return null;
    }

    // Render the component with the text prop
    return <Component renderable={renderable} />;
};

export default ViewController;
