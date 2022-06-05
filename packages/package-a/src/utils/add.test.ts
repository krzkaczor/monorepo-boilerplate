import { expect } from 'earljs'

import { add } from './add'

describe('test', () => {
  it('works', () => {
    expect(add(2, 2)).toEqual(4)
  })
})
