// testing functionality
import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

// our own components
import TodoList from '../components/TodoList';

// "test 0"
test(
  'test name',
  () => { /* callback function, the actual test logic */ }
)

/* when we do a test, we want three 'stages':
   1. setup  - establish expected result, gather necessary parts, etc.
   2. act    - fire any logic we're testing correct functionality for
   3. assert - compare/examine result 
*/

// test 1: check for static title
test(
  'todo list title renders correctly',
  () => {
    // 1. setup
    render(<TodoList />)
    const titleElement = screen.getByText("Our Todo List")
    // 2. act - no logic to fire here, just the DOM extraction above
    // 3. assert
    expect(titleElement).toBeInTheDocument();
  }
)

// test 2: testing behavioural logic (todo list submission)
//         a 'bad test' - testing too many things at once (input field AND list addition)
test(
  'todo item adds successfully to list',
  () => {
    // 1. setup
    render(<TodoList />)
    const inputElement = screen.getByLabelText("New Todo")  // different ways of sniping elements:
    const EXPECTED_STRING = "Learn Testing in Javascript"

    // 2. act
    fireEvent.change(
      inputElement, // the element I want to fire a change event on
      { target: { value: EXPECTED_STRING } }
    )

    // 3. assert
    expect(inputElement.value).toBe(EXPECTED_STRING)
  }
)
