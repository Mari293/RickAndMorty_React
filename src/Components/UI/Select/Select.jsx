import './Select.css';

export const Select = ({event}) => {

    return(
        <>
            <select name="option" className="selectCharacter" onChange={event}>
                <option value="selectCharacter">Select Character</option>
                <option value="selectAllCharacter">All Characters</option>
            </select>
        </>
    )
}