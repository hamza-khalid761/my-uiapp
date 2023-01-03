
import './App.css';



function App() {
  return (
    <>
      <nav>
        <div className='flex items-center justify-between h-24 mx-24'>
          <div>
            <img src='/images/img.png' alt=''></img>

          </div>

          <div className='bg-gray-300'>
            <input type='text' placeholder='Find The Book You are Looking For'></input>



          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>

          <div className='grid grid-cols-4 gap-3 items-center'>
            <img src='/images/Vector.png' alt=''></img>



            <img src='/images/Vector (2).png' alt=''></img>



            <img src='/images/EN.png' alt=''></img>



            <img src='/images/colletion.png' alt=''></img>
          </div>


        </div>



      </nav>

      <div>
        <div className='flex flex-row justify-center gap-8 mt-6'>
          <a className='font-bold text-sm' href='#'>Home</a>
          <a className='text-gray-300 text-sm' href='#'>Bestseller</a>
          <a className='text-gray-300 text-sm' href='#'>Category</a>
          <a className='text-gray-300 text-sm' href='#'>Community</a>
          <a className='text-gray-300 text-sm' href='#'>Blog</a>
        </div>


      </div>



      <div className='flex flex-col items-start justify-between mx-20'>

        <div className='text-4xl font-bold mt-5'>
          <h1 className='my-5'>Hi! I AM <br></br> ROMEO SAHA</h1>
        </div>



        <div className='text-gray-300 text-sm'>
          <p >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying <br></br> out print, graphic or web designs.</p>
        </div>






        <div className='flex flex-row items-start justify-between my-10'>
          <div className='grid grid-cols-3 gap-10'>
            <div>
              <h1 className='text-lg font-semibold'>5000K+</h1>
              <p className='text-sm'>Users Use This App</p>
            </div>
            <div>
              <h1 className='text-lg font-semibold'>20K+</h1>
              <p className='text-sm'>Users Review <br></br> This App</p>
            </div>
            <div>
              <h1 className='text-lg font-semibold'>1K+</h1>
              <p className='text-sm'>Users Review <br></br> This App</p>
            </div>
          </div>
        </div>

        <div className='flex flex-row items-start justify-between gap-7'>
          <div className='rounded-full bg-cyan-800 px-10 py-3'>
            <button className='text-sm text-white'>Read Now</button>
          </div>
          <div className='flex flex-row items-center justify-between gap-5'>
            <button className='text-sm'>Sign Up</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>

          </div>
        </div>



      </div>
      <section className='lg:mx-10 lg:my-5 md:mx-5 md:flex justify-center align-middle w-[350px] h-[150px]'>
        <div className='lg:flex items-center'>
          <img src='/images/hero_background.png'></img>
        </div>
      </section>


      <div className='flex justify-center align-middle lg:my-20 text-4xl font-extrabold text-blue-900 md:items-center absolute'>
        <h1 className=''>What Can We Do ?</h1>
      </div>
      <div className='flex flex-row items-start justify-between gap-3 mx-36'>
        <div>
          <img className='outline outline-offset-2 outline-1 ' src='/images/Vector (3).png' alt=''></img>
          <h1 className='pt-5 text-lg font-bold'>Hashtag Growth</h1>
          <p className='pt-5 text-sm'>Follow a hashtag growth total <br></br> posts, videos and images.</p>

        </div>
        <div>
          <img className='outline outline-offset-2 outline-1' src='/images/Vector (4).png' alt=''></img>
          <h1 className='pt-5 text-lg font-bold'>Ifluencer</h1>
          <p className='pt-5 text-sm'>Follow a hashtag growth total <br></br> posts, videos and images.</p>
        </div>
        <div>
          <img className='outline outline-offset-2 outline-1' src='/images/Vector (5).png' alt=''></img>
          <h1 className='pt-5 text-lg font-bold'>Most Influental Post</h1>
          <p className='pt-5 text-sm'>Follow a hashtag growth total <br></br> posts, videos and images.</p>
        </div>
        <div>
          <img className='outline outline-offset-2 outline-1' src='/images/Vector (6).png' alt=''></img>
          <h1 className='pt-5 text-lg font-bold'>Most Influental Post</h1>
          <p className='pt-5 text-sm'>Follow a hashtag growth total <br></br> posts, videos and images.</p>
        </div>
      </div>

      <div className='flex flex-row items-center justify-between mx-24 my-16'>
        <div className='rounded-full h-[372px] w-[502px]'>
          <img src='/images/img 3.png' alt=''></img>
        </div>
        <div className='grid grid-rows-2 gap-1 justify-start mx-12'>
          <h1 className='text-3xl font-bold'>Great Digital Product Agency <br></br> since 2016</h1>

          <div className='mt-5'>
            <p className='text-sm'>Our Business Plan is a written document describing a company's core <br></br> business activites, Objectives, and how it plans to achieve its goals. <br></br> Our goal is to provide our client high quality Product with modern idea <br></br> accordingly their budgets and according thir reuirements.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center gap-5 mx-20'>
        <div>
          <h1 className='text-4xl font-bold pt-6 pb-14'>How can we help your <br></br> Business ?</h1>
          <p className='text-sm'>We build readymade websites, mobile applications, and <br></br> elaborate online business services.</p>
        </div>
        <div className='flex flex-col items-end justify-between gap-5 mx-10'>
          <div className='mt-14'>
            <img className='h-[356px] w-[300px]' src='/images/Frame 65.png' alt=''></img>
          </div>
          <div>
            <img src='/images/Frame 65.png' alt=''></img>
          </div>
        </div>
        <div className='flex flex-col items-end justify-between gap-5'>
          <div>
            <img src='/images/Frame 65.png' alt=''></img>
          </div>
          <div className='mb-14'>
            <img src='/images/Frame 65.png' alt=''></img>
          </div>
        </div>

      </div>

      <div className='flex flex-col items-center justify-between gap-5 my-24'>
        <div className='text-4xl text-blue-900 font-bold'>
          <h1>How will it be</h1>
        </div>
        <div className='text-sm text-gray-400'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>

      <div className='flex flex-row items-center justify-between gap-5 -mt-16'>
        <div className='flex flex-col items-center justify-between gap-6 mx-28 pt-24'>
          <div className='outline outline-offset-2 outline-1 outline-cyan-700'>
            <div className='flex flex-row gap-4'>
              <img src='/images/Frame 4176.png' alt=''></img>
              <h1 className='text-lg font-bold'>What is Lorem <br></br> Ipsum?
              </h1>
            </div>
            <p className='pt-5 text-sm'>Lorem Ipsum is simply dummy text of the <br></br> printing and typesetting industry.</p>
          </div>
          <div>
            <div className='flex flex-row gap-4'>
              <img src='/images/Frame 4176.png' alt=''></img>
              <h1 className='text-lg font-bold'>What is Lorem <br></br> Ipsum?
              </h1>
            </div>
            <p className='pt-5 text-sm'>Lorem Ipsum is simply dummy text of the <br></br> printing and typesetting industry.</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-6 pt-24 -ml-48'>
          <div>
            <div className='flex flex-row gap-4'>
              <img src='/images/Frame 4176.png' alt=''></img>
              <h1 className='text-lg font-bold'>What is Lorem <br></br> Ipsum?
              </h1>
            </div>
            <p className='pt-5 text-sm'>Lorem Ipsum is simply dummy text of the <br></br> printing and typesetting industry.</p>
          </div>
          <div>
            <div className='flex flex-row gap-4'>
              <img src='/images/Frame 4176.png' alt=''></img>
              <h1 className='text-lg font-bold'>What is Lorem <br></br> Ipsum?
              </h1>
            </div>
            <p className='pt-5 text-sm'>Lorem Ipsum is simply dummy text of the <br></br> printing and typesetting industry.</p>
          </div>
        </div>
        <div>
          <img className='h-[497px] w-[397px] ml-14' src='/images/Rectangle 58.png' alt=''></img>
        </div>
      </div>

      <div className='grid grid-row-2 bg-blue-800 rounded-b-2xl h-[360px] w-[1240px] mx-12 my-12'>

        <div className='grid grid-row-2 mx-28 my-28'>
          <h1 className='text-4xl text-teal-100'>Grow your brand <br></br>
            presence on social <br></br> media 😍</h1>
          <p className='text-sm text-gray-300 pt-5'>Join with more 1200+ happy customers</p>
          <div className='flex flex-row justify-end relative pr-20 mr-40'>
            <button className='text-white text-sm  rounded-full bg-cyan-800 px-10 py-3'>Sign Up</button>
          </div>
          <div className='grid grid-cols-5 absolute mt-44'>
            <img src='/images/item.png' className='' alt=''></img>
            <img src='/images/item (1).png '></img>
            <img src='/images/item (2).png'></img>
            <img src='/images/item (3).png'></img>
            <img src='/images/item (3).png' ></img>


          </div>
          <div className='flex flex-row items-end'>
            <p className='text-white'>and Others</p>
          </div>

        </div>


      </div>

      <div className='flex flex-col items-center justify-between gap-5 my-24'>
        <div className='text-4xl text-blue-900 font-bold'>
          <h1>What are happy clients say</h1>
        </div>
        <div className='text-sm text-black'>
          <p>Several selected clients, who already believe in our service.</p>
        </div>
      </div>

      <div className='grid grid-cols-3 items-center justify-between mx-5 my-10'>
        <div>
          <img src='/images/image.png' alt=''></img>
        </div>
        <div className='p-11 my-24'>
          <h1 className='text-lg font-bold pb-10'>Matthew Paul</h1>
          <p className='text-sm text-neutral-600'>Perfect, very good job! Thank you for the <br></br> amazing design and work. Really <br></br> impressed with the high quality and quick <br></br> turnaround time. Highly recommend.</p>
        </div>

        <div>

        </div>

      </div>

      <div className='grid grid-cols-5 items-center justify-between lg:mx-5 lg:my-5'>
        <div>
          <img src='/images/image 3.png' alt=''></img>
        </div>
        <div>
          <img src='/images/image 4.png' alt=''></img>
        </div>
        <div>
          <img src='/images/image 5.png' alt=''></img>
        </div>
        <div>
          <img src='/images/image 7.png' alt=''></img>
        </div>
        <div>
          <img src='/images/image 8.png' alt=''></img>
        </div>
      </div>

      {/* <div className=' bg-cyan-700 w-[1320px] h-[612px] mx-5'>
        <div className='flex flex-row items-center justify-center pt-16'>
          <h1 className='text-4xl text-blue-900 font-extrabold'>Frequently ask questions</h1>
        </div>
        <div className='grid grid-row-5 items-center justify-center mx-32 my-28'>
          <div className='pb-10 text-white font-bold'>
            <h1>What is Lorem Ipsum?</h1>
            </div>
            <div className='pb-10 text-white font-bold'>
              <h1>Why do we use it?</h1>
            </div>
            <div className='pb-10 text-white font-bold'>
              <h1>Cover a broad range of intent (transactional, informational, locational, etc.).
              </h1>
            </div>
            <div className='pb-10 text-white font-bold'>
              <h1>25 Of The Best Examples Of FAQ Pages
              </h1>
            </div>
            <div className='pb-10 text-white font-bold'>
              <h1>What should I say frequently asked questions?</h1>
            </div>
          
        </div>
      </div> */}

      <section className='flex items-center mx-10 my-5 md:mx-5 md:my-0' >
        <div>
          <img src='/images/Frame 71.png' alt=''></img>
        </div>
      </section>
      <footer>
        <div  className='grid grid-cols-5 items-center gap-10 mx-10 my-20'>
          <div>
            <strong className='text-2xl'> A+ Studio</strong>
            <p className='text-sm text-gray-400 pt-7'>Leading digital agency with solid <br></br> design and development expertise. We <br></br> build readymade websites, mobile <br></br> applications, and elaborate online <br></br> business services.</p>
          </div>
          <div>
            <strong className='text-2xl'>What We Do</strong>
            <p className='text-sm text-gray-400 pt-7'>Web Design
              App Design
              Social Media Manage
              Market Analysis Project</p>
          </div>
          <div>
            <strong className='text-2xl'>Company</strong>
            <p className='text-sm text-gray-400 pt-7'>About Us
              Career
              Become Investor</p>
          </div>
          <div>
            <strong className='text-2xl'>Support</strong>
            <p className='text-sm text-gray-400 pt-7'>FAQ
              Policy
              Business</p>
          </div>
          <div>
            <strong className='text-2xl'>Contact</strong>
            <p className='text-sm text-gray-400 pt-7'>WhatsApp
              Support 24</p>
          </div>

        </div>
        <div className='flex items-center justify-center'>
          <span className='text-sm text-gray-400'>Copyright 2023</span>
        </div>
      </footer>


      {/* <div className='grid grid-cols-6 items-start justify-between gap-6'>
          <div className='flex flex-col items-end'>
            <h1 className='text-2xl font-bold pt-6'>How can we help your <br></br> Business ?</h1>
            <p className='text-sm'>We build readymade websites, mobile applications, and <br></br> elaborate online business services.</p>
          </div>
          <div>
            <div className='flex'>
          <div className=' outline outline-offset-2 outline-1'>
            <img src='/images/Frame 6836.png' alt=''></img>
            <h1>Business Idea Planning</h1>
            <p>Protocols apart from aengage models, pricing billing</p>
          </div>
          
          <div className=' outline outline-offset-2 outline-1  inline-block mr-2'>
          <img src='/images/Frame 6836.png' alt=''></img>
            <h1>Financial Planning System</h1>
            <p>Protocols apart from aengage models, pricing billing</p>
          </div>
          </div>
          
          <div className='flex flex-row items-end justify-between'>
          <div className=' outline outline-offset-2 outline-1  inline-block mr-2'>
          <img src='/images/Frame 6836.png' alt=''></img>
            <h1>Development Website and App</h1>
            <p>Communication protocols apart from engagement models</p>
          </div>
          
          <div className=' outline outline-offset-2 outline-1'>
          <img src='/images/Frame 6836.png' alt=''></img>
            <h1>Market Analysis Projectp</h1>
            <p>Protocols apart from aengage models, pricing billing</p>
          </div>
          </div>

          </div>
          

        </div> */}




    </>


  );
}

export default App;
