type Props = {
  error: string;
};

const CustomError = (props: Props) => {
  const { error } = props;
  return <p className="text-center mt-2 text-red-500">{error}</p>;
};

export default CustomError;
