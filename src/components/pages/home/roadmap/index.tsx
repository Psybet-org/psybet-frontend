import Style from './style';
import { ROADMAP } from '../../../../constants/strings';
import Image from 'next/image';

const HomeRoadmap = () => {
    return(
            <Style>
            <div className='bg-gray-950 desktop:p-12 p-6 scroll-mt-24' id='roadmap'>
                <div className='layout layout--center bg-gray-900 rounded-xl desktop:p-12'>
                    <h2 className='text-center desktop:text-5xl font-bold text-2xl text-white'>
                        {ROADMAP.TITLE}
                    </h2>
                    <div className='desktop:mt-12 mt-6 flex justify-between'>
                        {
                            ROADMAP.ITEMS.map((data,key) => {
                                const { DONE } = data;
                                return(
                                    <div key={data.TITLE} className='flex flex-col items-center gap-y-4 text-white'>
                                        <div className='relative flex items-center'>
                                            <Image 
                                                src={data.IMG} 
                                                alt={data.TITLE} 
                                                width={278} 
                                                height={278} 
                                                className='ml-4'
                                            />
                                            { DONE && <div className='absolute top-0 right-2 bottom-2 left-0 border-4 border-red-100 rounded-full'/>}
                                            { DONE && key !== ROADMAP.ITEMS.length - 1 &&  <div className='absolute right-0 -right-36'>
                                                     <Image width={144} height={4} alt='line' src='/home/roadmap-line.png'/>
                                                 </div>
                                            }
                                        </div>
                                        <h3 className='text-xl font-semibold'>{data.TITLE}</h3>
                                        <div className='flex flex-col text-lg items-center gap-y-2 font-poppins'>
                                            {data.PROPS.map(prps => <p key={prps} >{prps} </p>)}
                                        </div>
                                        <h4 className='text-xl'>{data.DATE}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            </Style>
    )
}

export default HomeRoadmap;