import { fireEvent, render } from "@testing-library/react"
import Todolist from "./Todolist"

test("testing todo",()=>{
    const {getByTestId,getAllByTestId,queryAllByTestId}=render(<Todolist></Todolist>)
    expect(queryAllByTestId('todo').length).toBe(0)
})
test("testing add todo",()=>{
    const {getByTestId,getAllByTestId,queryAllByTestId}=render(<Todolist></Todolist>)
    fireEvent.change(getByTestId('inputtodo'),{ target: { value: 'go home' } })
    fireEvent.click(getByTestId('addbutton'))
    expect(getByTestId('todo').firstChild).toHaveTextContent('go home')
    expect(queryAllByTestId('todo').length).toBe(1)
})