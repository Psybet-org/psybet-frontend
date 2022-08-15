import Link from "next/link";
import strings from '../../constants/strings';
import { HEADER_SOCIALS } from "../../constants/links";
import Image from 'next/image';
import Button from '../../components/utilities/button';

const LayoutHeader = () => {
    return (
        <nav className="w-full bg-gray-900 desktop:py-8 fixed right-0 top-0 left-0">
            <div className="layout layout--center flex justify-between">
                <div className="flex items-center gap-x-12 text-white">
                    <Link href={'https://www.psybet.io'}>
                        <a>
                            PSYbet
                        </a>
                    </Link>
                    { strings.HOME_MENUS.map(menu => 
                        <div key={menu.title}>
                            <Link href={menu.href}>
                                <a>
                                    {menu.title}
                                </a>
                            </Link>
                        </div>
                     )}
                </div>
                <div className="flex items-center gap-x-4">
                    {
                        HEADER_SOCIALS.map(({ title ,image , link}) => {
                            return (
                                <a 
                                    key={title} 
                                    className="border-red-100 h-12 w-12 p-2 w-12 border flex items-center justify-center rounded-md relative" 
                                    target={'_blank'} 
                                    href={link}
                                >
                                        <Image width={20} height={15} src={image} />
                                </a>
                            )
                        })
                    }
                    <Button className='h-12'>
                        {strings.LAUNCH_APP}
                    </Button>
                </div>
            </div>

        </nav>
    )
}

export default LayoutHeader;