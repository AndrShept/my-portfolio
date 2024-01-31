import Image from 'next/image';

export const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="space-y-1">
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image
              fill
              alt="img"
              src="/typescript.png"
              className="object-cover"
            />
          </div>
          <span className="ml-2"> TypeScript</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image fill alt="img" src="/node.png" className="object-cover" />
          </div>
          <span className="ml-2"> Node.js</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image fill alt="img" src="/redux.png" className="object-cover" />
          </div>
          <span className="ml-2"> Redux</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image fill alt="img" src="/zustand.png" className="object-cover" />
          </div>
          <span className="ml-2"> Zustand</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image
              fill
              alt="img"
              src="/react-query.svg"
              className="object-cover"
            />
          </div>
          <span className="ml-2"> Tanstack Query</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image
              fill
              alt="img"
              src="/tailwind.png"
              className="object-cover"
            />
          </div>
          <span className="ml-2"> TailwindCSS</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image fill alt="img" src="/react.png" className="object-cover" />
          </div>
          <span className="ml-2"> React</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image
              className="rounded-full border border-white bg-white object-cover"
              fill
              alt="img"
              src="/next.png"
            />
          </div>
          <span className="ml-2"> Next</span>
        </li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>
          I am a self-taught developer, having independently acquired my
          knowledge and skills
        </li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul>
        <li>
          I have experience in self-learning various technologies and skills in
          the field of web development. I have learned JavaScript, TypeScript,
          React, Next, React Hook Form, Redux, Zustand, Tanstack Query, Node.js,
          Prisma, MongoDB, HTML, CSS, TailwindCSS, and Git, and applied them to
          create my own pet projects
        </li>
      </ul>
    ),
  },
];
