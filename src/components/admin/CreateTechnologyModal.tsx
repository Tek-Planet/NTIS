import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { CustomDropDown, CustomLoader, CustomTextInput } from "..";
import { Button } from "..";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { Menus, NewModel } from "../../types";
import { useAlert } from "react-alert";

import { addTechnology } from "../../rtk/features/technology/technologySlice";
import { technologyMenu } from "../../constants";
interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const CreateTechnologyModal = ({ isOpen, closeModal }: Props) => {
  const { isLoading } = useAppSelector((state) => state.technology);
  const alert = useAlert();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [office, setOffice] = useState<string>("");
  const [applicationNumber, setApplicationNumber] = useState<string>("");
  const [publicationNumber, setPublicationNumber] = useState<string>("");
  const [publicationKind, setPublicationKind] = useState<Menus>(
    technologyMenu[0]
  );
  const [ipc, setipc] = useState<string>("");
  const [applicant, setApplicant] = useState<string>("");
  const [cpc, setcpc] = useState<string>("");
  const [inventors, setInventors] = useState<string>("");
  const [agents, setAgents] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [claims, setClaims] = useState<string>("");
  const [file, setFile] = useState<any>("");

  const dispatch = useAppDispatch();

  const submit = async (e: any) => {
    e.preventDefault();
    const body = {
      title,
      office,
      applicationNumber,
      publicationNumber,
      publicationKind: publicationKind.title,
      ipc,
      cpc,
      applicant,
      inventors,
      agents,
      note,
      content,
      description,
      claims,
      image: file,
      imageName: file.name,
      createdAt: new Date().getTime().toString(),
    };

    // console.log(body);

    const response = await dispatch(addTechnology(body));
    if (response.payload) {
      alert.show("Added successfully!", { type: "success" });
      closeModal();
    } else {
      alert.show("Error adding record!", { type: "error" });
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
                  onSubmit={submit}
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
                      value={office}
                      handleChange={setOffice}
                    />

                    <CustomTextInput
                      required
                      placeholder="Application Number"
                      inputType="text"
                      value={applicationNumber}
                      handleChange={setApplicationNumber}
                    />
                  </div>
                  {/* decond row */}
                  <div className="flex flex-col gap-2 md:flex-row">
                    <CustomTextInput
                      required
                      placeholder="Publication Number"
                      inputType="text"
                      value={publicationNumber}
                      handleChange={setPublicationNumber}
                    />
                  </div>

                  <CustomDropDown
                    selected={publicationKind}
                    setSelected={setPublicationKind}
                  />

                  {/* third row */}
                  <div className="flex flex-col gap-2 md:flex-row">
                    <CustomTextInput
                      required
                      placeholder="IPC"
                      inputType="text"
                      value={ipc}
                      handleChange={setipc}
                    />

                    <CustomTextInput
                      required
                      placeholder="CPC"
                      inputType="text"
                      value={cpc}
                      handleChange={setcpc}
                    />

                    <CustomTextInput
                      required
                      placeholder="Applicant"
                      inputType="text"
                      value={applicant}
                      handleChange={setApplicant}
                    />
                  </div>
                  {/* FOurth row */}
                  <div className="flex flex-col gap-2 md:flex-row">
                    <CustomTextInput
                      required
                      placeholder="Inventors"
                      inputType="text"
                      value={inventors}
                      handleChange={setInventors}
                    />

                    <CustomTextInput
                      required
                      placeholder="Agents"
                      inputType="text"
                      value={agents}
                      handleChange={setAgents}
                    />

                    <CustomTextInput
                      required
                      placeholder="Note"
                      inputType="text"
                      value={note}
                      handleChange={setNote}
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
                    value={description}
                    handleChange={setDescription}
                    row={8}
                  />

                  <CustomTextInput
                    required
                    placeholder="Claims"
                    inputType="text"
                    isTextArea={true}
                    value={claims}
                    handleChange={setClaims}
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
