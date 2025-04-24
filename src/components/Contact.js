const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-4 m-4"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-4 m-4"
          placeholder="message"
        />
        <button className="border border-black p-4 m-4 bg-gray-50 rounded-lg ">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
