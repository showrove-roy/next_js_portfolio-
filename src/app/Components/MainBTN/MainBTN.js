export default function MainBTN({ children }) {
  return (
    <button className='mBTN font-medium rounded-lg group px-5 py-2 text-white bg-gray-700 lg:text-lg text-sm capitalize'>
      {children}
    </button>
  );
}
