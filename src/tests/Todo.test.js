import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import InputToDo from '../Pages/todo_list/components/InputToDo';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('Home component', () => {
  it('renders profile information', () => {
    const initialState = {
      methods: {
        inputValue: '',
        editValue: '',
        listTODO: [],
        editMode: false,
        itemIndex: null,
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <InputToDo />
      </Provider>
    );

    const todoLabel = screen.getByLabelText('Todo');
    expect(todoLabel).toBeInTheDocument();
   
    const addButton = screen.getByText('Add');
    expect(addButton).toBeInTheDocument();
  });
});
