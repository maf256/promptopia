'use client'
import { SessionProvider } from 'next-auth/react'

const Provider = ({ childeren, session }) => {
  return (
    <SessionProvider session={session}>
      {childeren}
    </SessionProvider>
  )
}

export default Provider