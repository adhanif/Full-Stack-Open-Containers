import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Todo from './../Todos/Todo';

describe('Todo component', () => {
  const todo = {
    text: 'Learn Docker',
    done: false,
  };

  test('renders todo text', () => {
    render(<Todo todo={todo} onDelete={vi.fn()} onComplete={vi.fn()} />);

    expect(screen.getByText('Learn Docker')).toBeInTheDocument();
  });
});
