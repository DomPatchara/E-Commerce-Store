"use client";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "./icon-button";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog className="relative z-10" onClose={onClose}>

        {/**overlay background */}
        <div className="fixed inset-0 bg-black opacity-50" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="min-h-full flex items-center justify-center p-10 text-center">

            {/** Animation Transition */}
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 sacle-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg text-left">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <div className="absolute right-4 top-4">
                        <IconButton onClick={onClose} icon={<X size={15}/>}/>
                    </div>

                    {/**All About Product */}
                    {children} 
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
