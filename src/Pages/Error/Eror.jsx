import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
          
           <section className=''>
              <div className='container  mx-auto '>
               <div className="flex justify-center mt-10">
               <img style={{height:"500px"}} className="shadow-lg" src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" />
               </div>
                <div className='text-center'>
                  <h2 className=''>
                    
                  </h2>
                  <p className='text-2xl font-semibold md:text-3xl mb-8'>
                  
                  </p>
                  <Link
                    to='/'
                    className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
                  >
                    Back to homepage
                  </Link>
                </div>
              </div>
            </section> 
        </div>
    );
};

export default Error;