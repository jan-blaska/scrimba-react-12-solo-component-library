import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "../hooks/useToggle"

export default function Star({ initialValue, onChange }) {
    const [on, toggle] = useToggle({
        initialValue: true, 
        onToggle: onChange
    })
    return (
        <>
            {
                on ?
                    <BsStarFill onClick={toggle} className="star filled" /> :
                    <BsStar onClick={toggle} className="star" />
            }
        </>
    )
}