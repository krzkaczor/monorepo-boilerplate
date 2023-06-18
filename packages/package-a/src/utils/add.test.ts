import { expect } from 'earl'

import { add } from './add'

describe('test', () => {
  it('works', () => {
    expect(add(2, 2)).toEqual(4)
  })
})
