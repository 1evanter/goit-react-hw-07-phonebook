import { useDispatch, useSelector } from "react-redux"
import { Input } from "./Filter.styled"
import { Label } from "components/ContactForm/ContactForm.styled"
import { changeFilter } from "redux/filterSlice";

export const Filter = () => {
    
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)

    return (
        <Label>
            Find contacts by name
        <Input type="text" onChange={(e) => dispatch(changeFilter(e.currentTarget.value))} value={filter} name="filter"/>
        </Label>
    )
}