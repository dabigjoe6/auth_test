import React from 'react';
import {Text} from 'react-native';
import renderer from 'react-test-renderer';

import Container from '../index';

describe('Container component', () => {
  const child = <Text>Custom Child</Text>;

  it('should render without issues', () => {
    const component = renderer.create(<Container>{child}</Container>);
    const instance = component.root;
    expect(
      instance.findAll(
        (comp) => comp.props.testID === 'Container' && comp.type === 'View',
      ).length,
    ).toBe(1);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render title', () => {
    const component = renderer.create(
      <Container title="Test title">{child}</Container>,
    );
    const instance = component.root;
    const viewInstance = instance.findAll(
      (comp) => comp.props.testID === 'Container' && comp.type === 'View',
    )[0];

    const text = viewInstance.findAll(
      (comp) => comp.props.testId === 'ContainerTitle' && comp.type === 'Text',
    )[0];

    expect(text.children).toEqual([instance.props.title]);
  });
});
