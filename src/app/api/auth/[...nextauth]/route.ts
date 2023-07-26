import NextAuth from 'next-auth'
import { options } from './options'
import User from '../../../models/user'

const handler = NextAuth(options)

export { handler as GET, handler as POST }