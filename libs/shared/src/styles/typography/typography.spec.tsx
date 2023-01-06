import React from 'react';
import { render } from '@testing-library/react-native';

import * as Typography from './typography';

describe('Typography', () => {
    it('should render p successfully', () => {
        const { container } = render(<Typography.P />);
        expect(container).toBeTruthy();
    });

    it('should render h1 successfully', () => {
        const { container } = render(<Typography.H1 />);
        expect(container).toBeTruthy();
    });

    it('should render a successfully', () => {
        const { container } = render(<Typography.A />);
        expect(container).toBeTruthy();
    });

    it('should render text successfully', () => {
        const { container } = render(<Typography.Text />);
        expect(container).toBeTruthy();
    });

    it('should render textlink successfully', () => {
        const { container } = render(
            <Typography.TextLink href="/user/fernando">Regular Link</Typography.TextLink>
        );
        expect(container).toBeTruthy();
    });
});
