import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";

const ModalContainer = ({
  children,
  wrapClass,
  titleClass,
  title,
  show,
  as,
  onClose,
  ...props
}) => {
  const dummyClose = () => {
    return false;
  };

  const styles = {
    dialog_transition: {
      enter: "ease-out duration-300",
      enter_from: "opacity-0 scale-95",
      enter_to: "opacity-100 scale-100",
      leave: "ease-in duration-200",
      leave_from: "opacity-100 scale-100",
      leave_to: "opacity-0 scale-95",
    },
    dialog_wrap:
      "modal bg-[#fcfbf6] rounded-xl p-6 pb-9 fixed top-3 right-3 max-w-[434px] w-full",
    dialog_title:
      "modal-title ff-chronicle-display text-2xl pb-6 mb-6 border-b border-b-[#2d2d2d1a]",
    dialog_close: {
      default:
        "absolute top-0 right-0 w-8 h-8 flex justify-center items-center",
      hover:
        "hover:scale-125 transition-transform duration-300 ease-in-out will-change-transform",
    },
  };

  return (
    <Transition appear show={show} as={as ?? Fragment}>
      <Dialog as="div" className="relative z-10" onClose={dummyClose}>
        <Transition.Child
          as={Fragment}
          enter={styles.dialog_transition.enter}
          enterFrom={styles.dialog_transition.enter_from}
          enterTo={styles.dialog_transition.enter_to}
          leave={styles.dialog_transition.leave}
          leaveFrom={styles.dialog_transition.leave_from}
          leaveTo={styles.dialog_transition.leave_to}
        >
          <div
            className={`${wrapClass ?? ""} ${styles.dialog_wrap}`}
            {...props}
          >
            <Dialog.Panel>
              <div className="relative">
                <h2 className={`${titleClass} ${styles.dialog_title}`}>
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className={`${styles.dialog_close.default} ${styles.dialog_close.hover}`}
                >
                  <Image
                    src="/icons/icon-close.svg"
                    width={20}
                    height={20}
                    alt="close-button"
                  />
                </button>
              </div>
              {children}
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalContainer;
