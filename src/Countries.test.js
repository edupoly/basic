import { fireEvent, render,screen } from "@testing-library/react"
import Counter from "./Counter"
import Countries from "./Countries"
import {fetchMock} from "./fetchMock"
beforeEach(()=>{
    jest.spyOn(window,'fetch').mockImplementation(fetchMock)
})
afterEach(()=>{
    jest.restoreAllMocks()
})
test('should load countries', async () => { 
    var {getByTestId} = render(<Countries></Countries>)    
    // const searchBtn = screen.getByRole("button", { name: "GetCountries" });
    // expect(searchBtn).not.toBeDisabled();
    // fireEvent.click(searchBtn);
    expect(await screen.findByText('India')).toBeInTheDocument()
    expect(await screen.findByText('Afghanistan')).toBeInTheDocument()
})
// test('should counter increment', () => { 
//     var {getByTestId} = render(<Counter></Counter>)    
//     fireEvent.click(getByTestId('inc'));
//     expect(getByTestId('counter')).toHaveTextContent(1)
// })
// test('should counter decrement', () => { 
//     var {getByTestId} = render(<Counter></Counter>)    
//     expect(getByTestId('dec')).toBeDisabled();
// })
// test('should counter decrement', () => { 
//     var {getByTestId} = render(<Counter></Counter>)    
//     fireEvent.click(getByTestId('inc'));
//     expect(getByTestId('dec')).not.toBeDisabled();
// })
// test('should counter decrement', () => { 
//     var {getByTestId} = render(<Counter></Counter>)    
//     fireEvent.click(getByTestId('inc'));
//     fireEvent.click(getByTestId('dec'));
//     expect(getByTestId('counter')).toHaveTextContent(0)
// })