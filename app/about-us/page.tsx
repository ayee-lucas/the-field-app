import Image from 'next/image';
import { IMAGE_DATA } from './components/CarouselData';
import Carousel from './components/Carousel';

export default function AboutUs() {
  return (
    <div className="bg-white dark:bg-black pt-20">
      <div className="w-full">
        <div className="w-full h-full flex justify-between  p-5">
          <div className="w-auto max-w-2xl flex items-center max-lg:hidden ">
            <Image
              src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              width={1000}
              height={1000}
              alt="/"
              className="max-h-[calc(100vh-5rem)]"
            />
          </div>
          <div className="w-full pt-5 lg:pt-20 lg:p-5">
            <div className="text-black dark:text-white pl-1 text-xs font-semibold ">
              WHAT IS?
            </div>
            <div className="w-fit h-20">
              <div className="font-bold text-4xl lg:text-5xl whitespace-nowrap dark:text-white pl-1 -mb-5">
                THE
              </div>

              <div className="text-fieldGreen text-8xl lg:text-9xl font-bold">
                FIELD
              </div>
            </div>
            <div className="pt-16 lg:pt-24">
              <Carousel slides={IMAGE_DATA} />
            </div>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="flex mt-5 gap-x-5">
            <div className="lg:w-[80%] flex items-center max-lg:px-5">
              <div>
                <div className="font-bold text-2xl lg:text-4xl whitespace-nowrap dark:text-white pb-3 lg:py-53">
                  ABOUT US
                </div>
                <div className="text-lg mb-7 bg-white dark:bg-black text-black dark:text-white rounded-md">
                  <span className="text-2xl font-bold text-fieldGreen">
                    THE FIELD
                  </span>{' '}
                  is a revolutionary platform that revolves around the world of
                  sports. Our core focus is on nurturing and supporting
                  athletes, recognizing them as the driving force behind our
                  vision. With a deep-rooted passion for sports, we aim to
                  establish a vibrant community that fosters growth,
                  collaboration, and success for all members.
                </div>
                <div className="font-bold text-2xl lg:text-4xl whitespace-nowrap dark:text-white pb-3 lg:py-5">
                  OUR COMMITMENT
                </div>
                <div className="text-lg p-3 mb-5 bg-fieldGreen text-white rounded-md">
                  At <span className="text-2xl font-bold">THE FIELD</span>, we
                  are committed to breaking down barriers that may hinder
                  talented athletes from reaching their full potential. We
                  strive to provide a level playing field where skill,
                  dedication, and perseverance are the sole determinants of
                  success. Our unwavering dedication to fairness and equality
                  ensures that every athlete gets a fair chance to showcase
                  their abilities.
                </div>
              </div>
            </div>
            <div className="h-auto w-full flex items-center rounded-lg max-lg:hidden">
              <Image
                src="https://images.unsplash.com/photo-1599265453021-dfd72c0e7008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                width={1000}
                height={1000}
                alt="/"
                className="max-h-[900px] xl:max-h-[600px] w-full py-3"
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <div className="w-auto bg-cover h-[calc(100vh-40rem)] lg:h-[calc(100vh-15rem)] text-center whitespace-nowrap dark:text-white bg-[url('https://images.unsplash.com/photo-1628891890377-57dba2715caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')]">
            <div className="w-full bg-opacity-60 bg-black h-[calc(100vh-40rem)] lg:h-[calc(100vh-15rem)]">
              <div className="flex h-full w-full text-center items-center justify-center text-2xl lg:text-6xl">
                <span className="font-bold text-fieldGreen pr-2 lg:pr-5">
                  BOOST{' '}
                </span>{' '}
                <span className="font-bold text-white">YOUR CAREER</span>
              </div>
            </div>
          </div>
          <div className="md:flex items-center justify-center pt-8 lg:py-8 lg:mt-16 lg:mb-4">
            <div className="p-5 w-full">
              <div className="font-bold text-center text-xl lg:text-3xl whitespace-nowrap dark:text-white pb-3 lg:pt-5">
                EMPOWERING <span className="text-fieldGreen">ATHLETES</span>
              </div>
              <div className="text-lg p-3 text-justify dark:bg-black dark:text-white rounded-md lg:mx-10">
                We take pride in being a platform that empowers athletes to
                pursue their dreams fearlessly. Through our state-of-the-art
                resources and extensive network of industry experts, we equip
                athletes with the tools they need to excel in their chosen
                sports. Whether it's access to top-notch training facilities,
                specialized coaching, or exposure to scouts and recruiters,
                we've got it all covered.
              </div>
            </div>
            <div className="p-5 w-full">
              <div className="font-bold text-center text-xl lg:text-3xl whitespace-nowrap dark:text-white pb-3 lg:pt-5">
                BUILDING DYNAMIC <span className="text-fieldGreen">TEAMS</span>
              </div>
              <div className="text-lg p-3 text-justify dark:bg-black dark:text-white rounded-md lg:mx-10">
                THE FIELD understands that a team is more than just a group of
                individuals; it's a harmonious blend of skills, personalities,
                and camaraderie. We actively foster an environment where
                athletes can come together, form strong bonds, and build dynamic
                teams that complement each other's strengths. Whether you're a
                seasoned player looking to join a professional league or a
                rising star seeking like-minded teammates.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white dark:bg-black p-5 flex justify-between h-full">
          <div className="w-full flex items-center max-lg:hidden ">
            <Image
              src="https://images.unsplash.com/photo-1475171272919-d65b555848d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width={1000}
              height={1000}
              alt="/"
            />
          </div>
          <div className="w-full text-center flex items-center">
            <div>
              <div className="font-bold lg:text-lg whitespace-nowrap">
                Your Journey
              </div>

              <div className="text-4xl lg:text-5xl font-bold">STARTS HERE</div>
              <div className="text-xl p-3 bg-fieldGreen text-white mx-4 lg:mx-10 mt-10 rounded-lg">
                THE FIELD understands that a team is more than just a group of
                individuals; it's a harmonious blend of skills, personalities,
                and camaraderie. We actively foster an environment where
                athletes can come together, form strong bonds, and build dynamic
                teams that complement each other's strengths. Whether you're a
                seasoned player looking to join a professional league or a
                rising star seeking like-minded teammates.
              </div>

              <div className="text-4xl lg:text-5xl font-bold pt-10">
                GET IN TOUCH
              </div>
              <div className="text-xl p-3 bg-fieldGreen text-white mx-4 lg:mx-10 mt-10 rounded-lg mb-10">
                Ready to embark on a transformative sporting experience? Want to
                be part of a community that cherishes talent and teamwork? Reach
                out to us today and start your journey with THE FIELD. Together,
                let's unleash your potential and achieve greatness in the world
                of sports!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
