const COLORS = [
    ['rgb(232 121 249)', 'rgb(96 165 250)', 'rgb(94 234 212)'],
    ['rgb(232 121 249)', 'rgb(94 234 212)', 'rgb(96 165 250)'],
    ['rgb(94 234 212)', 'rgb(232 121 249)', 'rgb(96 165 250)'],
    ['rgb(94 234 212)', 'rgb(96 165 250)', 'rgb(232 121 249)'],
    ['rgb(96 165 250)', 'rgb(94 234 212)', 'rgb(232 121 249)'],
    ['rgb(96 165 250)', 'rgb(232 121 249)', 'rgb(94 234 212)'],
]
const DURATION_SCALE = 30
const COUNT = 5

export default function Background() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none w-screen h-screen mix-blend-screen"
            style={{
                maskImage:
                    "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.6) 90%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.6) 90%, transparent 100%)",
            }}>
            {Array.from({ length: COUNT }).map((_, i) => {
                const [c1, c2, c3] =
                    COLORS[Math.floor(Math.random() * COLORS.length)]
                return (
                    <div
                        key={i}
                        className="absolute top-0 h-full w-0 rounded-2xl rounded-b-full origin-top-right animate-slide"
                        style={{
                            animationDuration: `${DURATION_SCALE}s`,
                            animationDelay: `${-(i / COUNT) * DURATION_SCALE}s`,
                            boxShadow: `
                            -50px 0 50px 25px ${c1},
                            0 0 50px 25px ${c2},
                            50px 0 50px 25px ${c3}`,
                            filter: 'blur(36px) saturate(90%)',
                        }}
                    />
                )
            })}
        </div>
    )
}
