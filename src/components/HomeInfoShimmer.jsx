const HomeInfoShimmer =  () => {
    return (
        <div className="pt-18 sm:pt-20 px-5 sm:px-6 lg:px-10 max-w-3xl mx-auto flex flex-col gap-4 min-h-screen animate-pulse">
    
    
          <div className="overflow-hidden rounded-3xl bg-white/10">
            <div className="w-full h-[250px] md:h-[350px] bg-white/10"></div>
          </div>
    
        
          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/10" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/10" />
          </div>
    
        
          <div className="flex flex-col items-center gap-3">
    
            <div className="h-4 w-40 rounded bg-white/10"></div>
    
            <div className="h-6 w-52 rounded bg-white/10"></div>
    
            <div className="h-10 w-36 rounded-2xl bg-white/10"></div>
    
          </div>
    
        
          <div className="flex flex-col gap-2 items-center">
            <div className="h-4 w-full rounded bg-white/10"></div>
            <div className="h-4 w-[90%] rounded bg-white/10"></div>
            <div className="h-4 w-[70%] rounded bg-white/10"></div>
          </div>
    
        
          <div className="h-px w-full bg-white/10"></div>
    
        
          <div className="flex flex-col gap-5 items-center">
    
            <div className="h-5 w-28 rounded bg-white/10"></div>
    
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-8">
    
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10"></div>
    
                    <div className="h-3 w-16 rounded bg-white/10"></div>
                  </div>
                ))}
            </div>
          </div>
          
          <div className="mt-auto">
    
            <div className="h-px w-full bg-white/10"></div>
    
            <div className="flex justify-between items-center py-3">
    
              <div className="h-6 w-24 rounded bg-white/10"></div>
    
              <div className="h-11 w-28 rounded-lg bg-white/10"></div>
    
            </div>
          </div>
        </div>
      )
}

export default HomeInfoShimmer 