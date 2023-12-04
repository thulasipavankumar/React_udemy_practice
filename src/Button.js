
import className from 'classnames'

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) => {
    const classes = className(rest.className,
        'flex items-center px-3 py-1.5 border',{
        'border-blue-600 bg-blue-500 text-white':primary,
        'border-gray-900 bg-gray-900 text-white':secondary,
        'border-green-600 bg-green-500 text-white':success,
        'border-yellow-600 bg-yellow-500 text-white':warning,
        'border-red-500 bg-red-500 text-white':danger,
        'rounded-full':rounded,
        'bg-white':outline
        
    })
   
    return <button  {...rest} className={classes}>{children}</button>
}


export default Button