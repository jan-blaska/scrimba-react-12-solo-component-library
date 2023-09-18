import classnames from "classnames"
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

export default function TestimonialWithImage({imageSrc, authorName, authorRole, children, className, ...rest}) {


    const allClasses = classnames('testimonial-with-image', className)

    return (
        <div className="testimonial-with-image-area" >
            <img src={imageSrc} alt="portrait image" />
            <div className={allClasses} {...rest}>
                <BiSolidQuoteAltLeft className="quotation-mark"/>
                <h1 className="main-text">{children}</h1>
                <p className="author"><span className="author-name">{authorName}</span>{authorRole}</p>
            </div>

        </div>
    )
}