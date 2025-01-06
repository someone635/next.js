import { Suspense } from 'react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

async function LoadData(props) {
  await fetch('https://next-data-api-endpoint.vercel.app/api/random?b').then(
    (res) => res.text()
  )
  return (
    <>
      {props.children}
      <div>Got API Response </div>
    </>
  )
}

export default async function Layout(props) {
  return (
    <>
      <div>
        <Link href={`/`} className="text-blue-500">
          Home Page
        </Link>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <LoadData>{props.children}</LoadData>
      </Suspense>
    </>
  )
}
