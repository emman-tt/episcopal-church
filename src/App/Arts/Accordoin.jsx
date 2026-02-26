import { useEffect, useRef, useState } from 'react'
import { gsap, SplitText } from '../../libs/gsap'

export default function Accordion () {
  const [selected, setSelected] = useState(0)
  const container = useRef(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const marquee = useRef(null)
  const description = useRef(null)
  const isMobile = window.innerWidth <= 500

  useEffect(() => {
    gsap.set(container.current, {
      clipPath: 'polygon(5% 28%, 51% 36%, 95% 28%, 96% 77%, 48% 71%, 5% 80%)',
      gap: 10
    })
  }, [])

  function displaySelected (item) {
    if (isTransitioning) return

    setIsTransitioning(true)
    setSelected(item)

    gsap.to(container.current, {
      clipPath: 'circle(70% at 50% 50%)',
      gap: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => setIsTransitioning(false)
    })
  }

  function returnDefault () {
    if (isTransitioning) return

    setIsTransitioning(true)
    setSelected(0)

    gsap.to(container.current, {
      clipPath: 'none',
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(container.current, {
          clipPath:
            'polygon(5% 28%, 51% 36%, 95% 28%, 96% 77%, 48% 71%, 5% 80%)',
          gap: 10,
          ease: 'circ.inOut',
          duration: 30
        })
        setIsTransitioning(false)
      }
    })
  }

  useEffect(() => {
    gsap.killTweensOf(marquee.current)

    if (selected > 0) {
      if (description.current) {
        const descriptionSplit = new SplitText(description.current, {
          type: 'words,lines,chars'
        })

        gsap.to(descriptionSplit.chars, {
          x: 0,
          duration: 0.4,
          stagger: {
            amount: 0.3,
            from: 'end'
          },
          ease: 'power2.out'
        })
      }

      gsap.set(marquee.current, {
        x: 0,
        alignSelf: 'center',
        justifySelf: 'center',
        width: 'full'
      })
    } else {
      gsap.to(marquee.current, {
        x: '-=50%',
        duration: 40,
        ease: 'none',
        repeat: -1
      })
    }
  }, [selected])

  return (
    <section className='relative w-full h-max'>
      {selected > 0 && (
        <button
          onClick={() => {
            returnDefault()
          }}
          className='rounded-4xl  md:-top-15 z-30 sm:left-1/2 -translate-x-1/2 absolute cursor-pointer text-white font-semibold bg-[#8f3337] p-2 md:p-3 px-9 md:px-15 max-sm:-bottom-20 max-sm:py-4  max-sm:right-0 hover:bg-[#6b282b] transition-colors text-sm md:text-base'
        >
          Back
        </button>
      )}

      <section className='relative flex justify-center overflow-hidden items-center w-full h-[70vh] md:h-130'>
        <section
          ref={container}
          className='relative gap-0 px-0 md:px-10 w-full h-full md:h-200'
        >
          <section
            ref={marquee}
            className={`h-full relative gap-3 md:gap-5 flex ${
              selected > 0 ? 'w-full justify-center' : 'min-w-max'
            }`}
          >
            {isTransitioning && (
              <div className='absolute inset-0 flex items-center justify-center bg-black/20 z-40 backdrop-blur-sm'>
                <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8f3337]'></div>
              </div>
            )}

            {arts.map((item, i) => (
              <div
                key={item.id}
                onClick={() => (selected === 0 ? displaySelected(i + 1) : null)}
                className={`
      cursor-pointer transition-all group duration-300 ease-in-out
      will-change-transform transform-gpu rounded-lg shadow-lg relative h-full
    `}
                style={{
                  width:
                    selected === 0
                      ? isMobile
                        ? '150px'
                        : '280px'
                      : selected === item.id
                      ? '100%'
                      : '0px',
                  minWidth:
                    selected === 0 ? (isMobile ? '100px' : '220px') : '0px',
                  display:
                    selected === 0 || selected === item.id ? 'block' : 'none'
                }}
              >
                <div
                  className={`flex  items-center justify-center w-full z-20 text-xl md:text-3xl font-light  ease-in-out duration-0 text-white sm:bg-black/30 hover:bg-black/0    ${
                    selected > 0
                      ? 'sm:bg-black/40 bg-black/10 md:bg-white/5 text-2xl md:text-4xl font-semibold p-6 md:p-10 sm:backdrop-blur-xs border-0 md:border-2 rounded-2xl max-sm:flex-col max-sm:gap-0  max-sm:p-2 md:border-white/30 sm:shadow-xl h-auto md:h-max w-[90%] md:w-max top-1/2 md:top-[60%] left-1/2 md:left-[20%] -translate-x-1/2 md:translate-x-0 -translate-y-1/200 md:translate-y-0'
                      : 'bg-linear-to-b from-transparent via-black/40 to-black/80'
                  } text-center absolute top-0 bottom-0 left-0 right-0 rounded-4xl `}
                >
                  {item.header}

                  {selected > 0 && (
                    <p
                      ref={description}
                      className='text-lg md:text-2xl font-semibold text-shadow-lg h-max p-2 md:p-5 w-full md:w-max mt-4 md:absolute md:top-[80%] md:left-[5%]'
                    >
                      {item.description}
                    </p>
                  )}
                </div>
                <img
                  src={item.image}
                  className='w-full h-full object-cover rounded-4xl'
                  alt={`Art ${item.id}`}
                />
              </div>
            ))}
          </section>
        </section>
      </section>
    </section>
  )
}

