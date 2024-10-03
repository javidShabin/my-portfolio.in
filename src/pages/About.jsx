import React from "react";

const About = () => {
  return (
    <main className="bg-white flex justify-center px-4 md:px-8 lg:px-0">
      <div className="container w-full max-w-[900px] shadow-md text-center py-8 px-4 md:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#695aa6]">About Me</h1>
        <p className="text-justify mt-5 text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
          Hi, I'm Javid Shabin, a self-taught MERN stack developer with a
          background in sociology. Despite graduating in sociology, my true
          passion lies in coding and web development. I discovered my love for
          building applications and solving technical challenges, which led me
          to pursue a career in this field.
          <br />I specialize in MongoDB, Express, React, and Node.js, and I've
          been enhancing my skills through self-learning and studying at Entri. I
          enjoy developing responsive, user-friendly web applications and
          continuously exploring new technologies to stay ahead in the tech world.
          <br />When I'm not coding, you'll find me enjoying music, watching movies,
          or diving into the latest tech trends. My journey into web development
          has been exciting, and I'm always eager to collaborate on new projects
          and grow as a developer.
        </p>
      </div>
    </main>
  );
};

export default About;
