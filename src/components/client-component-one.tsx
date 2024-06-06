'use client'

import ClientComponentTwo from './client-component-two'
import ServerComponentOne from './server-component-one'

export default function ClientComponentOne() {
  return (
    <>
      <h1>Client Component One</h1>
      <ClientComponentTwo />
      {/* <ServerComponentOne /> */}
    </>
  )
}
