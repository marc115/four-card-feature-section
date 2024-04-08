import Image from "next/image"

interface Props {
  bgColor: string,
  title: string,
  description: string,
  icon: string,
}

export const Card = ({bgColor, title, description, icon}: Props) => {
  return (
    <div className="bg-white w-full h-64 rounded-xl shadow-xl">
      <hr className={`top-1 ${bgColor} h-2 rounded-t-xl`} />

      <div className="flex flex-col justify-around h-full px-10 py-3">
        <div className="flex flex-col gap-y-3">
          <h2 className="font-bold text-xl">{title}</h2>
          <p>
            {description}
          </p>

        </div>
        <Image className="ml-auto" src={icon} alt="icon" />
      </div>
    </div>
  )
}
