interface TagProps {
  value?: string
  rounded?: boolean
  icon?: string
  color?:
    | 'primary'
    | 'secondary'
    | 'orange'
    | 'blue'
    | 'brown'
    | 'white'
    | 'peach'
    | 'green'
  onHandleClick?: ((event: any) => void) | undefined
}

export default function TagContained({
  value,
  icon,
  color = 'primary',
  onHandleClick,
}: TagProps) {
  const colorClasses: { [key: string]: string } = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    orange: 'bg-orange',
    blue: 'bg-blue',
    brown: 'bg-brown',
    white: 'bg-white',
    peach: 'bg-peach',
    green: 'bg-green',
  }

  return (
    <>
      <div
        className={`${colorClasses[color]} text-white w-[max-content] text-center rounded-[50px] `}
      >
        <p className=" px-[15px] py-[8px] text-sm flex items-center gap-1">
          {value}
          <i
            className={`${icon} text-xs cursor-pointer `}
            onClick={e => onHandleClick?.(value)}
          ></i>
        </p>
      </div>
    </>
  )
}
