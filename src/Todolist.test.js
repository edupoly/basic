import { fireEvent, render } from "@testing-library/react"
import Todolist,{ abc} from "./Todolist"
import greeter from './myfuns'
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
test('testing abc ',()=>{
    var mockcb = jest.fn(x=>34+x)
    abc([10,20,50],mockcb)
    expect(mockcb.mock.calls.length).toBe(3)
    expect(mockcb.mock.calls[0][0]).toBe(10)
    expect(mockcb.mock.calls[1][0]).toBe(20)
    expect(mockcb.mock.results[0].value).toBe(44)
    expect(mockcb.mock.results[0].value).toBe(44)
    expect(mockcb.mock.results[1].value).toBe(54)
})
test('testing greeting function with mock',()=>{
    var mockGetFullName = jest.fn().mockReturnValue('praveen gubbala')
    greeter.getFullName = mockGetFullName;
    greeter.greet('praveen','gubbala')
    expect(mockGetFullName.mock.calls.length).toBe(1)
    expect(mockGetFullName.mock.calls[0][0]).toBe('praveen')
    expect(mockGetFullName.mock.calls[0][1]).toBe('gubbala')
    expect(mockGetFullName.mock.results[0].value).toBe('praveen gubbala')
    expect(mockGetFullName).toHaveBeenCalledWith('praveen','gubbala')
})