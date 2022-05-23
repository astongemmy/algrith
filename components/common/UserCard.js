import React from 'react'

export default class UserCard extends React.Component {
  constructor() { super() }

  render() {
    return (
      <>
        {this.props.users.map((user) => {
          return (
            <dd key={ user.name } className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <img src={ user.avatar } alt={ user.name } className="w-8 h-8 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy" />
            </dd>
          )
        })}
      </>
    )
  }
}