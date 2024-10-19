import React from 'react';
import { ProfileItem } from '../types';
import Tile from './Tile';
import CenteredTile from './CenteredTile';

interface GenericTileProps {
    item: ProfileItem;
}

const GenericTile: React.FC<GenericTileProps> = ({ item }) => {
    return item.image ? (
        <CenteredTile
            image={item.image}
            title={item.title}
            subtext={item.subtext}
        />
    ) : (
        <Tile image={item.image} title={item.title} subtext={item.subtext} />
    );
};

export default GenericTile;
