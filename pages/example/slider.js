import { useState } from 'react';

function Slider({ images = [] }) {
  const [active, setActive] = useState(0);

  images = [
    {
      image_url:
                'https://img.freepik.com/free-photo/young-female-jacket-shorts-presenting-comparing-something-looking-confident-front-view_176474-37521.jpg?w=1800&t=st=1693037944~exp=1693038544~hmac=97e967909706f9b73b4b47d521acf54806f4b9b3efab6196bc8a69f07efff554',
      caption: 'Image 1',
    },
    {
      image_url:
                'https://img.freepik.com/free-photo/girl-grey-shirt-showing-something-her-hand_144627-51099.jpg?t=st=1693037931~exp=1693038531~hmac=63713e5a5cf2d23f53ca82b9996ad224ac6e92d0275a53b6debbe6523d7df020',
      caption: 'Image 2',
    },
    {
      image_url:
                'https://img.freepik.com/free-photo/young-lady-shirt-jacket-making-scales-gesture-looking-cheerful-front-view_176474-85195.jpg?t=st=1693037931~exp=1693038531~hmac=2f83b6689538e4056912c96f448163e9ef10998f48f671b7e50279f81611fbe6',
      caption: 'Image 3',
    },
    {
      image_url:
                'https://img.freepik.com/free-photo/girl-wide-opening-hands-giving-explanation-high-quality-photo_144627-60466.jpg?w=1800&t=st=1693038021~exp=1693038621~hmac=d4520cd86b2aea3e5dda765ede05bb53d70e18a574756d0f41a6806fe325d26d',
      caption: 'Image 4',
    },
  ];

  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  const Slide = ({ image_url, caption, active }) => (
    <div className={`slide ${active ? 'active' : ''}`}>
      <img src={image_url} alt={caption} />
      <span>{caption}</span>
    </div>
  );

  return (
    <>
      <div className="container">
        <h1 className="text-center">Slider in Next.js</h1>
        <p className="text-center">Let's create basic slider in Next.js</p>
      </div>
      <div className="slider">
        <div className="slides">
          {images.map((e, i) => (
            <Slide key={e.caption} {...e} active={i === active} />
          ))}
        </div>
        <div className="navigation">
          <div className="navigation-bottom">
            {images.map((e, i) => (
              <div
                className={`dots ${i === active ? 'active' : ''}`}
                key={e.caption}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <div className="navigation-next-prev">
            <div className="next-prev prev" onClick={onPrev}>
              {' '}
              &lt;
              {' '}
            </div>
            <div className="next-prev next" onClick={onNext}>
              {' '}
              &gt;
              {' '}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>
        {`
            .container{
              position: relative;
            }
            .text-center{text-align: center !important;}
             .slider {
              position: relative;
              max-width: 500px;
              margin: 0 auto;
            }
            
            .slide {
              position: relative;
              display: none;
            }
            
            @keyframes fade {
              from {
                opacity: 0.4;
              }
              to {
                opacity: 1;
              }
            }
            
            .slide.active {
              display: block;
              animation-name: fade;
              animation-duration: 1.5s;
            }
            
            .slide span {
              position: absolute;
              bottom: 15px;
              left: 50%;
              transform: translateX(-50%);
              color: #fff;
            }
            
            .slide img {
              width: 100%;
            }
            
            .navigation-bottom {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .dots {
              width: 15px;
              height: 15px;
              background: #ddd;
              border-radius: 50%;
              margin: 5px 2px;
              transition: all 0.2s ease;
              cursor: pointer;
            }
            
            .dots.active {
              background: #0d74c5;
            }
            
            .navigation-next-prev .next-prev {
              position: absolute;
              top: 50%;
              font-size: 1.5em;
              cursor: pointer;
              transform: translateY(-100%);
              z-index: 99999;
              padding: 0px 0 5px;
              background: #c1c6cb75;
            }
            
            .next {
              right: 10px;
            }
            
            .prev {
              left: 10px;
            }
            `}
      </style>

    </>
  );
}

export default Slider;
