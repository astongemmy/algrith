export default function Grid() {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6 xl:gap-x-8">
      
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        Grid One
      </div>
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        Grid Two
      </div>
      
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        Grid Three
      </div>

      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-144 lg:aspect-none">
        Grid Four
      </div>
      
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-144 lg:aspect-none">
        Grid Four
      </div>
      
    </div>
  )
}