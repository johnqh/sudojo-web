import React from 'react';
import { IRenderable } from '../../../types/protocols';
import RendererMapping from './ViewMapping';
import { Nullable } from 'Sudojo';

const Renderer: React.FC<{ renderable?: Nullable<IRenderable> }> = ({
  renderable,
}) => {
    // Get the component based on the type
    const Component = RendererMapping.shared?.get(renderable?.view?.layout);

    // If the component doesn't exist in the mapping, render nothing
    if (!Component) {
        return null;
    }

    // Render the component with the text prop
    return <Component renderable={renderable} />;
};

export default Renderer;
