import { useEffect, useRef, useState } from 'react'
import './App.css'
import telegramIcon from '../src/assets/icons/TelegramIcon.svg'
import githubIcon from '../src/assets/icons/GithubIcon.svg'
import arrowdownIcon from '../src/assets/icons/ArrowdownIcon.svg'
import DoneIcon from '../src/assets/icons/DoneIcon.svg'
import myImage from '../src/assets/profiles/myimage.png'
import { Particles } from './components/ui/particles'
import emailjs from '@emailjs/browser'

function App() {
  const form = useRef();
  const [isScrollDown, setIsScrollDown] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isalertMessage, setIsAlertMessage] = useState(false);
  const [isPopup, setIsPopUp] = useState(false);
  const [project, setProject] = useState({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";

    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    }
  }, [])


  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "Tailwind CSS",
    "Angular(TS)",
    "React(JSX)",
    "C#",
    "ASP.NET",
    "PHP",
    "Laravel",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
  ]

  const projects = [
    {
      id: 1,
      image: '/images/PacificNetworksINCImg.png',
      title: "PacificNetworksINC",
      description: "A team project developed during my training at Simpaz, building a full website using HTML, CSS, JavaScript and JQuery. ",
      techs: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      source: "https://github.com/seanghorchheat1222/Pacificnetworksinc"
    },
    {
      id: 2,
      image: '/images/StudentCrudImg.png',
      title: "Student Crud Operation",
      description: "A small CRUD application built with HTML, CSS and JavaScript, featuring Add, Copy, Edit, Update and Delete student with storing data on Local Storage.",
      techs: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      source: "https://github.com/seanghorchheat1222/Student-Crud"
    },
    {
      id: 3,
      image: '/images/EmployeelistImg.png',
      title: "Employee List",
      description: "A small CRUD application built with Angular(TS) Framework with TypeScript, featuring Add, Copy, Edit, Update and Delete employee with storing data on Local Storage.",
      techs: [
        "Angular(TS)",
        "Bootstrap",
      ],
      source: "https://github.com/seanghorchheat1222/Employee-list"
    },
    {
      id: 4,
      image: '/images/TodoAppImg.png',
      title: "Todo App",
      description: "This is TodoApp built with React(JSX) and Tailwind CSS for styling, using redux and redux-persist to sync with Local Storage.",
      techs: [
        "React(JSX)",
        "Tailwind CSS",
      ],
      source: "https://github.com/seanghorchheat1222/TodoApp"
    },
    {
      id: 5,
      image: '/images/NewthingImg.png',
      title: "NewThing Website",
      description: "NewThing is a static website that show some information out of space and focus complexibility responsive layout.",
      techs: [
        "React(JSX)",
        "Bootstrap"
      ],
      source: "https://github.com/seanghorchheat1222/new-project"
    },
    {
      id: 6,
      image: '/images/CleaningImg.png',
      title: "Cleaning",
      description: "This is a Cleaning website that built with Laravel Web-Framework and integrated with telegram chat. On the Contact page, users or customers can send message directly from the website to telegram.",
      techs: [
        "Laravel",
        "Bootstrap"
      ],
      source: "https://github.com/seanghorchheat1222/Cleaning-Website"
    },
    {
      id: 7,
      image: '/images/GameshopImg.png',
      title: "Game-Shop eCommerce",
      description: "An Gameshop eCommerce is Application built with React(JSX) and Bootstrap, using Local Storage to store data. Users can add items to Favorite or Cart.",
      techs: [
        "React(JSX)",
        "Bootstrap",
      ],
      source: "https://github.com/seanghorchheat1222/game-shop"
    },
    {
      id: 8,
      image: '/images/ProductNiceImg.png',
      title: "ProductNice eCommerce",
      description: "ProductNice was an ecommerce-frontend project that integrated with fake API, also built with state management(redux and redux-persist) to store data on local storage and has add to cart, login, logout... feature.",
      techs: [
        "React(JSX)",
        "Tailwind CSS"
      ],
      source: "https://github.com/seanghorchheat1222/ProductNice-Ecommerce"
    },
    {
      id: 9,
      image: '/images/TrainAppImg.png',
      title: "Train Crud Operation",
      description: "This is a Trainapp project use to create an account for Passengers. By using React(JSX) for Frontend, ASP.Net + MySQL for Backend and also working with API authentication.",
      techs: [
        "React(JSX)",
        "ASP.NET",
        "MySQL"
      ],
      source: "https://github.com/seanghorchheat1222/trainapp"
    },
    {
      id: 10,
      image: '/images/PatiendCrudImg.png',
      title: "Patient Crud Operation",
      description: "This is a small Patient Crud operation project use to create patient information. Develop by using Angular(TS) Framework for Frontend, ASP.NET + MySQL for Backend and include with  API authentication.",
      techs: [
        "Angular(TS)",
        "ASP.NET",
        "MySQL"
      ],
      source: "https://github.com/seanghorchheat1222/PatientCrud"
    },
    {
      id: 11,
      image: '/images/StockCrudImg.png',
      title: "Crud Stock",
      description: "This is a simple Crud Stock project working with Laravel + MySQl.",
      techs: [
        "Laravel",
        "Bootstrap",
      ],
      source: "https://github.com/seanghorchheat1222/Crudstock"
    },
    {
      id: 12,
      image: '/images/FacenoteImg.png',
      title: "Facenote",
      description: "This is a blog app can be posting and share any activity, built with Angular(TS) and ASP.NET + MySQL, Working with Request JWT Token when Signin and request OTP code when Signup.",
      techs: [
        "Angular(TS)",
        "ASP.NET",
        "MySQL",
      ],
      source: "https://github.com/seanghorchheat1222/Facenote"
    },
    {
      id: 13,
      image: '/images/ThirstyEcommerceImg.png',
      title: "Thirsty eCommerce",
      description: "Thirty eCommerce was a mini enterprise project that develop by separated 3 different projects, eCommerce for customers, System for admin and ASP.NET + MySQl for storing-data(API) also working with Signup or Signin before Order.",
      techs: [
        "Angular(TS)",
        "ASP.NET",
        "MySQL"
      ],
      source: "https://github.com/seanghorchheat1222/drinkproject"
    },
    {
      id: 14,
      image: '/images/HelperImg.png',
      title: "Helper System",
      description: "Helper System is a hospital system built with React(JSX) and PHP + MySQL, Some work flow on the application is base on the real world work flow, Like add patient then checkin or checkout room.",
      techs: [
        "React(JSX)",
        "PHP",
        "MySQL"
      ],
      source: "https://github.com/seanghorchheat1222/helper"
    },
  ]

  const onPopup = (id) => {
    setIsPopUp(!isPopup);
    const result = projects.find((project) => project.id == id);
    setProject(result);
    console.log(result);
  }

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isTop = currentScrollY <= 10;
      const isBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 10;

      if (isTop) {
        setIsScrollDown(true);
      } else if (isBottom) {
        setIsScrollDown(false);
      } else if (currentScrollY > lastScrollY) {
        setIsScrollDown(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollDown(false)
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProfile = () => {
    const target = document.getElementById("profile");

    if (!target) return;

    const targetPosition = target.offsetTop;
    const targetHeight = target.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollY = targetPosition - (windowHeight / 10) + (targetHeight / 10);

    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    })

    document.body.style.overflow = "auto"
  }

  const scrollToAbout = () => {
    const target = document.getElementById("about");

    if (!target) return;

    const targetPosition = target.offsetTop;
    const targetHeight = target.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollY = targetPosition - (windowHeight / 10) + (targetHeight / 10) - 50;

    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    })

    document.body.style.overflow = "auto"
  }

  const scrollToTooandTech = () => {
    const target = document.getElementById("toolandtech");

    if (!target) return;

    const targetPosition = target.offsetTop;
    const targetHeight = target.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollY = targetPosition - (windowHeight / 10) + (targetHeight / 10) + 20;

    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    })

    document.body.style.overflow = "auto"
  }

  const scrollToProject = () => {
    const target = document.getElementById("project");

    if (!target) return;

    const targetPosition = target.offsetTop;
    const targetHeight = target.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollY = targetPosition - (windowHeight / 45) + (targetHeight / 45) - 100;

    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    })

    document.body.style.overflow = "auto"
  }


  const scrollToContact = () => {
    const target = document.getElementById("contact");

    if (!target) return;

    const targetPosition = target.offsetTop;
    const targetHeight = target.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollY = targetPosition - (windowHeight / 10) + (targetHeight / 10);

    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    })

    document.body.style.overflow = "auto"
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jt268gq',
      'template_nwyq62l',
      form.current,
      '01IVM2m5k5tU0RMYM'
    )
      .then((result) => {
        setIsAlertMessage(true)
        form.current.reset();

        const audio = new Audio('/musics/popuptone.mp3')
        audio.play();

        setTimeout(() => setIsAlertMessage(false), 3000)
      })
      .catch((error) => {
        alert('Failed to send message');
        console.log(error.text);
      })
  }

  const toEmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=seanghorchheat@gmail.com",
    )
  }


  return (
    <>
      <Particles></Particles>
      <div className={`fixed w-full h-full z-10 bg-[rgba(0,0,0,100)] justify-center items-center  ${isLoading ? 'flex' : 'hidden'} `}>
        <div className='max-w'>
          <div className='text-[rgba(255,255,255,100)]'>Welcome to my Portfolio</div>
          <div className='bg-[rgba(255,255,255,0.70)] h-px relative mt-1 animate-move'>
            <div className='h-1 w-1 absolute bg-[rgba(255,255,255,0.70)] rounded-full top-[50%] translate-y-[-50%] left-full'></div>
          </div>
        </div>
      </div>

      <div className='max-w-5xl mx-auto px-2 lg:px-0'>
        <section id="profile" className='w-auto md:h-screen flex justify-between flex-col pt-2 gap-25 md:gap-5 md:pt-5 pb-2 md:pb-15'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='mt-3 md:mt-15 order-2 md:order-1'>
              <div className='text-3xl hidden md:block'>Hello, I am</div>
              <div className='text-3xl md:text-5xl lg:text-6xl text-center md:text-start whitespace-nowrap'>Chheat Seanghor</div>
              <div className='flex flex-col lg:flex-row items-center md:items-start lg:items-end  md:justify-normal md:gap-2'>
                <div className='text-xl md:text-2xl lg:text-3xl'>Web Developer</div><div className='text-[rgba(255,255,255,0.70)] text-sm'>be accept, be improve, be better</div>
              </div>
              <div className='flex flex-wrap gap-2 md:gap-4 mt-4 justify-center md:justify-start'>
                <button className='group cursor-pointer'>
                  <a href="https://t.me/seanghorchheat3333" target='_blank'>
                    <div className='p-0.5 rounded-full bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_0%,rgba(0,0,0,0.50)_102%)] group-hover:bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_100%,rgba(0,0,0,0.50)_100%)] transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_10px_rgba(255,255,255,0.50)] flex justify-center items-center'>
                      <div className='bg-[rgba(0,0,0,100)] rounded-full'>
                        <div className='p-2 rounded-full curosr-pointer bg-[rgba(255,255,255,0.05)] relative z-1 group-active:bg-[rgba(255,255,255,0.70)]'>
                          <img className='w-5 h-5 object-contain' src={telegramIcon} alt="" />
                        </div>
                      </div>
                    </div>
                  </a>
                </button>
                <button className='group cursor-pointer'>
                  <a href="https://github.com/seanghorchheat1222" target='_blank'>
                    <div className='p-0.5 rounded-full bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_0%,rgba(0,0,0,0.50)_102%)] group-hover:bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_100%,rgba(0,0,0,0.50)_100%)] transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_10px_rgba(255,255,255,0.50)] flex justify-center items-center'>
                      <div className='bg-[rgba(0,0,0,100)] rounded-full'>
                        <div className='p-2 rounded-full curosr-pointer bg-[rgba(255,255,255,0.05)] relative z-1 group-active:bg-[rgba(255,255,255,0.70)] '>
                          <img className='w-5 h-5 object-contain' src={githubIcon} alt="" />
                        </div>
                      </div>
                    </div>
                  </a>
                </button>

                <button className='group cursor-pointer'>
                  <a href="/files/chheat_seanghor_web_developer.pdf">
                    <div className='p-0.5 rounded-full bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_0%,rgba(0,0,0,0.50)_102%)] group-hover:bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_100%,rgba(0,0,0,0.50)_100%)] transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_10px_rgba(255,255,255,0.50)] flex justify-center items-center'>
                      <div className='bg-[rgba(0,0,0,100)] rounded-full'>
                        <div className='px-5 md:px-15 py-1.5 rounded-full curosr-pointer bg-[rgba(255,255,255,0.05)] relative z-1 group-active:bg-[rgba(255,255,255,0.70)]'>
                          <div>Download Resume</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </button>
              </div>
            </div>
            <div className='flex justify-center md:justify-end order-1 md:order-2'>
              <div className='group w-max md:rounded-full'>
                <div className='p-0.5 sm:rounded-full sm:bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_0%,rgba(0,0,0,0.50)_102%)] md:group-hover:bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_100%,rgba(0,0,0,0.50)_100%)] transition-all duration-300 ease-in-out md:group-hover:shadow-[0px_0px_10px_rgba(255,255,255,0.50)] flex justify-center items-center'>
                  <div className='bg-[rgba(0,0,0,100)] rounded-full'>
                    <div className=" sm:w-80 max-w-100 relative after:content-[''] after:absolute after:top-0 right-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.20)] after:z-5">
                      <img className='w-full h-full object-cover rounded-sm sm:rounded-full' src={myImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex flex-wrap gap-2 md:gap-4'>
              <button className='group cursor-pointer' onClick={() => scrollToProfile()}>
                <div className='p-0.5 rounded-full bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_0%,rgba(0,0,0,0.50)_102%)] group-hover:bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_100%,rgba(0,0,0,0.50)_100%)] transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_10px_rgba(255,255,255,0.50)] flex justify-center items-center'>
                  <div className='bg-[rgba(0,0,0,100)] rounded-full'>
                    <div className='px-8 p-0.5 rounded-full curosr-pointer bg-[rgba(255,255,255,0.05)] relative z-1 group-active:bg-[rgba(255,255,255,0.70)]'>
                      <div >Profile</div>
                    </div>
                  </div>
                </div>
              </button>
              <button className='group cursor-pointer' onClick={() => scrollToAbout()}>
                <div className='p-0.5 rounded-full bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_0%,rgba(0,0,0,0.50)_102%)] group-hover:bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_100%,rgba(0,0,0,0.50)_100%)] transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_10px_rgba(255,255,255,0.50)] flex justify-center items-center'>
                  <div className='bg-[rgba(0,0,0,100)] rounded-full'>
                    <div className='px-8 p-0.5 rounded-full curosr-pointer bg-[rgba(255,255,255,0.05)] relative z-1 group-active:bg-[rgba(255,255,255,0.70)]'>
                      <div >About</div>
                    </div>
                  </div>
                </div>
              </button>
              <button className='group cursor-pointer' onClick={() => scrollToTooandTech()}>
                <div className='p-0.5 rounded-full bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_0%,rgba(0,0,0,0.50)_102%)] group-hover:bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_100%,rgba(0,0,0,0.50)_100%)] transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_10px_rgba(255,255,255,0.50)] flex justify-center items-center'>
                  <div className='bg-[rgba(0,0,0,100)] rounded-full'>
                    <div className='px-8 p-0.5 rounded-full curosr-pointer bg-[rgba(255,255,255,0.05)] relative z-1 group-active:bg-[rgba(255,255,255,0.70)]'>
                      <div  >Tool & Tech</div>
                    </div>
                  </div>
                </div>
              </button>
              <button className='group cursor-pointer' onClick={() => scrollToProject()}>
                <div className='p-0.5 rounded-full bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_0%,rgba(0,0,0,0.50)_102%)] group-hover:bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_100%,rgba(0,0,0,0.50)_100%)] transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_10px_rgba(255,255,255,0.50)] flex justify-center items-center'>
                  <div className='bg-[rgba(0,0,0,100)] rounded-full'>
                    <div className='px-8 p-0.5 rounded-full curosr-pointer bg-[rgba(255,255,255,0.05)] relative z-1 group-active:bg-[rgba(255,255,255,0.70)]'>
                      <div  >Project</div>
                    </div>
                  </div>
                </div>
              </button>
              <button className='group cursor-pointer' onClick={() => scrollToContact()}>
                <div className='p-0.5 rounded-full bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_0%,rgba(0,0,0,0.50)_102%)] group-hover:bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_100%,rgba(0,0,0,0.50)_100%)] transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_10px_rgba(255,255,255,0.50)] flex justify-center items-center'>
                  <div className='bg-[rgba(0,0,0,100)] rounded-full'>
                    <div className='px-8 p-0.5 rounded-full curosr-pointer bg-[rgba(255,255,255,0.05)] relative z-1 group-active:bg-[rgba(255,255,255,0.70)]'>
                      <div  >Contact</div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>

        <section id='about' className='mt-8'>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-center md:text-start'>About me</h1>
          <div className='flex flex-col md:items-end'>
            <div className='md:w-[45%]'>
              <div className='text-[rgba(255,255,255,0.70)] mt-5 md:mt-10 text-sm'>Again, my name is</div>
              <div className='text-2xl md:text-4xl lg:text-5xl'>Chheat Seanghor</div>
            </div>
          </div>
          <div className='md:w-[45%] mt-5 md:mt-13 md:flex justify-center flex-col hidden'>
            <div className="w-full relative z-5 after:content-[''] after:absolute after:top-0 right-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.20)] after:z-10">
              <img className='w-full h-full object-cover rounded-sm' src={myImage} alt="" />
            </div>
            <div className='flex gap-10 mt-5'>
              <div>
                <div className='text-2xl'>+{projects.length}</div>
                <div className='text-[rgba(255,255,255,0.70)]'>Projects Finish</div>
              </div>

              <div>
                <div className='text-2xl'>+01</div>
                <div className='text-[rgba(255,255,255,0.70)]'>Years of Experience</div>
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-1 md:mt-13'>
            <p className='md:w-[45%] text-[rgba(255,255,255,0.70)]'>
              I am 22-year-old, Fresh graduate Computer Science from the Royal University of Phnom Penh with focus on Web Developer. I have hands-on experience working with HTML, CSS, JavaScript, JQuery, Bootstrap, Tailwind CSS, React(JSX), Angular(TS), C#, ASP.NET, PHP, Laravel, MySQL and NoSQL.<br></br>I am a self-motivated, reliable, responsible, and able to follow directions effectively. I communicate well with others, work frankly and honestly, and bring a strong commitment and creativity to every project I work on.<br></br>I am particularly excited about the opportunity to apply my skills and grow as a Web Developer within your team, where I can gaining more skills and experiences and learn from senior colleagues.
            </p>
          </div>
          <div className='md:w-[45%] mt-3 md:mt-15 flex justify-center flex-col md:hidden'>
            <div className='flex flex-col gap-3'>
              <div>
                <div className='text-2xl'>+{projects.length}</div>
                <div className='text-[rgba(255,255,255,0.70)] text-sm md:text-[17px]'>Projects Finish</div>
              </div>

              <div>
                <div className='text-2xl'>+01</div>
                <div className='text-[rgba(255,255,255,0.70)] text-sm md:text-[17px]'>Years of Experience</div>
              </div>
            </div>
          </div>
        </section>

        <section id='toolandtech' className='mt-15'>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-center md:text-start'>Tools & Technologies</h1>
          <div className='text-[rgba(255,255,255,0.70)]'>My professional skills</div>
          <div className='flex flex-wrap mt-5 md:mt-7'>
            {
              skills.map((skill, index) => <div className='text-[rgba(255,255,255,0.70)] mr-3' key={index}>- {skill}</div>)
            }
          </div>
        </section>

        <section id="project" className='mt-15'>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-center md:text-start'>Projects</h1>
          <div className='relative w-full'>
            <div className='absolute w-px h-full bg-[rgba(255,255,255,0.70)] top-0 left-[50%] hidden md:block'></div>

            {
              projects.map(project => {
                return (
                  project.id % 2 !== 0 ? (
                    <div key={project.id} className='flex flex-col gap-2 md:flex-row justify-between mt-5 md:mt-8'>
                      <div className='md:w-[45%]'>
                        <div onClick={() => onPopup(project.id)} className="relative z-5 after:content-[''] after:absolute after:top-0 right-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.20)] after:z-10 cursor-pointer">
                          <img src={project.image} alt="" className='rounded-sm opacity-100 cursor-pointer' />
                        </div>
                      </div>
                      <div className='md:w-[45%]'>
                        <h1 className='text-xl md:text-2xl'>{project.title}</h1>
                        <p className='text-[rgba(255,255,255,0.70)] mt-1'>{project.description}</p>
                        <div className='text-[rgba(255,255,255,0.70)] flex gap-3 mt-1'>
                          {
                            project.techs.map((tect, index) => <div key={index}>- {tect}</div>)
                          }

                        </div>
                        <button className="text-[rgba(255,255,255,0.70)] cursor-pointer active:text-[rgba(255,255,255,100)] underline-offset-2 relative hover:text-[rgba(255,255,255,100)] transition-all duration-300 ease-in-out  md:after:content-[''] after:w-[0%] after:h-px after:bg-[rgba(255,255,255,100)] hover:after:w-full after:absolute after:bottom-0.75 after:left-0 after:transition-all after:ease-in-out after:duration-300 underline md:no-underline">
                          <a className='no-underline' href={project.source} target='_blank'>→ Source Here</a>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div key={project.id} className='flex flex-col gap-2 md:flex-row-reverse justify-between mt-5 md:mt-8'>
                      <div className='md:w-[45%]'>
                        <div onClick={() => onPopup(project.id)} className="relative z-5 after:content-[''] after:absolute after:top-0 right-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.20)] after:z-10 cursor-pointer">
                          <img className='rounded-sm' src={project.image} alt="" />
                        </div>
                      </div>
                      <div className='md:w-[45%]'>
                        <h1 className='text-xl md:text-2xl'>{project.title}</h1>
                        <p className='text-[rgba(255,255,255,0.70)] mt-1'>{project.description}</p>
                        <div className='text-[rgba(255,255,255,0.70)] flex gap-3 mt-1'>
                          {
                            project.techs.map((tect, index) => <div key={index}>- {tect}</div>)
                          }

                        </div>
                        <button className="text-[rgba(255,255,255,0.70)]  cursor-pointer active:text-[rgba(255,255,255,100)] underline-offset-2 relative hover:text-[rgba(255,255,255,100)] transition-all duration-300 ease-in-out  md:after:content-[''] after:w-[0%] after:h-px after:bg-[rgba(255,255,255,100)] hover:after:w-full after:absolute after:bottom-0.75 after:left-0 after:transition-all after:ease-in-out after:duration-300 underline md:no-underline">
                          <a className='no-underline' href={project.source} target='_blank'>→ Source Here</a>
                        </button>
                      </div>
                    </div>
                  )

                )
              })
            }

          </div>
        </section>

        <section id='contact' className='mt-15 pb-5 md:pb-15'>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-center md:text-start'>Contact</h1>
          <div className='text-[rgba(255,255,255,0.70)]'>Let talk!</div>

          <form ref={form} onSubmit={sendEmail} action="">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[10%]'>
              <input required type="text" name="user_name" placeholder='Your Full Name' className='border-b pl-2 border-[rgba(255,255,255,0.70)] outline-0 w-full mt-5 focus:border-[rgba(255,255,255,100)]' />
              <input required type="text" name="user_email" placeholder='Your Email' className='border-b pl-2 border-[rgba(255,255,255,0.70)] outline-0 w-full mt-5 focus:border-[rgba(255,255,255,100)]' />
            </div>
            <div className='w-full'>
              <textarea required name="message" type="text" placeholder='Your Description' className='border-b pl-2 border-[rgba(255,255,255,0.70)] outline-0 w-full h-30 mt-8 focus:border-[rgba(255,255,255,100)]' ></textarea>
            </div>
            <div className='w-full mt-3'>
              <button type='submit' className='group cursor-pointer w-full'>
                <div className='p-0.5 rounded-full bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_0%,rgba(0,0,0,0.50)_102%)] group-hover:bg-[linear-gradient(to_right,rgba(255,255,255,0.50)_100%,rgba(0,0,0,0.50)_100%)] transition-all duration-300 ease-in-out group-hover:shadow-[0px_0px_10px_rgba(255,255,255,0.50)] flex justify-center items-center'>
                  <div className='bg-[rgba(0,0,0,100)] rounded-full w-full'>
                    <div className='px-5 md:px-15 py-1.5 rounded-full curosr-pointer bg-[rgba(255,255,255,0.05)] relative z-1 group-active:bg-[rgba(255,255,255,0.70)] w-full'>
                      <div>Sent Message</div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </form>
          <div className='flex justify-end mt-2'>
            <button className='text-[rgba(255,255,255,0.70)] cursor-pointer hover:text-[rgba(255,255,255,100)] transition-all duration-300 ease-in-out' onClick={() => toEmail()}>
              <a target='_blank' className='text-sm'>Email: seanghorchheat@gmail.com</a>
            </button>
          </div>
        </section>

        <div className={`fixed w-full h-full z-10 bg-[rgba(0,0,0,0.40)] top-0 left-0 justify-center items-center px-2 lg:px-0 ${isPopup ? 'flex ' : 'hidden'}`}>
          <div className='flex flex-col gap-2 w-max h-7 cursor cursor-pointer fixed pt-3 right-3 top-3 z-11' onClick={() => onPopup()}>
            <span className='inline-block w-7 h-1 bg-[rgba(255,255,255,100)] rotate-45 rounded-full'></span>
            <span className='inline-block w-7 h-1 bg-[rgba(255,255,255,100)] -rotate-45 -mt-3 rounded-full'></span>
          </div>
          <div className='w-full md:w-[50%]'>
            <img className='rounded-sm h-full w-full' src={project?.image} alt="" />
          </div>
        </div>

        {isalertMessage && (
          <div className="  w-[95%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[30%] h-[40%] bg-[rgba(0,0,0,0.40)] fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] gap-3 flex justify-center items-center flex-col rounded-sm">
            <div className=" bg-[rgba(0,0,0,100)] rounded-full p-2 border-[rgba(255,255,255,0.70)] border-2">
              <img className='w-7 h-7object-contain shrink-0' src={DoneIcon} alt="" />
            </div>
            <div>
              <p className='text-center text-[rgba(255,255,255,0.70)]'><strong className='text-[rgba(255,255,255,100)]'>Thank you</strong>, I’ll reply as soon as possible. </p>
            </div>
          </div>
        )}

        <div className='fixed bottom-2 left-[50%] translate-x-[-50%] md:flex flex-col items-center hidden '>
          <div className='text-[11px]'>{isScrollDown ? 'Scroll Down' : 'Scroll Up'}</div>
          <div className='border border-[rbga(255,255,255,100)] w-max rounded-full p-1 mt-1 bg-[rgba(255,255,255,0.05)] '>
            <img className={`w-4 h-4 ${isScrollDown ? 'rotate-0' : 'rotate-180'} transition-all duration-300 ease-in-out `} src={arrowdownIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
