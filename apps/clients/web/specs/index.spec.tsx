import React from 'react';
import { render } from '@testing-library/react-native';
import Index from '../pages/index';

describe('Index', () => {
    it('should render successfully', () => {
        const { container } = render(<Index />);
        expect(container).toBeTruthy();
    });
});
