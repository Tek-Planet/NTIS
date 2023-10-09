import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { CustomDropDown, CustomLoader, CustomTextInput } from "..";
import { Button } from "..";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { NewModel } from "../../types";
import { useAlert } from "react-alert";

import { addTechnology } from "../../rtk/features/technology/technologySlice";
interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const CreateTechnologyModal = ({ isOpen, closeModal }: Props) => {
  const { isLoading } = useAppSelector((state) => state.technology);
  const alert = useAlert();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<any>("");
  const dispatch = useAppDispatch();

  const signIn = async (e: any) => {
    e.preventDefault();
    const body: NewModel = {
      title: title,
      content: content,
      image: file,
      imageName: file.name,
      createdAt: new Date().getTime().toString(),
    };

    const response = await dispatch(addTechnology(body));
    if (response.payload) {
      alert.show("Project added successfully!", { type: "success" });
      closeModal();
    }
  };

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
                  Add New Technology
                </Dialog.Title>
                {isLoading && <CustomLoader />}
                <form
                  onSubmit={signIn}
                  className=" flex flex-col gap-3 my-3 text-xs sm:text-sm"
                >
                  {/* firsr wor */}
                  <div className="flex flex-col gap-2 md:flex-row">
                    <CustomTextInput
                      required
                      placeholder="title"
                      inputType="text"
                      value={title}
                      handleChange={setTitle}
                    />

                    <CustomTextInput
                      required
                      placeholder="Office"
                      inputType="text"
                      value={title}
                      handleChange={setTitle}
                    />

                    <CustomTextInput
                      required
                      placeholder="Application Number"
                      inputType="text"
                      value={title}
                      handleChange={setTitle}
                    />
                  </div>
                  {/* decond row */}
                  <div className="flex flex-col gap-2 md:flex-row">
                    <CustomTextInput
                      required
                      placeholder="Publication Number"
                      inputType="text"
                      value={title}
                      handleChange={setTitle}
                    />

                    <CustomTextInput
                      required
                      placeholder="Application Number"
                      inputType="text"
                      value={title}
                      handleChange={setTitle}
                    />
                  </div>

                  <CustomDropDown />

                  {/* third row */}
                  <div className="flex flex-col gap-2 md:flex-row">
                    <CustomTextInput
                      required
                      placeholder="IPC"
                      inputType="text"
                      value={title}
                      handleChange={setTitle}
                    />

                    <CustomTextInput
                      required
                      placeholder="CPC"
                      inputType="text"
                      value={title}
                      handleChange={setTitle}
                    />

                    <CustomTextInput
                      required
                      placeholder="Applicant"
                      inputType="text"
                      value={title}
                      handleChange={setTitle}
                    />
                  </div>
                  {/* FOurth row */}
                  <div className="flex flex-col gap-2 md:flex-row">
                    <CustomTextInput
                      required
                      placeholder="Inventors"
                      inputType="text"
                      value={title}
                      handleChange={setTitle}
                    />

                    <CustomTextInput
                      required
                      placeholder="Agents"
                      inputType="text"
                      value={title}
                      handleChange={setTitle}
                    />

                    <CustomTextInput
                      required
                      placeholder="Note"
                      inputType="text"
                      value={title}
                      handleChange={setTitle}
                    />
                  </div>

                  <CustomTextInput
                    required
                    placeholder="Absract"
                    inputType="text"
                    isTextArea={true}
                    value={content}
                    handleChange={setContent}
                    row={5}
                  />

                  <CustomTextInput
                    required
                    placeholder="Description"
                    inputType="text"
                    isTextArea={true}
                    value={content}
                    handleChange={setContent}
                    row={8}
                  />

                  <CustomTextInput
                    required
                    placeholder="Claims"
                    inputType="text"
                    isTextArea={true}
                    value={content}
                    handleChange={setContent}
                    row={5}
                  />

                  <CustomTextInput
                    required
                    inputType="file"
                    handleChange={setFile}
                  />

                  <div className="flex  justify-center">
                    <Button
                      type="submit"
                      styles={"text-primary w-1/2 p-2 "}
                      text="Submit"
                    />
                  </div>
                </form>

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

export default CreateTechnologyModal;
