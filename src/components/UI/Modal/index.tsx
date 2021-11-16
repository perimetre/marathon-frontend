import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import ReactPortal from '../ReactPortal';
import { X } from 'react-feather';

export type ModalProps = {
  /**
   * Whether or not the modal should be open
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * Callback to update the isOpen state
   */
  onToggle?: () => void;
  /**
   * Whether or not the top section with the close button should be absolute or not.
   * If yes. It won't push the content down and the padding should be set on the children component.
   */
  isHeaderAbsolute?: boolean;
  /**
   * A title string
   */
  title?: string;
  /**
   * A component that if provided will add a "actions" footer
   */
  actions?: () => React.ReactNode;
};

/**
 * A Modal
 *
 * @param props The component props
 * @param props.isOpen Whether or not the modal should be open
 * @param props.onToggle Callback to update the isOpen state
 * @param props.isHeaderAbsolute Whether or not the top section with the close button should be absolute or not.
 * @param props.title A title string
 * @param props.actions A component that if provided will add a "actions" footer
 * @param props.children The provided children content
 */
const Modal: React.FC<ModalProps> = ({ onToggle, isOpen: isOpenProps, isHeaderAbsolute, title, actions, children }) => {
  const [isOpen, setIsOpen] = useState(!!isOpenProps);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => setIsOpen(!!isOpenProps), [isOpenProps]);

  useEffect(() => {
    /**
     * If pressing esc
     *
     * @param e the event parameter provided by javascript
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const escape = (e: any) => {
      if (e.keyCode === 27 && isOpen && onToggle) {
        onToggle();
      }
    };
    document.addEventListener('keydown', escape);

    // Component unmounted
    return () => {
      document.removeEventListener('keydown', escape);
    };
  }, [onToggle, isOpen]);

  return (
    <ReactPortal selector="#modal-root">
      <div className={classNames('mui-modal', { open: isOpen })}>
        <div className="mui-modal-container">
          <div className={classNames('mui-modal-header', { absolute: isHeaderAbsolute })}>
            <h3>{title}</h3>
            <button className="p-4 mui-btn-icon text-mui-paragraph-900" onClick={onToggle}>
              <X className="mui-animate-scaleHover-target" />
            </button>
          </div>
          <div className="mui-modal-content">{children}</div>
          {actions && <div className="mui-modal-actions">{actions()}</div>}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
