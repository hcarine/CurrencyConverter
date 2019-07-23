import {getCurrencyOptions,currencies} from './Utils'

describe('As a Developer I need a file with common funcitions to be user in all the project', () => {
    it('if  the user change the current currency, should not be possible change it on the new currency', () => {
        expect(getCurrencyOptions("USD").length).toBe(currencies.length)
    });
    it('if the user not have select the current currency, should be show all possibily currency change', () => {
        expect(getCurrencyOptions().length).toBe(currencies.length)
    });
})
