import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { CustomLoader, CustomTextInput } from "..";
import { Button } from "..";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { GalleryModel } from "../../types";
import { useAlert } from "react-alert";
import { addGallery } from "../../rtk/features/gallery/gallerySlice";
interface Props {
  isOpen: boolean;
  closeModal: () => void;
  onContinue: (val: any) => void;
}

const ConfirmationModal = ({ isOpen, closeModal, onContinue }: Props) => {
  const { isLoading } = useAppSelector((state) => state.gallery);
  const alert = useAlert();
  const [title, setTitle] = useState("");

  const [file, setFile] = useState<any>("");
  const dispatch = useAppDispatch();

  const signIn = async (e: any) => {
    e.preventDefault();
    const body: GalleryModel = {
      caption: title,
      image: file,
      imageName: file.name,
      createdAt: new Date().getTime(),
    };

    const response = await dispatch(addGallery(body));
    if (response.payload) {
      alert.show("image added successfully!", { type: "success" });
      closeModal();
    } else alert.show("Unable to upload image!", { type: "error" });
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
              <Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-sm sm:text-lg  font-medium leading-6 text-gray-900 max-w-[250px] sm:max-w-[400px] w-full"
                >
                  Are you sure you want to delete this Item
                </Dialog.Title>
                {isLoading && <CustomLoader />}
                <div className=" flex  gap-3 my-3 mt-10">
                  <Button
                    onclick={closeModal}
                    styles={"text-primary w-1/2 p-2 "}
                    text="Cancel"
                  />

                  <Button
                    onclick={onContinue}
                    styles={"text-primary w-1/2 p-2  bg-red-500  "}
                    text="Continue"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className=" absolute top-5 right-5  rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => closeModal()}
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

export default ConfirmationModal;
