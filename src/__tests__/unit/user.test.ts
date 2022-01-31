const md5 = require('md5')

const userModelLast = require('../../models/userModel')

it('should encrypt user password', async () => {
  const user = await userModelLast.create({
    name: 'Diego',
    email: 'diego@rocketseat.com.br',
    password: '123456',
  })

  const compareHash = await md5.compare('123456', user.password_hash)

  expect(compareHash).toBe(true)
})
