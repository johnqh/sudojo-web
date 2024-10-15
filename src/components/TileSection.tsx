// src/components/TileSection.tsx

import React from 'react';
import { ProfileItem } from '../types';
import Tile from './Tile';

interface TileSectionProps {
  title: string;
  items: ProfileItem[];
}

const TileSection: React.FC<TileSectionProps> = ({ title, items }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {items.map((item, index) => (
          <Tile key={index} image={item.image} title={item.title} subtext={item.subtext} />
        ))}
      </div>
    </div>
  );
};

export default TileSection;

// Fix: Add this empty export statement to treat the file as a module
export {};