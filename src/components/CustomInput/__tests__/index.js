import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import CustomInput from '..';
import {TextInput, Text} from 'react-native';

describe('Custom Input', () => {
  it('should render without issues', () => {
    const wrapper = shallow(<CustomInput label="Test" />);

    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render style onFocus', () => {
    const wrapper = shallow(<CustomInput label="Test" />);

    wrapper.find(TextInput).simulate('focus');
    wrapper.update();
    expect(wrapper.find(TextInput).prop('style')).toHaveProperty(
      'backgroundColor',
      '#FFFFFF',
    );
  });

  it('should render style onBlur', () => {
    const wrapper = shallow(<CustomInput label="Test" />);

    wrapper.find(TextInput).simulate('blur');
    wrapper.update();
    expect(wrapper.find(TextInput).prop('style')).toHaveProperty(
      'backgroundColor',
      '#EAEAEB',
    );
  });

  it('should render error', () => {
    const wrapper = shallow(<CustomInput label="Test" />);

    wrapper.setProps({error: 'Error test'});
    wrapper.update();
    expect(wrapper.find(Text).children().contains('Error test')).toBeTruthy();
    // expect(wrapper.find(Text).children).
  });
});
