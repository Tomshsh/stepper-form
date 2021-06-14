import { InputBase, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
    inputWrap: {
        borderBottom: "2px solid",
        borderColor: "theme.palette.text.secondary",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "baseline",
        transition: 'border-color 300ms ,width 0.5s',
        '&:hover': {
            borderColor: theme.palette.info.main,
            cursor: 'text'
        },
    },

}))


const TitleInput = (props) => {

    const { value, onChange, style, className, endAdornment, ...other } = props

    const [inFocus, setFocus] = useState(false)

    const inputRef = useRef()

    const handleFocus = (e) => {
        if (!inFocus) {
            setFocus(true)
        }
    }

    const handleBlur = () => {
        setFocus(false)
    }

    useEffect(() => {
        if (inFocus) { inputRef.current.click() }
    }, [inFocus])

    const classes = useStyles()

    return (
        <div
            onClick={handleFocus}
            onBlur={handleBlur}
            className={clsx(classes.inputWrap, { [classes.active]: inFocus }, className)}
            style={style}>

            {
                inFocus ?
                    < InputBase
                        ref={inputRef}
                        onChange={onChange}
                        value={value.value}
                        {...other}
                    /> : <Typography variant="h5">{value.title}</Typography>
            }
            {endAdornment}
        </div>);
}

export default TitleInput;