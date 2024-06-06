import ClientComponentOne from '@/components/client-component-one'
import ServerComponentOne from '@/components/server-component-one'

export default function Interleave() {
  return (
    <>
      <ServerComponentOne />
      <ClientComponentOne />
    </>
  )
}
