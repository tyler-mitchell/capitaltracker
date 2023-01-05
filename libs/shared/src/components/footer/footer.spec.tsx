import React from 'react';
import { render } from '@testing-library/react-native';

import Footer from './footer';

describe('Footer', () => {
    it('should render successfully', () => {
        const { container } = render(<Footer />);
        expect(container).toBeTruthy();
    });
});
