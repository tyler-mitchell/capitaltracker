import * as utils from './utils';

jest.mock('./utils', () => {
    return {
        log: jest.fn(),
    };
});

describe('utils', () => {
    it('should work', () => {
        expect(utils).toBeDefined();
    });
    it('should call log', () => {
        utils.log();
        expect(utils.log).toHaveBeenCalledTimes(1);
    });
});
