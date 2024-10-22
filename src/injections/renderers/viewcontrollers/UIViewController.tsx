import React from 'react';
import { Renderable } from '../../../types/protocols';
import Renderer from '../views/Renderer';
import RendererMapping from '../views/ViewMapping';
import Screen from '../../../state/injections/Screen';

const UIViewController: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    console.log('UIViewController: ' + renderable);

    // Get the component based on the type
    const Component = RendererMapping.shared?.get(renderable?.display?.presentation?.asScreen?.view?.layout);

    // If the component doesn't exist in the mapping, render nothing
    if (!Component) {
        return null;
    }
    
    const focused = Screen.shared?.focused
    if (focused && renderable) {
        focused(renderable)
    }

    // Render the component with the text prop
    return <Component renderable={renderable} />;
};

export default UIViewController;
