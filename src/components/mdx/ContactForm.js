const ContactForm = () => {
  return (
    <form
      className="max-w-lg mt-24"
      name="contact"
      method="POST"
      action="/thanks/"
      data-netlify="true"
    >
      <div>
        <input
          className="w-full mb-4 p-4"
          type="text"
          name="name"
          placeholder="First name"
          aria-required="true"
        />
      </div>
      <div>
        <input
          className="w-full mb-4 p-4"
          type="email"
          name="email"
          placeholder="Email address"
          aria-required="true"
        />
      </div>
      <div>
        <input
          className="w-full mb-4 p-4"
          type="text"
          name="website"
          placeholder="Website address (optional)"
          aria-required="false"
        />
      </div>
      <div>
        <label htmlFor="type" className="block text-2xl font-bold mt-12">
          What kind of work do you need done?
        </label>
        <p className="text-base text-grey-dark mt-2">
          Give me an idea of what type of solution I'd deliver on this project.
        </p>
        <select id="type" name="type[]" aria-required="true">
          <option value="copy">Website copywriting</option>
          <option value="content">Content engine package</option>
          <option value="24-copy">24-hour copy package</option>
          <option value="video-audit">Video audit package</option>
          <option value="retainer">Monthly retainer</option>
          <option value="retainer">Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="budget" className="block text-2xl font-bold mt-12">
          What's your budget for this engagement?
        </label>
        <p className="text-base text-grey-dark mt-2">
          This will help me guide you toward the best solutions within your budget. It's not a
          committment, but rather a starting point.
        </p>
        <select id="budget" name="budget[]" aria-required="true">
          <option value="Less than $3,000">Less than $3,000</option>
          <option value="$3,000 - $5,000" selected="selected">
            $3,000 - $5,000
          </option>
          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
          <option value="$10,000+">$10,000+</option>
        </select>
      </div>
      <div>
        <label htmlFor="timeframe" className="block text-2xl font-bold mt-12">
          What's your timeframe for the project?
        </label>
        <p className="text-base text-grey-dark mt-2">
          Let me know which timeframe best matches your needs and expectations.
        </p>
        <select id="timeframe" name="timeframe[]" aria-required="true">
          <option value="Less than 2 weeks">Less than 2 weeks</option>
          <option value="2 - 4 weeks" selected="selected">
            2 - 4 weeks
          </option>
          <option value="1 - 3 months">1 - 3 months</option>
          <option value="3 - 6 months">3 - 6 months</option>
          <option value="More than 6 months">More than 6 months</option>
        </select>
      </div>
      <button
        className="button inline-block text-lg lg:text-xl font-bold text-white bg-orange mt-12 px-6 py-4 hover:bg-green rounded-sm"
        type="submit"
      >
        Submit your project's details
      </button>
    </form>
  )
}

export default ContactForm
