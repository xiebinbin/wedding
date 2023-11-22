import React, { useCallback } from 'react';
import image01 from './assets/photos/01.webp';
import image02 from './assets/photos/02.webp';
import image03 from './assets/photos/03.webp';
import image04 from './assets/photos/04.webp';
import image05 from './assets/photos/05.webp';
import image06 from './assets/photos/06.webp';
import image07 from './assets/photos/07.webp';
import image08 from './assets/photos/08.webp';
import image09 from './assets/photos/09.webp';
import image10 from './assets/photos/10.webp';
import image11 from './assets/photos/11.webp';
import image12 from './assets/photos/12.webp';
import image13 from './assets/photos/13.webp';
import image14 from './assets/photos/14.webp';
import image15 from './assets/photos/15.webp';
import Typed from 'typed.js';
import Slider from "react-slick";

const FirstScreen = (props: {
  end: () => void;
}) => {
  const elOne = React.useRef<HTMLHeadingElement>(null);
  const elTwo = React.useRef<HTMLHeadingElement>(null);
  const elThree = React.useRef<HTMLHeadingElement>(null);
  const elFour = React.useRef<HTMLHeadingElement>(null);
  const elFive = React.useRef<HTMLHeadingElement>(null);
  const [ready, setReady] = React.useState(false);
  const typeds = React.useRef<Typed[]>();
  const lines = [
    '你好啊,朋友!🧑‍🤝‍🧑',
    '有一件事情想告诉你',
    '🎉我们结婚啦！^_^🎉',
    '邀请您参加我们的婚礼',
    '与我们共同见证这一刻的幸福💖💖',
  ];
  const addLine = useCallback((content: string, ele: any) => {
    const typed = new Typed(ele, {
      strings: [content],
      typeSpeed: 150,
      showCursor: false,
    });
    typeds.current?.push(typed);
  }, []);
  const start = useCallback(() => {
    addLine(lines[0], elOne.current);
    setTimeout(() => {
      addLine(lines[1], elTwo.current);
      setTimeout(() => {
        addLine(lines[2], elThree.current);
        setTimeout(() => {
          addLine(lines[3], elFour.current);
          setTimeout(() => {
            addLine(lines[4], elFive.current);
            setTimeout(() => {
              props.end();
            }, 5000);
          }, lines[3].length * 150 + 500);
        }, lines[2].length * 150 + 500);
      }, lines[1].length * 150 + 500);
    }, lines[0].length * 150 + 500);
  }, []);
  React.useEffect(() => {
    return () => {
      typeds.current?.forEach((typed) => typed.destroy());
    };
  }, []);
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-zinc-700 relative'>
      <div className='w-screen h-screen flex justify-center items-center absolute top-0 left-0 z-100'>
        <img className='w-screen' src={image07} />
      </div>
      <div className='w-screen h-screen bg-zinc-700/50 absolute top-0 left-0 z-101'>
        <div className={ready ? 'w-screen h-screen flex flex-col justify-center items-center' : 'hidden'}>
          <span className='text-center text-white' ref={elOne} />
          <span className='text-center text-white mt-1rem' ref={elTwo} />
          <span className='text-center text-white mt-1rem' ref={elThree} />
          <span className='text-center text-white mt-1rem' ref={elFour} />
          <span className='text-center text-white mt-1rem' ref={elFive} />
        </div>
        {ready ? null :
          <div className='w-screen h-screen flex flex-col bg-zinc-700/50 items-center justify-center'>
            <button onClick={() => {
              setReady(true);
              start();
              const audio = document.getElementById('music') as HTMLAudioElement;
              audio.play();
            }} className="bg-red-400 rounded-full py-10px px-15px border-0 outline-0 text-white shadow-lg shadow-red-500/50">
              <div className='flex items-center justify-center'>
                <div className='i-ri-hearts-fill text-white text-1rem' />
                开启请柬
              </div>
            </button>
          </div>}
      </div>
    </div>
  )
}
const TwoScreen = () => {
  const settings = {
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  };
  const images = [
    image01,
    image02,
    image03,
    image04,
    image05,
    image06,
    image07,
    image08,
    image09,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ]
  return (
    <div className='w-screen h-screen bg-zinc-700 overflow-y-auto'>
      <div className='w-screen h-screen'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className='w-screen h-screen' key={index}>
              <div className='w-screen h-screen flex items-center justify-center'>
                <img className='w-screen object-cover' src={image} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-screen h-screen bg-zinc-700 relative'>
        <div className='w-screen h-screen flex justify-center items-center absolute top-0 left-0 z-100'>
          <img className='w-screen' src={image07} />
        </div>
        <div className='w-screen h-screen bg-zinc-700/50 absolute flex-col top-0 left-0 z-101 flex items-center justify-between'>
          <div className='h-70% flex flex-col items-center justify-center'>
            <span className='text-white text-2xl mt-100px'>期待您的光临!</span>
            <span className='text-white text-1xl mt-10px'>谢彬彬 & 罗相娟</span>
          </div>
          <div className='h-30% w-80% flex flex-col mb-150px justify-between'>
            <div className='flex flex-col'>
              <span className='text-white text-xs'>日期：2023年11月25日 </span>
              <span className='text-white text-xs'>时间：11:58 </span>
              <span className='text-white text-xs'>地点：凯宴庄园 (千禧厅)</span>
            </div>
            <div className='flex items-center justify-center'>
              <div className='i-ri-github-line text-white'></div><span className='text-white'>：</span>
              <a className='text-white' target='_blank' href='https://github.com/xiebinbin/wedding'>
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function App() {
  const [firstScreenShow, setFirstScreenShow] = React.useState(true);
  const [TwoScreenShow, setTwoScreenShow] = React.useState(false);
  return (
    <>
      {firstScreenShow ? <FirstScreen end={() => {
        setFirstScreenShow(false);
        setTwoScreenShow(true);
      }} /> : null}
      {TwoScreenShow ? <TwoScreen /> : null}
      <div className='hidden'>
        <audio id="music" controls autoPlay={true}>
          <source src="./music.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </>
  )
}

export default App
