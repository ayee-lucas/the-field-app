import React from 'react';
import { playfair, poppins } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';

import image_1 from '../../../public/images/About/image_about_1.jpeg';
import image_2 from '../../../public/images/About/image_about_2.jpeg';

const About = () => (
  <section
    className={`min-h-screen py-3 px-2 mt-7 bg-white dark:bg-black w-full z-20 ${poppins.className} ${playfair.variable}`}
  >
    <div className="w-full h-full flex flex-col justify-center items-start px-4">
      <h1 className="text-6xl max-sm:text-3xl font-bold text-center text-gray-800 dark:text-white">
        ABOUT <span className="text-fieldGreen">US</span>
      </h1>
      <div className="grid  grid-cols-2 max-sm:grid-flow-row max-sm:grid-cols-1 gap-4 py-5">
        <div className="flex flex-col justify-around items-start text-lg">
          <p className="w-full p-4 first-letter:text-3xl first-letter:font-playfair first-letter:font-semibold">
            Welcome to 'THE FIELD', a platform that connects talented
            individuals with sports organizations around the world. We believe
            that there are many skilled athletes out there who are not getting
            the recognition they deserve, and we want to change that. Our
            mission is to provide a space where all amateur and non-amateur
            athletes can share and showcase their skills, with the hope of being
            discovered by organizations looking for talent.
          </p>
          <p className="w-full px-4 py-8  first-letter:text-3xl first-letter:font-playfair first-letter:font-semibold my-5 bg-fieldGreen text-gray-800 rounded-lg">
            At 'THE FIELD', we are passionate about sports and believe in the
            power of technology to create new opportunities for athletes and
            sports organizations. Our platform is designed to be easy to use,
            accessible, and effective in connecting talented individuals with
            the right organizations. We believe that everyone should have the
            opportunity to achieve their dreams in the sports industry, and we
            are committed to making that a reality.
          </p>
        </div>

        <div className="w-full h-full relative">
          <Image
            src={image_1}
            fill
            alt="about us 1"
            placeholder="blur"
            className="absolute w-full h-full object-cover object-left-top"
          />
        </div>
      </div>
    </div>
    <div className="w-full bg-black  text-white h-full flex flex-col justify-center items-start px-4">
      <div className="grid grid-cols-2 max-sm:grid-flow-row max-sm:grid-cols-1 gap-4 py-5">
        <div className="w-full h-full relative">
          <Image
            src={image_2}
            fill
            alt="about us 1"
            placeholder="blur"
            className="absolute w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-around items-start text-lg">
          <p className="w-full p-4 first-letter:text-3xl first-letter:font-playfair first-letter:font-semibold">
            Our platform offers a range of features that allow athletes to
            create a profile, showcase their skills, connect with other
            professionals in the industry, and discover new opportunities. For
            sports organizations, we offer a simple and effective way to
            discover and recruit talented individuals from around the world. Our
            platform is designed to be a one-stop-shop for all your sports
            talent needs. We are a team of passionate professionals with
            experience in both the sports and technology industries.
          </p>
          <p className="w-full px-4 py-8 text-gray-800 first-letter:text-3xl first-letter:font-playfair first-letter:font-semibold my-5 bg-fieldGreen rounded-lg">
            We believe in the power of collaboration and are committed to
            working with our users to improve our platform and provide the best
            possible experience for everyone. We are excited to be part of the
            sports community and to help athletes and organizations alike
            achieve their goals.
          </p>
        </div>
      </div>
    </div>
    <div className="flex items-center max-sm:text-sm font-bold max-sm:text-justify">
      <h3 className="py-4">
        Join us today and take the first step towards achieving your dreams in
        the sports industry. Together, we can make a difference and create a
        brighter future for all athletes.
      </h3>
      <Link href="/" className="px-4 text-fieldGreen underline">
        Register Now
      </Link>
    </div>
  </section>
);

export default About;
