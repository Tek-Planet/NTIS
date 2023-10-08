import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { CustomLoader, CustomTextInput } from "..";
import { Button } from "..";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { DashBoardModel } from "../../types";
import { useAlert } from "react-alert";
import { updateDashboard } from "../../rtk/features/dashBoard/dashBoardSlice";
interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const DashBoardModal = ({ isOpen, closeModal }: Props) => {
  const { dashboardItem, isLoading } = useAppSelector(
    (state) => state.dashboard
  );
  const alert = useAlert();
  const [title, setTitle] = useState(dashboardItem.title);
  const [content, setContent] = useState(dashboardItem.subTitle);
  const [file, setFile] = useState<any>("");
  const dispatch = useAppDispatch();

  const signIn = async (e: any) => {
    e.preventDefault();
    const body: DashBoardModel = {
      id: dashboardItem.id,
      title: title,
      subTitle: content,
      updatedAt: new Date().getTime().toString(),
    };

    if (file) {
      body.image = file;
      body.imageName = dashboardItem.imageName;
    }

    const response = await dispatch(updateDashboard(body));
    if (response.payload) {
      alert.show("Record updated successfully!", { type: "success" });
      closeModal();
    } else alert.show("Error updating record!", { type: "error" });
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
                  Add News
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
                    required={false}
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

export default DashBoardModal;
