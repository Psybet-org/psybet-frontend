import Image from 'next/image';
import Style from './style';
import Button from '../../../../components/utilities/button';

import { HOME } from '../../../../constants/strings';

const HomeHeader = () => {
    return(
        <Style>
            <div className='w-full bg-gray-200 h auto relative'>
                <Image 
                    src='/home/home-header-bg.png' 
                    width={1512}
                    height={675}
                    layout={'responsive'}
                />
                <div className='layout relative layout--center'>

                    <div className='absolute left-0 bottom-24 flex flex-col gap-y-8 text-white'>
                        <h2 className='whitespace-pre desktop:text-6xl desktop:leading-9 font-bold'> {HOME.HEADER.TITLE} </h2>
                        <h2 className='font-poppins whitespace-pre desktop:text-xl desktop:leading-4 font-semibold'> {HOME.HEADER.DESCRIPTION} </h2>
                        <div>
                            <Button>
                                Play Game
                            </Button>
                        </div>
                    </div>

                    <div className='absolute bottom-0 -mb-1 right-0'>
                        <div className='relative flex items-center flex-col'>
                            <div className='absolute bottom-12 z-20'>
                                <Image width={953} height={765} src='/home/logo.png'/>
                            </div>
                            <div>
                                <Image width={663} height={332} src='/home/half-circle.png'/>
                            </div>
                        </div>
                    </div>


                </div>

                </div>
        </Style>
    )
}

export default HomeHeader;