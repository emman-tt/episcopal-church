export function Dots ({ gapy = 10, gapx = 15 ,className}) {
  return (
    <div
      className={`grid grid-cols-5 w-40 gap-y-${gapy} gap-x-${gapx} grid-rows-4 ${className}`}
    >
      {dots.map((item, i) => (
        <div
          key={i}
          className='inline-block bg-[#8e3635] rounded-full w-1 h-1'
        ></div>
      ))}
    </div>
  )
}

const dots = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
