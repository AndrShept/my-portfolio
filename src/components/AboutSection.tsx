import Image from 'next/image';
import React from 'react';

export const AboutSection = () => {
  return (
    <section className='text-primary'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
        <Image src='/about-image.png' alt='img' width={500} height={500} />
        <div>
          <h2>About Me</h2>
          <p>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
        </div>
      </div>
    </section>
  );
};
