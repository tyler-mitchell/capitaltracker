import React from 'react';
import { render } from '@testing-library/react-native';

import User from './user';

describe('User', () => {
    it('should render successfully', () => {
        const { container } = render(<User />);
        expect(container).toBeTruthy();
    });
});
