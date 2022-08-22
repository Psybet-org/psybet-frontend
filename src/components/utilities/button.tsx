import classnames from 'classnames';

export default (props : any) => {

    const { size = 'md' , theme = 'default',type = 'default' } : {
        size : 'sm' | 'md' | 'lg' ,
        theme : 'default' | 'link',
        type: 'default' | 'second'
    } = props; 


    const sizes : any = {
        md : 'desktop:text-lg text-sm rounded-md desktop:px-12 px-4 py-2 shadow-lg font-semibold'
    }

    const themes : any = {
        default : 'bg-gradient-to-tr font-poppins from-red-100 to-green-100 hover:from-red-200 hover:to-red-300'
    }

    const types : any = {
        default : `rounded-full transition-colors duration-300 ease-in-out`
    }

    return <button {...props} className={classnames("text-white", sizes[size] , themes[theme], types[type], props.className)}/>
}