function Error() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg   
   text-center max-w-md">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 mx-auto text-red-500 mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}   
   d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118   
   0z" />
          </svg>
          <h2 className="text-2xl font-semibold mb-4">Oops! Something Went Wrong</h2>
          <p className="text-gray-600 mb-6">
            `We are sorry, but an unexpected error occurred. Please try again later.`
          </p>
          <button 
            className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white" 
            onClick={() => window.location.href = '/'}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  export default Error;