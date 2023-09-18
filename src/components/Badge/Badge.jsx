import classnames from "classnames"

export default function Badge( {children, size, color, variant, className, ...rest} ) {
    
    let sizeClass = size && `badge-${size}`
    let colorClass = color && `badge-${color}`
    let variantClass = variant && `badge-${variant}`

    const allClasses = classnames(sizeClass, colorClass, variantClass, className)

    return (
        <div className={allClasses} {...rest}>
            {children}
        </div>
    )
}