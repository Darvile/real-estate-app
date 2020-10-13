import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { screen, fireEvent } from '@testing-library/react';
import App from '.';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const mockProperties = [{
  id: 1,
  image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg',
  postcode: '3146',
  price: 1230500,
  state: 'VIC',
  status: 'current',
  street: '1 Fake Street',
  suburb: 'Glen Iris',
}, {
  id: 2,
  image: 'https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_960_720.jpg',
  postcode: '3146',
  price: 1230500,
  state: 'VIC',
  status: 'off_market',
  street: '1 Fake Street',
  suburb: 'Glen Iris',
}, {
  id: 3,
  image: 'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg',
  postcode: '3146',
  price: 1230500,
  state: 'VIC',
  status: 'sold',
  street: '1 Fake Street',
  suburb: 'Glen Iris',
}];

describe('Test App user flow', () => {
  it('renders property data', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProperties)
      })
    );

    await act(async () => {
      render(<App />, container);
    });

    const filter = screen.getByTestId('filter-status');
    expect(filter.options.length).toBe(4);

    const properties = screen.getAllByTestId('property-item');
    expect(properties.length).toBe(3);

    fireEvent.change(filter, { target: { value: 'sold' } });
    const options = screen.getAllByTestId('select-option');
    expect(options[3].selected).toBeTruthy();

    const properties2 = screen.getAllByTestId('property-item');
    expect(properties2.length).toBe(1);
  });
});