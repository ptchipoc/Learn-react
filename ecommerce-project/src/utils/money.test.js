import {it, expect, describe} from 'vitest'
import { formatMoney } from './money'

describe('formatMoney', () => {

  it('format 1999 as $19.99', () => {
    expect(formatMoney(1999)).toBe('$19.99');
  })
  
  it('displays 2 decimals', () => {
    expect(formatMoney(100)).toBe('$1.00')
  })

})
