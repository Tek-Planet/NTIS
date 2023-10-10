import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { CustomLoader, CustomTextInput } from "..";
import { Button } from "..";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { NewModel } from "../../types";
import { useAlert } from "react-alert";
import {
  addProject,
  editProject,
} from "../../rtk/features/project/projectSlice";
interface Props {
  isOpen: boolean;
  closeModal: () => void;
  item: NewModel;
}

const CreateProjectModal = ({ isOpen, closeModal, item }: Props) => {
  const { isLoading } = useAppSelector((state) => state.project);
  const alert = useAlert();
  const [title, setTitle] = useState(item?.title ? item?.title : "");
  const [content, setContent] = useState(item?.content ? item?.content : "");
  const [file, setFile] = useState<any>(null);
  const dispatch = useAppDispatch();

  const signIn = async (e: any) => {
    e.preventDefault();

    let body: NewModel = {};

    if (item) {
      body.id = item.id;
      body.title = title;
      body.content = content;
      // if the user choose new file then include the file object
      if (file) {
        body.image = file;
        body.imageName = item?.imageName ? item.imageName : file.name;
      }
    }
    // then it a new news
    else {
      body = {
        title: title,
        content: content,
        image: file,
        imageName: file.name,
        createdAt: new Date().getTime().toString(),
      };
    }

    const response: any = item
      ? await dispatch(editProject(body))
      : await dispatch(addProject(body));

    if (response.payload) {
      alert.show(
        item ? "Project edited successfully!" : "Project added successfully!",
        { type: item ? "info" : "success" }
      );
      closeModal();
    } else {
      alert.show(item ? "Error editing record!" : "Error adding record!", {
        type: "error",
      });
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
                  {item ? "Edit Project" : " Add New Project"}
                </Dialog.Title>
                {isLoading && <CustomLoader />}
                <form
                  onSubmit={signIn}
                  className=" flex flex-col gap-3 my-3 text-xs sm:text-sm"
                >
                  <CustomTextInput
                    required
                    name="name"
                    placeholder="title"
                    inputType="text"
                    value={title}
                    handleChange={setTitle}
                  />

                  <CustomTextInput
                    required={item ? false : true}
                    inputType="file"
                    handleChange={setFile}
                  />

                  <CustomTextInput
                    required
                    placeholder="Message"
                    inputType="text"
                    isTextArea={true}
                    value={content}
                    handleChange={setContent}
                    row={12}
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

export default CreateProjectModal;
