import { useState, useCallback } from "react";

export type ToggleType = {
    state: boolean;
    off: () => void;
    on: () => void;
    toggle: () => void;
}
export const useToggle = (initialState: boolean): ToggleType => {
    const [state, setState] = useState<boolean>(initialState);

    const off = useCallback(() => setState(false), []);
    const on = useCallback(() => setState(true), []);
    const toggle = useCallback(() => setState(prev => !prev), []);

    return { state, off, on, toggle };
};
