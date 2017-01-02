import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Header from './Header'

describe('<Header />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('contains a title component with welp', () => {
    expect(wrapper.find('h1').first().text())
      .to.equal('Welp')
  })

  it('contains a section menu with the title', () => {
    expect(wrapper.find('section').first().text())
      .to.equal('Fullstack.io')
  })
})