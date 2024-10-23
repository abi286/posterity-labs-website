import { Button } from "../Home/Button"

const Footer2 = () => {
  return (
    <div className="flex flex-col w-full h-full items-center text-center gap-20">
        <div className="flex justify-center">
            <h1 className="text-2xl px-10">Upgrade your Digital 
            presence with <span className="text-red-500">Posterity Labs</span></h1>
        </div>
        <div className="flex flex-col gap-4">
            <Button/>
            <p className="text-lg font-extralight">Schedule a call with us</p>
        </div>
        
    </div>
  )
}

export default Footer2 