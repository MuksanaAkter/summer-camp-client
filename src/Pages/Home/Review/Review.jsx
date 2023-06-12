
const Review = () => {
  return (
    <div className="md:w-9/12 md:mx-auto mx-9">
      <h1 className="text-4xl md:text-5xl text-black mt-36 mb-20 text-center ">Classes Reviews
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-1">
        <div
          className="card card-compact w-80 h-96 bg-base-100 shadow-xl md:mb-0 mb-10"
          data-aos="fade-right"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg?w=360"
              className="w-96 h-96"
              
            />
          </figure>
          <div className="avatar ">
            <div className="w-20 rounded-full mx-auto relative bottom-12 ring  ring-yellow-700 ring-offset-base-100 ring-offset-2">
              <img
                src="https://i0.wp.com/my-thai.org/wp-content/uploads/explore6.png?fit=1024%2C512&ssl=1"
                className=""
              />
            </div>
          </div>
          <div className="card-body relative bottom-10">
            <h2 className="card-title">Sarah Johnson</h2>
            <p>
              Piano Academy is the best place to learn piano! The teacher is
              knowledgeable and provides personalized attention to each student.
              I have learned so much and improved my skills significantly since
              joining the class.
            </p>
          </div>
          <footer className="footer footer-center p-4 bg-base-200 text-base-content">
          
          </footer>
        </div>
        <div
          className="card card-compact w-80 h-96 bg-base-100 shadow-xl md:mb-0 mb-10"
          data-aos="fade-right"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg?w=360"
              className="w-96 h-96"
              alt="Shoes"
            />
          </figure>
          <div className="avatar ">
            <div className="w-20 rounded-full mx-auto relative bottom-12 ring  ring-yellow-700 ring-offset-base-100 ring-offset-2">
              <img
                src="https://thumbs.dreamstime.com/b/handsome-young-man-walking-street-modern-hairstyle-beautiful-guy-outdoor-outside-half-length-187272204.jpg"
                className=""
              />
            </div>
          </div>
          <div className="card-body relative bottom-10">
            <h2 className="card-title">David Thompson</h2>
            <p>
            The vocal training classes at Harmony Music School are exceptional. The instructor is not only talented but also has a deep understanding of vocal techniques. I have gained confidence in my singing abilities..👍
            </p>
          </div>
          <footer className="footer footer-center p-4 bg-base-200 text-base-content">
         
          </footer>
        </div>
        <div
          className="card card-compact w-80 h-96 bg-base-100 shadow-xl md:mb-0 mb-10"
          data-aos="fade-right"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg?w=360"
              className="w-96 h-96"
              alt="Shoes"
            />
          </figure>
          <div className="avatar ">
            <div className="w-20 rounded-full mx-auto relative bottom-12 ring ring-yellow-700 ring-offset-base-100 ring-offset-2">
              <img
                src="https://www.shutterstock.com/image-photo/portrait-trendy-young-man-city-260nw-739072537.jpg"
                className=""
              />
            </div>
          </div>
          <div className="card-body relative bottom-10">
            <h2 className="card-title">John Smith</h2>
            <p>
            I have been taking guitar lessons at Music World for a few months now, and I am extremely satisfied with the progress I have made. The instructor is highly skilled and patient.🔥
            </p>
          </div>
          <footer className="footer footer-center p-4 bg-base-200 text-base-content">
            
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Review;
