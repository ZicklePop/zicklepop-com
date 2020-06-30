import React from 'react'
import renderer from 'react-test-renderer'
import Logo from '../components/logo'

describe('component - logo', () => {
  it('should render', () => {
    const component = renderer.create(<Logo />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
