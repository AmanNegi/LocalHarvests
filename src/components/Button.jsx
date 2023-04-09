function Button({ text = "Button", additionalClasses = "" }) {
  return (
    <button
      className={`bg-green-500 hover:bg-opacity-80 text-sm md:text-lg lg:text-lg rounded-md py-2 px-4 text-white ${additionalClasses}`}
    >
      {text}
    </button>
  );
}

export default Button;
