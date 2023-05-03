export default function SquareBTN({ children }) {
  return (
    <button className='mBTN font-medium rounded-lg group md:p-5 p-3 text-white bg-gray-700 md:text-lg text-xs capitalize'>
      {children}
    </button>
  );
}
