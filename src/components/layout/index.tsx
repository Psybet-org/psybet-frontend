import LayoutHeader from "./layoutHeader";

export interface AuxProps  { 
    children: React.ReactNode
}

const Layout = ( {children} :AuxProps  ) => {
    // const isMobile = useIsMobile();

    return(
        <div>
        <LayoutHeader/>
            <div className="desktop:py-32 text-lg layout layout--center">
                {children}
            </div>
        </div>
    )
}

export default Layout;