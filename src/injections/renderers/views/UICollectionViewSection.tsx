import React from 'react';
import SectionHeader from './SectionHeader'; // Assuming you have the SectionHeader component
import { Renderable } from '../../../types/protocols';
import Renderer from './Renderer';

const UICollectionViewSection: React.FC<{
    renderable?: Renderable | null;
    columns?: number;
}> = ({ renderable, columns = 4 }) => {
    return (
        <>
            <SectionHeader renderable={renderable} />

            {/* List of TitleRows */}
            {renderable?.children?.map((child, index) => (
                <Renderer key={index} renderable={child} />
            ))}
        </>
    );
};

export default UICollectionViewSection;
