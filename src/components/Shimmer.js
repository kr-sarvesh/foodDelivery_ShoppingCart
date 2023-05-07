import { Link } from "react-router-dom"

const Shimmer =()=>{
    return(
      <div className="container mx-auto flex flex-row flex-wrap px-6">
        {Array(10).fill("").map((x,index)=>
        (<div key = {index} className="container px-5 py-24 mx-auto">
          <div className=" -m-24">
        
          <div className="p-4 flex gap-32  md:ml-28  md:mt-20">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center">
          <div className="p-6">
            <div className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></div>
            <div className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></div>
            <div className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></div>
            <div className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></div>
            <div className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></div>
            <div className="flex items-center flex-wrap">
              <Link className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                </Link>
                <div className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></div>

            </div>
          </div>
        </div>
        </div>
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center">
          <div className="p-6">
            <div className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></div>
            <div className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></div>
            <div className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></div>
            <div className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></div>
            <div className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></div>
            <div className="flex items-center flex-wrap">
              <Link className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                </Link>
                <div className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></div>

            </div>
          </div>
        </div>
        </div>
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center">
          <div className="p-6">
            <div className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></div>
            <div className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></div>
            <div className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></div>
            <div className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></div>
            <div className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></div>
            <div className="flex items-center flex-wrap">
              <Link className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                </Link>
                <div className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></div>

            </div>
          </div>
        </div>
        </div>
        
          </div>
          </div>
          </div>)
        )}
      </div>
    )
  }
export default Shimmer