import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Modal } from '../modal';

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

    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('modal-inner-content')).toBeInTheDocument();
    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
  });

  it('should not render the modal when isOpen is false', () => {
    renderModal(false);

    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(0);
    expect(screen.queryByTestId('modal-inner-content')).toBeNull();
    expect(screen.queryByTestId('modal-content')).toBeNull();
  });

  it('should render the title when provided', () => {
    renderModal(true, { title: 'Test Title' });

    expect(screen.getByTestId('modal-title')).toBeInTheDocument();
    expect(screen.getByTestId('modal-title')).toHaveTextContent('Test Title');
  });

  it('should close the modal when the close button is clicked', async () => {
    renderModal();

    const closeButton = screen.getByTestId('modal-close-button');

    fireEvent.click(closeButton);

    expect(HTMLDialogElement.prototype.close).toHaveBeenCalledTimes(1);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('modal-content')).toBeNull();
    expect(screen.queryByTestId('modal')).toBeNull();
  });

  it('should close the modal when the overlay is clicked', async () => {
    renderModal();

    const modal = screen.getByTestId('modal');

    fireEvent.mouseDown(modal, {
      clientX: 0,
      clientY: 100,
    });

    expect(HTMLDialogElement.prototype.close).toHaveBeenCalledTimes(1);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('modal-content')).toBeNull();
  });

  it('should apply custom className to the modal', () => {
    const className = 'custom-class';

    renderModal(true, { className });
    const modalContent = screen.getByTestId('modal');

    expect(modalContent).toHaveClass(className);
  });
});
