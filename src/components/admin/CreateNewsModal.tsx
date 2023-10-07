import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { CustomTextInput } from "..";
import { Button } from "../";
interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const CreateNewsModal = ({ isOpen, closeModal }: Props) => {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[800px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-sm sm:text-lg  font-medium leading-6 text-gray-900 max-w-[250px] sm:max-w-[400px] w-full"
                >
                  Add News
                </Dialog.Title>
                <div className=" flex flex-col gap-3 my-3 text-xs sm:text-sm">
                  <CustomTextInput
                    name="name"
                    placeholder="title"
                    inputType="text"
                    value={email}
                    handleChange={setEmail}
                  />

                  <CustomTextInput
                    name="email"
                    placeholder="Your Email"
                    inputType="text"
                    value={email}
                    handleChange={setEmail}
                  />

                  <CustomTextInput
                    name="email"
                    placeholder="Your Email"
                    inputType="file"
                    value={email}
                    handleChange={setEmail}
                  />

                  <CustomTextInput
                    name="body"
                    placeholder="Message"
                    inputType="text"
                    isTextArea={true}
                    value={body}
                    handleChange={setBody}
                    row={12}
                  />
                  <div className="flex  justify-center">
                    <Button
                      onclick={() => {
                        alert("welcome");
                      }}
                      styles={"text-primary w-1/2 p-2 "}
                      text="Submit"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className=" absolute top-5 right-5  rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateNewsModal;
