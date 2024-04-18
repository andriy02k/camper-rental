import React from 'react'

const Form = ({handleSubmit, handleChange, searchQuery}) => {
  return (
    <form className='p-16 flex justify-center' onSubmit={handleSubmit}>
				<input
          name='search'
          type='text'
          className='border shadow-md p-2 rounded-l border-grey-500'
          value={searchQuery}
          onChange={handleChange}
				/>
			<button type='submit' className='bg-blue-500 text-white p-2 rounded-r'>
				Search
			</button>
		</form>
  )
}

export default Form