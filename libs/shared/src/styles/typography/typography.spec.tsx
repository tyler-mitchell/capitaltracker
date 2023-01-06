import React from 'react';
import { render } from '@testing-library/react-native';

import Typography from './typography';

describe('Typography', () => {
    it('should render successfully', () => {
        const { container } = render(<Typography />);
        expect(container).toBeTruthy();
    });
});
