import { render, screen, fireEvent } from '@testing-library/react';
import MadlibForm from './src/MadlibForm';

describe('MadlibForm', () => {
    const mockOnSubmit = jest.fn(); // Mock function for onSubmit

    // Reset the mock function before each test
    beforeEach(() => {
        mockOnSubmit.mockClear();
    });

    test('renders form inputs correctly', () => {
        render(<MadlibForm onSubmit={mockOnSubmit} />);

        // Check if the input fields are rendered
        expect(screen.getByLabelText(/Noun 1:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Adjective 1:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Verb:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Noun 2:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Adjective 2:/i)).toBeInTheDocument();
    });

    test('should call onSubmit with input values when form is submitted', () => {
        render(<MadlibForm onSubmit={mockOnSubmit} />);

        // Simulate user typing into input fields
        fireEvent.change(screen.getByLabelText(/Noun 1:/i), { target: { value: 'dog' } });
        fireEvent.change(screen.getByLabelText(/Adjective 1:/i), { target: { value: 'furry' } });
        fireEvent.change(screen.getByLabelText(/Verb:/i), { target: { value: 'run' } });
        fireEvent.change(screen.getByLabelText(/Noun 2:/i), { target: { value: 'cat' } });
        fireEvent.change(screen.getByLabelText(/Adjective 2:/i), { target: { value: 'sneaky' } });

        // Simulate form submission
        fireEvent.click(screen.getByText(/Create Story/i));

        // Check if onSubmit is called with the correct data
        expect(mockOnSubmit).toHaveBeenCalledWith({
            noun1: 'dog',
            adjective1: 'furry',
            verb: 'run',
            noun2: 'cat',
            adjective2: 'sneaky'
        });
    });

    test('should not call onSubmit if any field is empty', () => {
        render(<MadlibForm onSubmit={mockOnSubmit} />);

        // Simulate incomplete form data
        fireEvent.change(screen.getByLabelText(/Noun 1:/i), { target: { value: 'dog' } });
        fireEvent.change(screen.getByLabelText(/Adjective 1:/i), { target: { value: '' } }); // Leave this empty

        // Simulate form submission
        fireEvent.click(screen.getByText(/Create Story/i));

        // onSubmit should not be called if any field is empty
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('should reset input fields when story template changes', () => {
        const { rerender } = render(<MadlibForm onSubmit={mockOnSubmit} selectedStory="story1" />);

        // Simulate user typing into input fields
        fireEvent.change(screen.getByLabelText(/Noun 1:/i), { target: { value: 'dog' } });

        // Re-render the component with a different selected story
        rerender(<MadlibForm onSubmit={mockOnSubmit} selectedStory="story2" />);

        // Check if the input field has been reset
        expect(screen.getByLabelText(/Noun 1:/i).value).toBe('');
    });
});
