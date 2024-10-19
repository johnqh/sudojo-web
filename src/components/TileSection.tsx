import React from 'react';
import { ProfileItem } from '../types';
import GenericTile from './GenericTile';

interface TileSectionProps {
    title: string;
    items: ProfileItem[];
}

const TileSection: React.FC<TileSectionProps> = ({ title, items }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>{title}</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '16px',
                }}
            >
                {items.map((item, index) => (
                    <GenericTile key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default TileSection;
