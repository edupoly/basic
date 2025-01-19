import { fireEvent, render } from "@testing-library/react"
import Counter from "./Counter"

test('should counter start with 0', () => { 
    var {getByTestId} = render(<Counter></Counter>)    
    expect(getByTestId('counter')).toHaveTextContent(0)
})
test('should counter increment', () => { 
    var {getByTestId} = render(<Counter></Counter>)    
    fireEvent.click(getByTestId('inc'));
    expect(getByTestId('counter')).toHaveTextContent(1)
})
test('should counter decrement', () => { 
    var {getByTestId} = render(<Counter></Counter>)    
    expect(getByTestId('dec')).toBeDisabled();
})
test('should counter decrement', () => { 
    var {getByTestId} = render(<Counter></Counter>)    
    fireEvent.click(getByTestId('inc'));
    expect(getByTestId('dec')).not.toBeDisabled();
})
test('should counter decrement', () => { 
    var {getByTestId} = render(<Counter></Counter>)    
    fireEvent.click(getByTestId('inc'));
    fireEvent.click(getByTestId('dec'));
    expect(getByTestId('counter')).toHaveTextContent(0)
})