const arts = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137882/easter_qyru7k.jpg',
    header: 'Easter Cantata Choir',
    description:
      'Our annual Easter celebration featuring the combined choirs and orchestra'
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137880/baptism_fexczf.jpg',
    header: 'Baptism Service',
    description: 'Celebrating new life in Christ through baptism'
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137882/christmas_jmnyqm.jpg',
    header: 'Christmas Eve Candlelight',
    description: 'A sacred evening of carols, scripture, and candlelight'
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137878/sunday_qn0ivh.jpg',
    header: 'Sunday Worship Livestream',
    description: 'Join us online for worship every Sunday at 10:30am'
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137882/youth_o8urmw.jpg',
    header: 'Youth Art Exhibition',
    description: 'Our young artists displaying their creative gifts'
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137882/podcast_cwtiww.jpg',
    header: 'Podcast Recording',
    description: 'Weekly sermons and discussions available on all platforms'
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137879/glass_uuqnll.jpg',
    header: 'Stained Glass Windows',
    description: 'The beauty and symbolism of our sanctuary windows'
  },
  {
    id: 8,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137879/bible_mbucac.jpg',
    header: 'Vacation Bible School',
    description: 'Kids creating crafts and learning through art'
  },
  {
    id: 9,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137879/media_axnyap.jpg',
    header: 'Media Team Training',
    description: 'Volunteers learning to run cameras and livestream'
  },
  {
    id: 10,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137881/anniversary_gcfmfg.jpg',
    header: 'Church Anniversary',
    description: 'Celebrating our history through photos and displays'
  },
  {
    id: 11,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137882/easter_qyru7k.jpg',
    header: 'Easter Cantata Choir',
    description:
      'Our annual Easter celebration featuring the combined choirs and orchestra'
  },
  {
    id: 12,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137880/baptism_fexczf.jpg',
    header: 'Baptism Service',
    description: 'Celebrating new life in Christ through baptism'
  },
  {
    id: 13,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137882/christmas_jmnyqm.jpg',
    header: 'Christmas Eve Candlelight',
    description: 'A sacred evening of carols, scripture, and candlelight'
  },
  {
    id: 14,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137878/sunday_qn0ivh.jpg',
    header: 'Sunday Worship Livestream',
    description: 'Join us online for worship every Sunday at 10:30am'
  },
  {
    id: 15,
    image:
      'https://res.cloudinary.com/drpnhajh9/image/upload/v1772137882/youth_o8urmw.jpg',
    header: 'Youth Art Exhibition',
    description: 'Our young artists displaying their creative gifts'
  }
]
