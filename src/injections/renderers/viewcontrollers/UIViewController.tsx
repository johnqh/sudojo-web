import React from 'react';
import { Renderable } from '../../../types/protocols';
import Renderer from '../views/Renderer';

const UIViewController: React.FC<{ renderable?: Renderable | null }> = ({
  renderable,
}) => {
    return <Renderer renderable={renderable} />;
};

export default UIViewController;
