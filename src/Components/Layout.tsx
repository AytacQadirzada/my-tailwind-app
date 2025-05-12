import Slider from 'react-slick';
import { FiPhoneCall } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const chefs = [
  {
    name: "Shoo Thar Mien",
    title: "Senior Chef",
    img: "https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Expert/boytwo.svg",
  },
  {
    name: "Shoo Thar Mien",
    title: "Junior Chef",
    img: "https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Expert/girl.png",
  },
  {
    name: "Shoo Thar Mien",
    title: "Junior Chef",
    img: "https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Expert/boyone.svg",
  },
  {
    name: "Shoo Thar Mien",
    title: "Senior Chef",
    img: "https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Expert/boytwo.svg",
  },
  {
    name: "Shoo Thar Mien",
    title: "Junior Chef",
    img: "https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Expert/girl.png",
  },
  {
    name: "Shoo Thar Mien",
    title: "Junior Chef",
    img: "https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Expert/boyone.svg",
  },
];

const ChefCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#311F1B] py-20">
      <div className="max-w-[1200px] mx-auto">
        <Slider {...settings}>
          {chefs.map((chef, index) => (
            <div key={index} className="px-4">
              <div className="w-full h-[400px] mt-[50px] rounded-bl-[120px] rounded-tl-full rounded-tr-full overflow-hidden">
                <img
                  src={chef.img}
                  alt={chef.name}
                  className="w-[300px] h-[450px] object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white font-bold text-lg">{chef.name}</h3>
                <p className="text-[hsla(0,0%,100%,0.5)]">{chef.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Layout = () => {
  return (
        <div>
      <div className="fixed bg-[#374151] text-white px-20 w-[100%] py-9 flex justify-center gap-16 items-center z-50">
      <div className="flex items-center gap-5">
        <img
          alt="logo"
          src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/logo/Logo.svg"
          className="h-15"
          />
        <span className="font-bold text-2xl">Chef's Kitchen.</span>
      </div>

      <div className="flex items-center gap-10 font-semibold text-[hsla(0,0%,100%,0.5)] text-xl">
        <span className="hover:text-white cursor-pointer">Home</span>
        <span className="hover:text-white cursor-pointer">About Us</span>
        <span className="hover:text-white cursor-pointer">Recipe</span>
        <span className="hover:text-white cursor-pointer">Gallery</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <FiPhoneCall className="text-[#e76f51] text-xl" />
          <span className="text-white font-bold text-xl ">+1(909) 235-9814</span>
        </div>

        <div className="flex items-center gap-3">
          <a href="#">

          <button className="bg-[#4b4b54] text-[#e76f51] px-7 py-2.5 rounded-full text-xl font-semibold">
            Sign In
          </button>
          </a>
          <a href="#">
          <button className="bg-[#e76f51] text-white px-7 py-2.5 rounded-full text-xl font-semibold">
            Sign Up
          </button>
          </a>
        </div>
      </div>
    </div>
    <div className="bg-[#374151] w-full h-screen flex items-center justify-center">
      <div className='flex flex-col gap-8'>
      <h1 className='text-7xl text-white w-[600px] font-bold'>Cook anything with the experts</h1>
      <p className='text-lg w-[500px] text-[hsla(0,0%,100%,0.5)]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam</p>
      <div className="flex items-center gap-3">
          <a href="#">
            
          <button className="bg-[#e76f51] text-white px-10 py-4 rounded-full text-xl font-semibold">
          Lets cook 
          </button>
          </a>
          <a href="#">

          <button className="bg-[#4b4b54] text-[#e76f51] px-10 py-4 rounded-full text-xl font-semibold">
            Explore now
          </button>
          </a>
        </div>
      </div>
      <div>
        <img className='w-[600px]' src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/hero/banner-image.png" alt="" />
      </div>
    </div>
    <div className="bg-[#000000]  w-full h-screen flex flex-col pt-[50px] items-center">
        <h3 className='text-[rgb(223,104,83)] text-xl tracking-[8px]'>FEATURES</h3>
      <h2 className='text-[3rem] text-white w-[600px] text-center font-[600]'>Get a many of interesting features.</h2>
      <div className='flex items-center justify-center gap-20'>

        <div className='flex flex-col items-center'>
          <div className='absolute'>
            <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureOne.svg" alt="" />
          </div>
          <div className='relative top-[190px] text-center'>
            <h3 className='text-white text-2xl'>Menu variations</h3>
            <p className='text-[hsla(0,0%,100%,0.5)] text-lg w-[200px]'>Sed ut perspiciatis unde omnis isye natus error</p>
            <a href="#" className='text-[rgb(223,104,83)] text-lg font-semibold'>Learn More &gt;</a>
          </div>
        </div>


        <div className='flex flex-col items-center'>
          <div className='absolute'>
            <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureTwo.svg" alt="" />
          </div>
           <div className='relative top-[190px] text-center'>
            <h3 className='text-white text-2xl'>Cooking warw</h3>
            <p className='text-[hsla(0,0%,100%,0.5)] text-lg w-[200px]'>Sed ut perspiciatis unde omnis isye natus error</p>
            <a href="#" className='text-[rgb(223,104,83)] text-lg font-semibold'>Learn More &gt;</a>
          </div>
        </div>


        <div className='flex flex-col items-center'>
          <div className='absolute'>
            <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureThree.svg" alt="" />
          </div>
          <div className='relative top-[190px] text-center'>
            <h3 className='text-white text-2xl'>Best chef</h3>
            <p className='text-[hsla(0,0%,100%,0.5)] text-lg w-[200px]'>Sed ut perspiciatis unde omnis isye natus error</p>
            <a href="#" className='text-[rgb(223,104,83)] text-lg font-semibold'>Learn More &gt;</a>
          </div>
        </div>



        <div className='flex flex-col items-center'>
          <div className='absolute'>
            <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureFour.svg" alt="" />
          </div>
           <div className='relative top-[190px] text-center'>
            <h3 className='text-white text-2xl'>Fast food</h3>
            <p className='text-[hsla(0,0%,100%,0.5)] text-lg w-[200px]'>Sed ut perspiciatis unde omnis isye natus error</p>
            <a href="#" className='text-[rgb(223,104,83)] text-lg font-semibold'>Learn More &gt;</a>
          </div>
        </div>


      </div>
</div>
<div className="bg-[#000000]  w-full h-[120vh] flex justify-center gap-10">
  <div>
    <img className='w-[600px]' src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/cook/cook.png" alt="" />
  </div>
  <div className='mt-[60px]'>

  <h3 className='text-[rgb(223,104,83)] text-2xl tracking-[8px] font-semibold'>cook with us</h3>
  <h1 className='text-7xl text-white w-[600px] font-bold'>Cook anything with the experts</h1>
  <p className='text-lg w-[500px] text-[hsla(0,0%,100%,0.5)] mb-[40px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem accusantium doloremque laudantium, totam</p>
  <p className='text-lg w-[500px] text-[hsla(0,0%,100%,0.5)]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium....</p>
          <a href="#">

  <button className="bg-[#e76f51] mt-[30px] text-white px-10 py-4 rounded-full text-xl font-semibold">
          Lets cook 
          </button>
          </a>
<div className='ml-[250px] mt-[-60px] w-[445px]'>
  <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/cook/burger.png" alt="" />
</div>
</div>
  </div>
    <div>
      <div className="fixed bg-[#374151] text-white px-20 w-full py-9 flex justify-center gap-16 items-center z-50">
        <div className="flex items-center gap-5">
          <img
            alt="logo"
            src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/logo/Logo.svg"
            className="h-15"
            />
          <span className="font-bold text-2xl">Chef's Kitchen.</span>
        </div>
        <div className="flex items-center gap-10 font-semibold text-[hsla(0,0%,100%,0.5)] text-xl">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="hover:text-white cursor-pointer">About Us</span>
          <span className="hover:text-white cursor-pointer">Recipe</span>
          <span className="hover:text-white cursor-pointer">Gallery</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <FiPhoneCall className="text-[#e76f51] text-xl" />
            <span className="text-white font-bold text-xl">+1(909) 235-9814</span>
          </div>
          <div className="flex items-center gap-3">
          <a href="#">


            <button className="bg-[#4b4b54] text-[#e76f51] px-7 py-2.5 rounded-full text-xl font-semibold">
              Sign In
            </button>
          </a>
          <a href="#">
            <button className="bg-[#e76f51] text-white px-7 py-2.5 rounded-full text-xl font-semibold">
              Sign Up
            </button>
          </a>
          </div>
        </div>
      </div>

      <ChefCarousel />



      <div className="bg-black w-full flex flex-col items-center">
  <h3 className="text-[rgb(223,104,83)] text-xl mt-[80px] tracking-[8px]">Our Gallery</h3>
  <h2 className="text-[3rem] text-white w-[600px] mb-[50px] text-center font-[600]">Gallery of our cooked food.</h2>

  <div className="flex flex-wrap justify-center gap-4 bg-black p-6">
    {[
      { src: "https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Gallery/foodone.jpg", name: "Christmas salad", kcal: 118, price: 17 },
      { src: "https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Gallery/foodthree.jpg", name: "Sauteed Veggies", kcal: 200, price: 22 },
      { src: "https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Gallery/foodtwo.jpg", name: "Salad Bowl", kcal: 150, price: 19 },
      { src: "https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Gallery/foodfour.jpg", name: "Delicious Pizza", kcal: 350, price: 25 },
    ].map((item, index) => (
      <div key={index} className="relative group rounded-lg overflow-hidden w-[600px] h-[700px]">
        <img src={item.src} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end items-center text-white p-4">
          <h3 className="text-2xl font-bold mb-2">Name: {item.name} ({item.kcal} Kcal)</h3>
          <p className="text-xl mb-4">Price: ${item.price}</p>
          <a href="#">
          <button className="bg-[#e76f51] px-6 py-2 rounded-full text-white font-semibold text-lg">Learn More</button>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

      





<div className="bg-black w-full flex justify-center p-8">
  <div className="relative mt-[80px] bg-[#E4694A] rounded-3xl h-[500px] rounded-tr-[50%] w-full max-w-6xl flex items-center justify-between p-10 text-white">
   
    <div className="space-y-6 max-w-md">
      <p className="uppercase text-sm tracking-widest">Newsletter</p>
      <h2 className="text-4xl font-bold leading-tight">Subscribe our newsletter.</h2>
      <div className="flex items-center bg-[#2D2D2D] rounded-full p-2 pr-2">
        <input
          type="email"
          placeholder="@ enter your email-address"
          className="bg-transparent outline-none text-gray-300 px-4 flex-1"
        />
        <a href="#">

        <button className="bg-[#0C0C0C] p-4 rounded-full hover:bg-gray-800 transition">
          ➔
        </button>
        </a>
      </div>
    </div>

    <div className="relative ml-[100px]">
      <img
        src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/soup.svg"
        alt="Soup"
        className="w-[700px] h-[700px] object-contain"
      />
      <img
        src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/lec.svg"
        alt="Lettuce"
        className="absolute bottom-8 left-[400px] w-[400px]"
      />
        <span className="absolute bottom-10 left-8 w-6 h-6 bg-yellow-400 rounded-full"></span>
      <img
        src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/onion.svg"
        alt="Onion"
        className="absolute bottom-0 left-20 w-[300px]"
      />
      <span className="absolute bottom-8 left-32 w-4 h-4 bg-blue-400 rounded-full"></span>
    </div>
  </div>
</div>

<footer className="bg-black text-white py-12 px-8 pt-[150px]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
 
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/logo/Logo.svg" alt="Logo" className="h-10" />
        <span className="font-bold text-2xl">Chef's Kitchen.</span>
      </div>
      <p className="text-gray-400 max-w-sm">
        Open an account in minutes, get full financial control for much longer.
      </p>
      <div className="flex gap-4">
       
        <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full cursor-pointer">
          <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 320 512">
            <path fill="currentColor" d="M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 
            20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 
            236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8z"></path>
          </svg>
        </div>
       
        <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full cursor-pointer">
          <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 448 512">
            <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 
            114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 
            224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 
            74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 
            14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 
            26.8-26.8 26.8 12 26.8 26.8z"></path>
          </svg>
        </div>
   
        <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full cursor-pointer">
          <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 512 512">
            <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 
            318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 
            132.9zm-24.8 373.8h39.1L151.1 88h-42z"></path>
          </svg>
        </div>
      </div>
    </div>

 
    <div className="flex gap-16">
      <div className="flex flex-col gap-4">
        <h4 className="font-bold text-lg">Company</h4>
        <a href="#" className="text-gray-400 hover:text-white">About</a>
        <a href="#" className="text-gray-400 hover:text-white">Careers</a>
        <a href="#" className="text-gray-400 hover:text-white">Mobile</a>
        <a href="#" className="text-gray-400 hover:text-white">Blog</a>
        <a href="#" className="text-gray-400 hover:text-white">How we work?</a>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-bold text-lg">Information</h4>
        <a href="#" className="text-gray-400 hover:text-white">Help/FAQ</a>
        <a href="#" className="text-gray-400 hover:text-white">Press</a>
        <a href="#" className="text-gray-400 hover:text-white">Affiliates</a>
        <a href="#" className="text-gray-400 hover:text-white">Hotel owners</a>
        <a href="#" className="text-gray-400 hover:text-white">Partners</a>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-bold text-lg">More</h4>
        <a href="#" className="text-gray-400 hover:text-white">Home</a>
        <a href="#" className="text-gray-400 hover:text-white">About Us</a>
        <a href="#" className="text-gray-400 hover:text-white">Recipe</a>
        <a href="#" className="text-gray-400 hover:text-white">Gallery</a>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
    <p>@2025 – Chef's Kitchen. Distributed By ThemeWagon and Developed by GetNextjsTemplates</p>
    <div className="flex gap-4 mt-4 md:mt-0">
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <span>|</span>
      <a href="#" className="hover:text-white">Terms & Conditions</a>
    </div>
  </div>
</footer>


    </div>
            </div>
  );
};

export default Layout;
