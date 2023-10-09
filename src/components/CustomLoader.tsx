const CustomLoader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",

        zIndex: 1000,
      }}
    >
      <div
        style={{
          padding: 15,
          borderRadius: 8,
        }}
      >
        {/* Replace CustomActivityIndicator with an equivalent web component */}
        <div
          style={{ borderColor: "red" }}
          className="w-16 h-16 border-b-2  rounded-full animate-spin"
        ></div>
      </div>
    </div>
  );
};

export default CustomLoader;
