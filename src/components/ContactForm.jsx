const ContactForm = () => {
  return (
    <form className="bg-(--off-white) rounded-xl shadow-lg py-6 px-6 mt-4">
      <h3 className="font-heading font-semibold text-4xl md:text-6xl tracking-tighter mb-6 text-(--yale-blue) w-fit mx-auto border-b-2 border-(--yale-blue) whitespace-nowrap">
        Send us a Message
      </h3>
      <div className="flex flex-col items-start gap-8">
        <label
          htmlFor="senderName"
          className="w-full border border-(--prussian-blue)/15 rounded-md"
        >
          <input
            type="text"
            name="senderName"
            id="senderName"
            placeholder="Your Name"
            className="w-full px-2 py-4 text-xl placeholder:text-(--prussian-blue)/75 placeholder:font-heading font-body"
          />
        </label>
        <label
          htmlFor="senderEmail"
          className="w-full border border-(--prussian-blue)/15 rounded-md"
        >
          <input
            type="email"
            name="senderEmail"
            id="senderEmail"
            placeholder="Your Email"
            className="w-full px-2 py-4 text-xl placeholder:text-(--prussian-blue)/75 placeholder:font-heading font-body"
          />
        </label>
        <label
          htmlFor="queryType"
          className="w-full border border-(--prussian-blue)/15 rounded-md"
        >
          <select
            name="queryType"
            id="queryType"
            className="w-full px-2 py-4 text-xl placeholder:text-(--prussian-blue)/75 placeholder:font-heading font-body"
          >
            <option unselectable="true">Select Query Type</option>
            <option value="queryName1">queryName1</option>
            <option value="queryName2">queryName2</option>
            <option value="queryName3">queryName3</option>
          </select>
        </label>
        <label
          htmlFor="queryMessage"
          className="w-full border border-(--prussian-blue)/15 rounded-md"
        >
          <textarea
            name="queryMessage"
            id="queryMessage"
            placeholder="Your Message"
            className="w-full px-2 py-4 text-xl placeholder:text-(--prussian-blue)/75 placeholder:font-heading font-body"
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full text-center font-heading font-semibold text-xl bg-(--yale-blue) text-(--navajo-white) rounded-xl py-2 tracking-wide"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
