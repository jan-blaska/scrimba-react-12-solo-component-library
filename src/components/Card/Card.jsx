import classnames from "classnames"
import { RxComponent1 } from 'react-icons/rx'

export default function Card({title, text, icon, iconBgColor, iconColor, className, ...rest}) {
    
    
    // let sizeClass = size && `card-${size}`

    const allClasses = classnames('card', className)

    return (
        <div className="card-area">
            <div className={allClasses} {...rest}>
                <h1 className="card-title">{title}</h1>
                <p className="card-text">{text}</p>
            </div>
            <div className="card-icon" style={{backgroundColor: iconBgColor ? iconBgColor : "white", color: iconColor ? iconColor : "black"}}>
                {icon ? icon : <RxComponent1 />}
            </div>
        </div>
    )
}