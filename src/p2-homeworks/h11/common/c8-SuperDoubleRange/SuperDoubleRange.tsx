import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number],
    value1: number,
    value2:number

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        className,
        onChange,
        value1,
        value2,

        ...restProps// min, max, step, disable, ...
    }
) => {
    //сделать самому, можно подключать библиотеки


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange([+e.currentTarget.value, +e.currentTarget.value])

    }

    console.log(value)

    const finalRangeClassName = `${s.doubleInput} ${className ? className : ''}`


    return (
        <span className={s.doubleInput}>
            <span className={s.firstInput}><input
                value={value1}
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            /></span>
            <span className={s.secondInput}><input
                value={value2}
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            /></span>
        </span>


    )
};

export default SuperDoubleRange

