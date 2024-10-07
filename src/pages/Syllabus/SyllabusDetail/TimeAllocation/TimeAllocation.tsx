//drawing PieChart and TimeAlloctation
import { useEffect, useRef } from 'react'
import styles from './TimeAllocation.module.css'

interface TimeAllocationProps {
  data: number[]
  height?: number
  width?: number
}

//const timeAllocationData: number[] = [54, 29, 9, 1, 6]
//<TimeAllocation data={timeAllocationData} height and width if you need to fix size/>
const PieChart: React.FC<TimeAllocationProps> = ({ data, height = 120, width = 120 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const labels = [
    'Assignment/Lab',
    'Concept/Lecture',
    'Guide/Review',
    'Test/Quiz',
    'Exam',
  ]
  const colors = ['#F4BE37', '#FF9F40', '#0D2535', '#5388D8', '#206EE5']

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const total = data.reduce((acc, value) => acc + value, 0)
    let startAngle = -0.5 * Math.PI

    data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI
      const endAngle = startAngle + sliceAngle

      ctx.beginPath()
      ctx.moveTo(canvas.width / 2, canvas.height / 2)
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.height / 2,
        startAngle,
        endAngle
      )
      ctx.closePath()
      ctx.fillStyle = colors[index]
      ctx.fill()

      startAngle = endAngle
    })
  }, [])

  return (
    <>
      <p className={styles.timeHeader}>Time Allocation</p>
      <div className={styles.chartContainer}>
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className={styles.canvas}
        ></canvas>
        <ul className={styles.PieChartDescription}>
          {labels.map((label, index) => (
            <li
              key={index}
              style={{ '--chart-color': colors[index] } as React.CSSProperties}
            >
              {label} <p> ({data[index]}%)</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default PieChart
