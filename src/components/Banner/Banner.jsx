import classnames from "classnames"

export default function Banner({ title, text, status, size, className, ...rest }) {

    const icons = {
        success: "./check-circle.png",
        warning: "./exclamation.png",
        error: "./x-circle.png",
        neutral: "./info-icon.png"
    }

    let titleClass = title && `banner-${status}-title banner-title`
    let textClass = text && `banner-${status}-text banner-text`
    let statusClass = status && `banner-${status}`
    let sizeClass = size && `banner-${size}`

    const allClasses = classnames('banner', statusClass, sizeClass, className)

    return (
        
        <div className={allClasses} {...rest}>
            <img src={icons[status]} alt={`icon ${status}`} />
            <div>
                <p className={titleClass}>{title}</p>
                {text && <p className={textClass}>{text}</p>}
            </div>
        </div>
    )
}