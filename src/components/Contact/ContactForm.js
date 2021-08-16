import Link from '@components/Link'
import BaseSelect from 'react-select'
import FixRequiredSelect from '@components/Contact/FixRequiredSelect'

const ContactForm = ({ router }) => {
  const query = router.query.type

  const OptionsWork = [
    { value: 'copywriting', label: 'Website copywriting' },
    { value: 'content-strategy', label: 'Content strategy' },
    { value: 'content-writing', label: 'Content writing' },
    { value: 'audit', label: 'Website audit ($599)' },
    { value: 'retainer', label: 'Monthly retainer' },
    { value: 'custom', label: 'Custom' },
  ]

  const Select = (props) => (
    <FixRequiredSelect {...props} SelectComponent={BaseSelect} options={props.options} />
  )

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '0.125rem',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '1rem',
    }),
  }

  return (
    <form
      className="px-8 py-10 border border-gray-300 rounded-sm shadow-sm"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thanks/"
    >
      <div className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </div>
      <div className="mb-8">
        <label htmlFor="type" className="block text-2xl font-bold">
          What kind of work do you need done?
        </label>
        <p className="text-base text-grey-dark mt-2">
          Knowing the type of work helps us align on what you need, your budget, and expectations on
          a timeline. See my <Link href="/services/">services</Link> for details on packages, or
          select <em>Custom</em> to design a project together.
        </p>
        <Select
          value={OptionsWork.find((op) => {
            return op.value === query
          })}
          styles={customStyles}
          className="text-base rounded-sm"
          id="type"
          name="type[]"
          options={OptionsWork}
          required={true}
        />
        {/* <Select
          value={OptionsWork.find((op) => {
            return op.value === query
          })}
          styles={customStyles}
          className="text-base rounded-sm"
          id="type"
          name="type[]"
          options={OptionsWork}
          required="true"
        /> */}
      </div>
      <hr className="!mt-4 !mb-8" />
      <div>
        <input
          className="w-full mb-4 p-4 border-gray-300 rounded-sm"
          type="text"
          name="name"
          placeholder="Full name"
          required="true"
        />
      </div>
      <div>
        <input
          className="w-full mb-4 p-4 border-gray-300 rounded-sm"
          type="email"
          name="email"
          placeholder="Email address"
          required="true"
        />
      </div>
      <div>
        <input
          className="w-full p-4 border-gray-300 rounded-sm"
          type="text"
          name="website"
          placeholder="Website address (optional)"
          aria-required="false"
        />
      </div>
      {/* <div>
        <label htmlFor="budget" className="block text-2xl font-bold mt-12">
          What's your budget for this engagement?
        </label>
        <p className="text-base text-grey-dark mt-2">
          This will help me guide you toward the best solutions within your budget. It's not a
          commitment, but rather a starting point.
        </p>
        <Select className="text-base" id="type" name="budget[]" options={OptionsBudget} defaultSelected="3000-5000" aria-required="true" />
      </div> */}
      <button
        className="button inline-block text-lg lg:text-xl font-bold text-white bg-orange mt-12 px-6 py-4 hover:bg-green rounded-sm transition-all"
        type="submit"
      >
        Submit your project's details
      </button>
    </form>
  )
}

ContactForm.getInitialProps = ({ query }) => {
  return { query }
}

export default ContactForm
