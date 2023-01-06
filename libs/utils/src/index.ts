import { act, waitFor } from '@testing-library/react-native';

export const log = (...args: unknown[]) => {
    if (process.env['NODE_ENV'] !== 'production') {
        console.log(...args);
    }
};

export const fixTestingConsoleError = async () => await act(() => waitFor(() => 0));
