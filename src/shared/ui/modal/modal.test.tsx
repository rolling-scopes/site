import React, { useEffect, useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Modal } from '../modal';
import '@testing-library/jest-dom/vitest';

const TestModalWrapper: React.FC<{
  initialIsOpen?: boolean;
  children: React.ReactNode;
  onCloseMock: () => void;
}> = ({ initialIsOpen = true, children, onCloseMock, ...props }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const handleClose = () => {
    setIsOpen(false);
    onCloseMock();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} {...props}>
      {children}
    </Modal>
  );
};

describe('Modal Component', () => {
  const onCloseMock = vi.fn();

  const renderModal = (
    initialIsOpen: boolean = true,
    props = {},
    children = <div data-testid="modal-inner-content">Modal Content</div>,
  ) => {
    render(
      <TestModalWrapper initialIsOpen={initialIsOpen} onCloseMock={onCloseMock} {...props}>
        {children}
      </TestModalWrapper>,
    );
  };

  beforeEach(() => {
    onCloseMock.mockClear();
  });

  it('should render the modal when isOpen is true', () => {
    renderModal();
    expect(screen.getByTestId('modal-inner-content')).toBeInTheDocument();
    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
  });

  it('should not render the modal when isOpen is false', () => {
    renderModal(false);
    expect(screen.queryByTestId('modal-inner-content')).toBeNull();
    expect(screen.queryByTestId('modal-content')).toBeNull();
  });

  it('should render the title when provided', () => {
    renderModal(true, { title: 'Test Title' });
    expect(screen.getByTestId('modal-title')).toBeInTheDocument();
    expect(screen.getByTestId('modal-title')).toHaveTextContent('Test Title');
  });

  it('should render custom header when provided', () => {
    const customHeader = <h1 data-testid="custom-header">Custom Header</h1>;

    renderModal(true, { customHeader });
    expect(screen.getByTestId('custom-header')).toBeInTheDocument();
  });

  it('should close the modal when the close button is clicked', async () => {
    renderModal();
    const closeButton = screen.getByTestId('modal-close-button');

    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('modal-content')).toBeNull();
    expect(screen.queryByTestId('modal-overlay')).toBeNull();
  });

  it('should close the modal when the overlay is clicked', async () => {
    renderModal();

    fireEvent.mouseDown(screen.getByTestId('modal-overlay'));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('modal-content')).toBeNull();
    expect(screen.queryByTestId('modal-overlay')).toBeNull();
  });

  it('should close the modal when the Escape key is pressed', async () => {
    renderModal();

    fireEvent.keyDown(document.body, {
      key: 'Escape',
      code: 'Escape',
      charCode: 27,
    });

    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('modal-content')).toBeNull();
    expect(screen.queryByTestId('modal-overlay')).toBeNull();
  });

  it('should focus on the modal when it opens', () => {
    renderModal();
    expect(screen.getByTestId('modal-content')).toHaveFocus();
  });

  it('should focus back to the previously focused element when modal is closed', async () => {
    const FocusButton = () => {
      const buttonRef = React.useRef<HTMLButtonElement>(null);

      useEffect(() => {
        buttonRef.current?.focus();
      }, []);

      return (
        <button ref={buttonRef} data-testid="focus-button">
          Test Button
        </button>
      );
    };

    render(<FocusButton />);
    const button = screen.getByTestId('focus-button');

    expect(button).toHaveFocus();

    renderModal();

    fireEvent.click(screen.getByTestId('modal-close-button'));

    expect(button).toHaveFocus();
  });

  it('should not close the modal when clicking inside the modal content', () => {
    renderModal();

    fireEvent.mouseDown(screen.getByTestId('modal-content'));

    expect(onCloseMock).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
    expect(screen.getByTestId('modal-overlay')).toBeInTheDocument();
  });

  it('should apply custom className to the modal', () => {
    const className = 'custom-class';

    renderModal(true, { className });
    const modalContent = screen.getByTestId('modal-content');

    expect(modalContent).toHaveClass(className);
  });
});
