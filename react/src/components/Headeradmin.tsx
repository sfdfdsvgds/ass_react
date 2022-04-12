import React from 'react'

type Props = {}

const Headeradmin = (props: Props) => {
  return (
    <div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Much longer nav link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  )
}

export default Headeradmin