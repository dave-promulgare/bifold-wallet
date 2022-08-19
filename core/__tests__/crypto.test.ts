import { hashPIN } from '../App/utils/crypto'

describe('Crypto Utils', () => {
  test('The correct argon2i hash is returned', async () => {
    const pin = '123456'
    const salt = 'abc123'
    const hash = await hashPIN(pin, salt)

    expect(hash).toBe('1234567890')
  })
})
