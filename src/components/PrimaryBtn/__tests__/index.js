import React from 'react';

import renderer from 'react-test-renderer';
import PrimaryBtn from '../index';
import {View, Text} from 'react-native';
import {shallow} from 'enzyme';

describe('Primary Button', () => {
  it('should render without issues', () => {
    const component = renderer.create(<PrimaryBtn />);
    const instance = component.root;

    expect(
      instance.findAll((comp) => comp.props.testID === 'PrimaryBtn').length,
    ).toBeGreaterThanOrEqual(1);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should be call onPress event', () => {
    const result = 'I was Pressed';
    const mockFn = jest.fn(() => result);
    const component = renderer.create(<PrimaryBtn onPress={mockFn} />);

    expect(component.root.props.onPress).not.toHaveBeenCalled();

    component.root.props.onPress();

    expect(component.root.props.onPress.mock.calls.length).toBe(1);
    expect(component.root.props.onPress()).toBe(result);
  });

  it('should not call onPress event when loading is true', () => {
    const result = 'I was pressed';
    const mockFn = jest.fn(() => result);

    const wrapper = shallow(<PrimaryBtn isLoading={false} onPress={mockFn} />);

    wrapper.setProps({isLoading: true});
    expect(wrapper.props('isLoading')).toBeTruthy();
    wrapper.simulate('press');
    expect(mockFn.mock.calls.length).toBe(0);
  });

  it('should be Loading... text when isLoading === true', () => {
    const result = 'I was pressed';

    const mockFn = jest.fn(() => result);

    const wrapper = shallow(<PrimaryBtn isLoading={false} onPress={mockFn} />);
    wrapper.setProps({isLoading: true});
    wrapper.update();
    expect(wrapper.props('isLoading')).toBeTruthy();
    expect(wrapper.contains('Loading...')).toBeTruthy();
  });

  it('should have transparent styles when transparent is true', () => {
    const transparentContainer = {
      width: '100%',
      height: 50,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    };

    const transparentTitle = {
      color: '#74B3CE',
    };

    const wrapper = shallow(<PrimaryBtn transparent />);
    expect(wrapper.children(View).props('style').style).toMatchObject(
      transparentContainer,
    );

    expect(
      wrapper.children(View).children(Text).props('style').style,
    ).toMatchObject(transparentTitle);
  });
});
