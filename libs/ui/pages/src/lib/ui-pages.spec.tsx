import { render } from '@testing-library/react';

import UiPages from './ui-pages';

describe('UiPages', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<UiPages />);
        expect(baseElement).toBeTruthy();
    });
});
