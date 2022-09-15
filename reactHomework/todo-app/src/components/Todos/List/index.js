import React from 'react'

function List() {
    return (
        <div>
            <input className='toggle-all' type={'checkbox'} />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className='todo-list'>
                <li className='completed'>
                    <div className='view'>
                        <input className='toggle' type='checkbox' />
                        <label>Taste JavaScript</label>
                        <button className='destroy'></button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default List;