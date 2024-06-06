'use client'

import { useState } from 'react'

export default function Dashboard() {
  console.log('dashboard')
  const [first, setfirst] = useState('')
  return (
    <>
      <h1>Dashboard</h1>
      <input value={first} onChange={(e) => setfirst(e.target.value)} />
      <p>Hi, {first}</p>
    </>
  )
}
