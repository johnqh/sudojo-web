import React from 'react';
import { Renderable } from '../../../types/protocols';
import RendererMapping from './ViewMapping';

const Renderer: React.FC<{ renderable?: Renderable | null }> = ({
  renderable,
}) => {
    // Get the component based on the type
    const Component = RendererMapping.shared?.get(renderable?.display?.presentation?.asItem?.layout);

    // If the component doesn't exist in the mapping, render nothing
    if (!Component) {
        return null;
    }

    // Render the component with the text prop
    return <Component renderable={renderable} />;
};

export default Renderer;
