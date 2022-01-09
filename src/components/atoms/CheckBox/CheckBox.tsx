import './CheckBox.scss'

export const CheckBox = () => {
    return (
        <div className='checkbox'>
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check">Recuérdame</label>
        </div>
    )
}
