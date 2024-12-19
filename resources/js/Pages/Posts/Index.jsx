import React from 'react'
import { usePage } from '@inertiajs/react'
import './style.css'

export default function Index() {
    const { items,pg } = usePage().props
  return (
    <div>
        <h1>{pg}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum nulla iusto fugit perspiciatis quos sint vero, harum architecto. Porro enim non aperiam tempora incidunt saepe totam nihil ab.</p>

            <table>
                    <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                    <th>ACTION</th>
                    </tr>

                    {items.map(({ id, title, body }) => (
                            <tr>
                                                    <td>{id}</td>
                                                    <td>{title}</td>
                                                    <td>{body}</td>
                                                    <td>Edit|Delete</td>
                            </tr>
                            ))}
            </table>
    </div>
  )
}

