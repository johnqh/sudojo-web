import React from 'react';
import { IRenderable } from '../../../types/protocols';
import { Nullable } from 'Sudojo';
import ViewMapping from '../ViewMapping';

const Renderer: React.FC<{ renderable?: Nullable<IRenderable>; isDarkMode: boolean; }> = ({
  renderable, isDarkMode
}) => {
    // Get the component based on the type
    const Component = ViewMapping.shared?.get(renderable?.view?.layout);

    // If the component doesn't exist in the mapping, render nothing
    if (!Component) {
        return null;
    }

    // Render the component with the text prop
    return <Component renderable={renderable} isDarkMode={isDarkMode} />;
};

export default Renderer;
