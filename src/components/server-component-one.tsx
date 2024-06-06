import ClientComponentOne from './client-component-one'
import ServerComponentTwo from './server-component-two'

export default function ServerComponentOne() {
  return (
    <>
      <h1>Server Component One</h1>
      <ServerComponentTwo />
      {/* <ClientComponentOne /> */}
    </>
  )
}
