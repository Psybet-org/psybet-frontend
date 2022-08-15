import classnames from 'classnames';

export default (props : any) => {

    const { size = 'md' , theme = 'danger' } : {
        size : 'sm' | 'md' | 'lg' ,
        theme : 'danger' | 'normal' | 'link'
    } = props; 


    const sizes : any = {
        md : 'desktop:text-md text-sm rounded-md desktop:px-4 px-2'
    }

    const themes : any = {
        danger : 'bg-red-100'
    }

    return <button {...props} className={classnames("text-white", sizes[size] , themes[theme], props.className)}/>
}