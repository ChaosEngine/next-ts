import * as React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

type ListDetailProps = {
  item: User,
  prev?: User,
  next?: User
}

const ListDetail = ({ item: user, prev, next }: ListDetailProps) => (
  <>
    <div>
      <h1>Detail for {user.name}</h1>
      <p>ID: {user.id}</p>
    </div>

    {prev !== undefined ? <Link href={`/users/${prev.id}`}>Prev</Link> : "Prev"}
    &nbsp;|&nbsp;
    {next !== undefined ? <Link href={`/users/${next.id}`}>Next</Link> : "Next"}
  </>
)

export default ListDetail
