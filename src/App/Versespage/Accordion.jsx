import { useEffect, useRef } from 'react'
import { gsap, SplitText } from '../../libs/gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

gsap.registerPlugin(CSSPlugin)
export default function VerseAccordion () {
  const boxRefs = useRef([])
  const splitInstances = useRef({})

  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      if (!box) return

      const themeSplit = new SplitText(box.querySelector('.theme-text'), {
        type: 'chars',
        smartWrap: true
      })

      const refSplit = new SplitText(box.querySelectorAll('.reference-text'), {
        type: 'chars',
        smartWrap: true
      })

      const summarySplit = new SplitText(box.querySelector('.summary'), {
        type: 'chars',
        smartWrap: true
      })

      splitInstances.current[`box-${index}`] = {
        theme: themeSplit,
        reference: refSplit,
        summary: summarySplit
      }

      const tl = gsap.timeline({ delay: index * 0.1 })

      tl.to(themeSplit.chars, {
        opacity: 1,
        y: 0,
        stagger: 0.02,
        duration: 0.5,
        ease: 'power2.out'
      })
        .to(
          refSplit.chars,
          {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.5,
            ease: 'power2.out'
          },
          '-=0.3'
        )
        .to(
          summarySplit.chars,
          {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.5,
            ease: 'power2.out'
          },
          '-=0.3'
        )
    })

    return () => {
      Object.values(splitInstances.current).forEach(instances => {
        Object.values(instances).forEach(split => split?.revert())
      })
    }
  }, [])

  const handleMouseEnter = (e, index) => {
    const box = e.currentTarget
    const instances = splitInstances.current[`box-${index}`]

    gsap.killTweensOf(box)

    gsap.to(box, {
      width: 5000,
      duration: 0.8,
      ease: 'power2.inOut'
    })

    if (instances?.summary) {
      gsap.set(instances.summary.chars, {
        opacity: 0,
        x: 50
      })

      gsap.to(instances.summary.chars, {
        x: 0,
        opacity: 1,
        stagger: {
          amount: 0.8,
          from: 'edges'
        },
        delay: 0.5,
        duration: 0.8,
        ease: 'back.out(1.2)'
      })
    }
  }

  const handleMouseLeave = (e, index) => {
    const box = e.currentTarget
    const instances = splitInstances.current[`box-${index}`]

    gsap.killTweensOf(box)

    gsap.to(box, {
      width: 240,
      duration: 0.5,
      ease: 'power2.inOut'
    })

    if (instances?.summary) {
      gsap.to(instances.summary.chars, {
        x: 50,
        opacity: 0,
        stagger: {
          amount: 0.4,
          from: 'edges'
        },
        duration: 0.4,
        ease: 'power2.in'
      })
    }
  }

  return (
    <section className='min-h-max md:h-130 overflow-x-hidden md:overflow-hidden px-4 md:px-10 p-6 md:p-10 w-full'>
      <section className='flex flex-col md:flex-row h-full gap-4 md:gap-3'>
        {bibleThemes.map((item, index) => (
          <div
            key={item.id}
            ref={el => (boxRefs.current[index] = el)}
            onMouseEnter={e =>
              window.innerWidth > 768 && handleMouseEnter(e, index)
            }
            onMouseLeave={e =>
              window.innerWidth > 768 && handleMouseLeave(e, index)
            }
            className='h-64 md:h-full w-full md:min-w-60 md:grow transition-all duration-300 ease-in-out rounded-3xl
              text-white border group bg-black md:hover:bg-white md:hover:border-black
              will-change-transform transform-gpu cursor-pointer md:cursor-crosshair [font-kerning:none] [text-rendering:optimizeSpeed]
              overflow-hidden relative '
          >
            <div className='h-full md:group-hover:hidden flex w-full justify-center items-center p-6'>
              <div className='md:rotate-270 text-lg md:text-xl font-light font-mono whitespace-nowrap text-white'>
                {item.theme}
              </div>
            </div>

            {/* Expanded View (Hover on Desktop, or just show content/different interaction on mobile if needed) */}
            {/* For now keeping the group-hover logic but making it more accessible */}
            <div className='w-full hidden md:group-hover:flex h-full text-black p-6 pb-0 flex-col overflow-y-auto md:overflow-hidden'>
              <div className='flex flex-col gap-3 flex-1'>
                {/* Verse 1 */}
                <div className='flex flex-col gap-1'>
                  <p className='text-base md:text-lg font-semibold font-mono text-[#8f3337]'>
                    {item.verses[0].reference}
                  </p>
                  <p className='reference-text text-sm md:text-md font-medium text-gray-700'>
                    "{item.verses[0].text}"
                  </p>
                </div>

                {/* Verse 2 */}
                <div className='flex flex-col gap-1'>
                  <p className='text-base md:text-lg font-semibold font-mono text-[#8f3337]'>
                    {item.verses[1].reference}
                  </p>
                  <p className='reference-text text-sm md:text-md font-medium text-gray-700'>
                    "{item.verses[1].text}"
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className='summary mt-auto p-4 text-xs md:text-sm text-center font-medium bg-gray-50 rounded-t-2xl border-t-2 border-[#8f3337]'>
                {item.explanation}
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}

const bibleThemes = [
  {
    id: 1,
    theme: 'Faith & Trust',
    icon: '✨',
    verses: [
      {
        reference: 'Mark 11:24',
        text: 'Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.'
      },
      {
        reference: 'Hebrews 11:1',
        text: 'Now faith is confidence in what we hope for and assurance about what we do not see.'
      }
    ],
    explanation:
      'Both verses emphasize that faith is about confident belief—believing before seeing, trusting that God has already answered. Jesus teaches active belief in prayer while Hebrews defines faith as spiritual confidence in the unseen.'
  },
  {
    id: 2,
    theme: 'Strength in Weakness',
    icon: '💪',
    verses: [
      {
        reference: 'Philippians 4:13',
        text: 'I can do all this through him who gives me strength.'
      },
      {
        reference: '2 Corinthians 12:9',
        text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me."
      }
    ],
    explanation:
      "These verses work together beautifully—Paul declares he can do all things through Christ, and in Corinthians he explains why: God's power shines brightest in our weakness. True strength isn't self-sufficiency but complete dependence on Christ."
  },
  {
    id: 3,
    theme: "God's Unfailing Love",
    icon: '❤️',
    verses: [
      {
        reference: 'Jeremiah 31:3',
        text: "The Lord appeared to us in the past, saying: 'I have loved you with an everlasting love; I have drawn you with unfailing kindness.'"
      },
      {
        reference: 'Romans 8:38-39',
        text: 'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.'
      }
    ],
    explanation:
      "Jeremiah establishes God's love as everlasting and kind, while Romans powerfully declares that absolutely nothing can separate us from that love. Together they form an unbreakable promise—God's love has no beginning, no end, and no limits."
  },
  {
    id: 4,
    theme: 'Peace in Difficult Times',
    icon: '🕊️',
    verses: [
      {
        reference: 'John 14:27',
        text: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.'
      },
      {
        reference: 'Philippians 4:6-7',
        text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.'
      }
    ],
    explanation:
      "Jesus promises His supernatural peace—different from worldly peace—and Paul explains how to access it: through prayer with thanksgiving. The result is a peace that doesn't make logical sense, guarding our hearts against anxiety."
  },
  {
    id: 5,
    theme: 'Guidance & Direction',
    icon: '🗺️',
    verses: [
      {
        reference: 'Proverbs 3:5-6',
        text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.'
      },
      {
        reference: 'Psalm 32:8',
        text: 'I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.'
      }
    ],
    explanation:
      "Proverbs calls us to trust God rather than our own limited understanding, while Psalms reveals God's response—He promises to instruct, teach, and counsel us personally. Our part is trust; His part is guidance."
  }
]
