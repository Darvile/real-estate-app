import React from 'react';
import { mount } from 'enzyme';
import Select from '.';

it('should select correct value', () => {
  const onChange = jest.fn();
  const props = {
    options: ['Dan', 'Joe', 'Carl'],
    value: 'Carl',
    onChange,
  };

  const wrapper = mount(<Select {...props} onChange={jest.fn()} />);
  expect(wrapper.find('select').props().value).toBe('Carl');
});
