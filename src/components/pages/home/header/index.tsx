import Image from 'next/image';
import Style from './style';
import Button from '../../../../components/utilities/button';
import DiscordComponent from "../../../utilities/socials/discord";

import { HOME } from '../../../../constants/strings';
import { DISCORD_URL } from '../../../../constants/links';

const HomeHeader = () => {
    return(
        <Style>
            <div className='w-full bg-gray-200 h auto relative'>
                <Image 
                    src='/home/home-header-bg.png' 
                    width={1512}
                    height={675}
                    layout={'responsive'}
                    quality={100}
                />
                <div className='layout relative layout--center'>

                    <div className='absolute left-0 bottom-16 flex flex-col gap-y-8 text-white'>
                        <h2 className='whitespace-pre desktop:text-6xl desktop:leading-9 font-bold'> {HOME.HEADER.TITLE} </h2>
                        <h2 className='font-poppins whitespace-pre desktop:text-xl desktop:leading-4 font-semibold'> {HOME.HEADER.DESCRIPTION} </h2>
                        <div className='flex items-center gap-x-2'>
                            <div className='flex'>
                                <Button>
                                    Play Game
                                </Button>
                            </div>
                            <a href={DISCORD_URL}>
                                <DiscordComponent/>
                            </a>
                        </div>
                    </div>

                    <div className='absolute bottom-0 mb-28 right-0'>
                        <div className='relative'>
                                <Image 
                                    width={340} 
                                    height={340} 
                                    src='/main/logo-pic.png' 
                                    quality={100}
                                />
                        </div>
                    </div>


                </div>

                </div>
        </Style>
    )
}

export default HomeHeader;