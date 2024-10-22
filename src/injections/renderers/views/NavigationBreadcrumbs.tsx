import React from 'react';
import { Renderable } from '../../../types/protocols';
import Sudojo from 'Sudojo';
import { UIDevice } from '../../utils/UIDevice';

const NavigationBreadcrumbs: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    const items = renderable?.breadcrumbs();
    if (!items) {
        return null
    }

    const handleClick = (renderable?: Renderable | null) => {
        Sudojo.com.sudobility.sudokuschool.statemanager.AppState.Companion.instance?.navigate(
            renderable
        );
    };
    const containerStyle: React.CSSProperties = {
        height: UIDevice.isIOSOrIPad() ? '44px' : '48px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        backgroundColor: '#f0f0f0',
        width: '100%',
    };

    return (
        <div style={containerStyle}>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={`breadcrumb-item ${
                                index === items.length - 1 ? 'active' : ''
                            }`}
                            aria-current={
                                index === items.length - 1 ? 'page' : undefined
                            }
                        >
                            {index === items.length - 1 ? (
                                item?.display?.labels?.title?.text
                            ) : (
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(item);
                                    }}
                                >
                                    {item?.display?.labels?.title?.text}
                                </a>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default NavigationBreadcrumbs;
