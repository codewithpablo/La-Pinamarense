import Image from "next/image";
import Slider from "@/components/mine/sliders/Slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/mine/logos/Logo";

export default function Home() {
  return (
    <div className="w-[90%] lg:h-[100dvh] mx-auto ">
           
          <div className="flex flex-col lg:justify-center lg:flex-row lg:h-[100%]">
              <div className="py-5  flex flex-col gap-6 justify-center items-start  flex-1  lg:h-[100%] ">
                  <div className="flex w-full justify-start">
                      <Logo />
                  </div>
                  <h1 className="text-left text-6xl font-bold text-green-900">Combos, promos y ofertas en un solo lugar</h1>
                  <p className="text-left   text-gray-500 font-light">En nuestra fiambrería encontrarás una excelente selección de productos frescos y de calidad: jamones artesanales, quesos madurados, salames, mortadelas, bondiolas y mucho más. </p>
                  <div className=' flex flex-col  lg:flex-row items-center lg:items-start gap-2 w-full '>
                    <div className="flex gap-1">
                        { Array(5).fill(1).map((_, index) => (
                        <Image key={index}
                        src={"star.svg"}
                        alt=''
                        width={25}
                        height={25}
                        />
                      ))}
                </div>
                  <p className='font-bold whitespace-nowrap'>+2345 clientes registrados</p>
                </div>
                 <div className="flex justify-center lg:justify-start  w-full gap-3">
                       <Link href="/client/store" className="flex-1 lg:flex-0">
                            <Button  className="w-full hover:text-green-900 rounded-lg  lg:w-[150px]  border-transparent bg-green-900 hover:bg-white hover:border-1 hover:border-green-900">
                              Ingresar a la tienda
                          </Button>
                       </Link>
                      
                 </div>
              </div>
              <div className="flex items-center lg:py-5 flex-1  rounded-3xl overflow-hidden">
                    <Slider />
              </div>
        </div>
    </div>
  );
}
