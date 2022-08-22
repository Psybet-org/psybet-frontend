import LayoutHeader from "./layoutHeader";

export interface AuxProps  { 
    children: React.ReactNode
}

const Layout = ( {children} :AuxProps  ) => {
    // const isMobile = useIsMobile();

    return(
        <div className="flex flex-col w-full ">
        <LayoutHeader/>
            <div className="desktop:my-28">
                {children}
            </div>
        </div>
    )
}

export default Layout;