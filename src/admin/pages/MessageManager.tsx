import { ViewMessageModal } from "../../components/admin";

import styles from "../../style";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { CustomLoader, MessageCard } from "../../components";
import { plus } from "../../assets";

import { fetchMessages } from "../../rtk/features/message/messageSlice";

const MessageManager = () => {
  const { messages, isFetching } = useAppSelector((state) => state.message);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const [itemToModify, setItemToModify] = useState<any>(null);

  const handleNavigate = (item: any) => {
    setItemToModify(item);
    setIsOpen(true);
  };

  useEffect(() => {
    if (messages.length === 0) {
      dispatch(fetchMessages());
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
    setItemToModify(null);
  }

  return (
    <div className="flex flex-col relative">
      <div id="clients" className={` flex  flex-col  mt-4  `}>
        <div className="flex flex-col md:flex-row  sm:mb-10 mb-6 ">
          <p className={`  ${styles.heading2} text-center  te`}>Messages</p>
        </div>

        {isFetching && <CustomLoader />}

        {messages?.length > 0 && (
          <div className={`flex flex-wrap mt-2`}>
            {messages.map((item: any) => {
              return (
                <MessageCard
                  key={item.id}
                  onClick={() => handleNavigate(item)}
                  item={item}
                />
              );
            })}
          </div>
        )}
        <div>
          {!isFetching && messages?.length === 0 && (
            <p className={`${styles.textSize} m-3`}>Nothing to see here</p>
          )}
        </div>
        {/* create new button  */}
        {isOpen && (
          <ViewMessageModal
            item={itemToModify}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default MessageManager;
