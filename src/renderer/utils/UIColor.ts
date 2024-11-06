type UIColorType = {
    systemBackground: string;
    secondarySystemBackground: string;
    tertiarySystemBackground: string;
    systemGroupedBackground: string;
    secondarySystemGroupedBackground: string;
    tertiarySystemGroupedBackground: string;
    label: string;
    secondaryLabel: string;
    tertiaryLabel: string;
    quaternaryLabel: string;
    placeholderText: string;
    separator: string;
    opaqueSeparator: string;
    systemBlue: string;
    systemGreen: string;
    systemIndigo: string;
    systemOrange: string;
    systemPink: string;
    systemPurple: string;
    systemRed: string;
    systemTeal: string;
    systemYellow: string;
    systemMint: string;
    systemCyan: string;
    systemBrown: string;
    systemGray: string;
    systemGray2: string;
    systemGray3: string;
    systemGray4: string;
    systemGray5: string;
    systemGray6: string;
    clear: string;

    // New Colors
    groupTableViewBackground: string;
    tableViewBackground: string;
    tableCellGroupedBackground: string;
    tableCellBackground: string;
    tableCellBlueText: string;
    link: string;
};

// Light theme colors in RGBA format
const UIColorLight: UIColorType = {
    systemBackground: '#FFFFFF',
    secondarySystemBackground: '#F2F2F7FF',
    tertiarySystemBackground: '#FFFFFFFF',
    systemGroupedBackground: '#F2F2F7FF',
    secondarySystemGroupedBackground: '#FFFFFFFF',
    tertiarySystemGroupedBackground: '#F2F2F7FF',
    label: '#000000FF',
    secondaryLabel: '#3C3C4399',
    tertiaryLabel: '#3C3C434D',
    quaternaryLabel: '#3C3C432E',
    placeholderText: '#3C3C434D',
    separator: '#3C3C434A',
    opaqueSeparator: '#C6C6C8FF',
    systemBlue: '#007AFFFF',
    systemGreen: '#34C759FF',
    systemIndigo: '#5856D6FF',
    systemOrange: '#FF9500FF',
    systemPink: '#FF2D55FF',
    systemPurple: '#AF52DEFF',
    systemRed: '#FF3B30FF',
    systemTeal: '#5AC8FAFF',
    systemYellow: '#FFCC00FF',
    systemMint: '#00C7BEFF',
    systemCyan: '#32ADE6FF',
    systemBrown: '#A2845EFF',
    systemGray: '#8E8E93FF',
    systemGray2: '#AEAEB2FF',
    systemGray3: '#C7C7CCFF',
    systemGray4: '#D1D1D6FF',
    systemGray5: '#E5E5EAFF',
    systemGray6: '#F2F2F7FF',
    clear: '#00000000',
    
    // New Colors
    groupTableViewBackground: '#F2F2F7FF',
    tableViewBackground: '#FFFFFFFF',
    tableCellGroupedBackground: '#FFFFFFFF',
    tableCellBackground: '#FFFFFFFF',
    tableCellBlueText: '#0A60FFFF',
    link: '#0A84FFFF',
};

// Dark theme colors in RGBA format
const UIColorDark: UIColorType = {
    systemBackground: '#000000FF',
    secondarySystemBackground: '#1C1C1EFF',
    tertiarySystemBackground: '#2C2C2EFF',
    systemGroupedBackground: '#000000FF',
    secondarySystemGroupedBackground: '#1C1C1EFF',
    tertiarySystemGroupedBackground: '#2C2C2EFF',
    label: '#FFFFFFFF',
    secondaryLabel: '#EBEBF599',
    tertiaryLabel: '#EBEBF54D',
    quaternaryLabel: '#EBEBF52E',
    placeholderText: '#EBEBF54D',
    separator: '#54545899',
    opaqueSeparator: '#38383AFF',
    systemBlue: '#0A84FFFF',
    systemGreen: '#30D158FF',
    systemIndigo: '#5E5CE6FF',
    systemOrange: '#FF9F0AFF',
    systemPink: '#FF375FFF',
    systemPurple: '#BF5AF2FF',
    systemRed: '#FF453AFF',
    systemTeal: '#64D2FFFF',
    systemYellow: '#FFD60AFF',
    systemMint: '#63E6E2FF',
    systemCyan: '#64D2FFFF',
    systemBrown: '#AC8E68FF',
    systemGray: '#8E8E93FF',
    systemGray2: '#636366FF',
    systemGray3: '#48484AFF',
    systemGray4: '#3A3A3CFF',
    systemGray5: '#2C2C2EFF',
    systemGray6: '#1C1C1EFF',
    clear: '#00000000',

    // New Colors
    groupTableViewBackground: '#000000FF',
    tableViewBackground: '#000000FF',
    tableCellGroupedBackground: '#000000FF',
    tableCellBackground: '#000000FF',
    tableCellBlueText: '#0A60FFFF',
    link: '#0A84FFFF',
};

// Example to switch between light and dark mode
export const UIColor = (isDarkMode: boolean): UIColorType => (isDarkMode ? UIColorDark : UIColorLight);

export default UIColor;