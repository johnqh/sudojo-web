import React from 'react';
import SectionHeader from './SectionHeader'; // Assuming you have the SectionHeader component
import { IRenderable } from '../../../types/protocols';
import Renderer from './Renderer';
import { Nullable } from 'Sudojo';

const UICollectionViewSection: React.FC<{
    renderable?: Nullable<IRenderable>;
    columns?: number;
}> = ({ renderable, columns = 4 }) => {
    return (
        <>
            <SectionHeader renderable={renderable} />

            {/* List of TitleRows */}
            {renderable?.view?.withChildren()?.map((child, index) => (
                <Renderer key={index} renderable={child} />
            ))}
        </>
    );
};

export default UICollectionViewSection;
