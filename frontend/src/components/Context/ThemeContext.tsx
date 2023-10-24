import React from 'react';
import { ToggleType } from '../../hooks/useToggle';

export const ThemeContext = React.createContext<ToggleType>({
    state: true,
    off: function (): void {
        throw new Error('Function not implemented.');
    },
    on: function (): void {
        throw new Error('Function not implemented.');
    },
    toggle: function (): void {
        throw new Error('Function not implemented.');
    }
});
