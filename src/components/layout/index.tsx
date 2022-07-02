export interface AuxProps  { 
    children: React.ReactNode
}

const Layout = ( {children} :AuxProps  ) => {
    // const isMobile = useIsMobile();

    return(
        <div className="py-32 text-lg layout layout--center">
            {children}
        </div>
    )
}

export default Layout;