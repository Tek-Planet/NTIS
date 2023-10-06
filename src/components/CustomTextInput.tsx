type Props = {
  placeholder?: string;
  inputType?: string;
  isTextArea?: boolean;
  value?: string;
  handleChange: Function;
  row?: number;
  name?: string;
  required?: boolean;
};

const CustomTextInput = (props: Props) => {
  const {
    placeholder,
    inputType,
    isTextArea,
    value,
    handleChange,
    row,
    name,
    required = true,
  } = props;
  return (
    <label className="flex-1 w-full flex flex-col">
      {isTextArea ? (
        <textarea
          name={name}
          required={required}
          value={value}
          // onChange={handleChange}
          rows={row ? row : 5}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          className="p-[8px] py-3 rounded-lg  outline-none  bg-transparent font-epilogue text-black  text-[14px] placeholder:text-[#4b5264]  sm:min-w-[300px] border"
        />
      ) : (
        <input
          name={name}
          required={required}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="p-[8px] py-3   rounded-lg  outline-none  bg-transparent font-epilogue   text-[14px] placeholder:text-[#4b5264]  sm:min-w-[300px] border"
        />
      )}
    </label>
  );
};

export default CustomTextInput;
