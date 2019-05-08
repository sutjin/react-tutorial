import React from 'react';
import Home from './Home.jsx';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<Home />', () => {
  it('renders <Home /> container correctly', () => {
    const tree = renderer
      .create(
        <Home />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Home with <p> for content', () => {
    const tree = renderer
      .create(
        <Home
          text="Nice to meet you"
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should increase the state count by one', () => {
    const wrapper = shallow(<Home />);
    // verify initial state
    expect(wrapper.state("count")).toEqual(0);
    // "click" it once and see if value increase
    wrapper.find('button').simulate('click');
    expect(wrapper.state("count")).toEqual(1);
  });

  it("should trigger hover function on hover", () => {
    const hoverFunction = jest.fn(), // Mock function that we can trigger
      wrapper = shallow(<Home function={hoverFunction}/>);

    wrapper.find('div.test_enter').simulate('mouseenter');
    // verify that the mocked function has been triggered
    expect(hoverFunction).toHaveBeenCalled();
  });
});
