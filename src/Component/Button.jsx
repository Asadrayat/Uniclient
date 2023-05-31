
const Button = (props) => {
  return (
    <button className='bg-gradient-to-r text-lg font-semibold text-gray-50 from-blue-700 to-purple-500 font-[Inter] py-4 px-5 rounded-lg md:ml-8 hover:bg-indigo-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button