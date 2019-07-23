import React from 'react';
import { shallow } from 'enzyme';
import RatesResult from './RatesResult';

describe('As a user i want to see my many converted', () => {
    const props={
        many:0,
     rates:0
    }
   
const wrapper = shallow(<RatesResult {...props}/>);
    it('Check if the component is mounted', () => {
        expect(wrapper).not.toBe(undefined)
    });
    it('Check is the maney is rendered right', () => {
        console.log(wrapper.debug())
        expect(wrapper).toEqual(0)
    });
})
