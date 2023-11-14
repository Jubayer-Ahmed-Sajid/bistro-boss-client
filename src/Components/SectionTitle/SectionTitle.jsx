import PropTypes from 'prop-types'

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className='w-4/12 mx-auto text-center mt-8'>
        <h2 className='text-xl text-yellow-600 mb-4'> --- {subHeading} --- </h2>
        <h1 className='text-3xl border-y-4 py-4 mb-12'>{heading}</h1>
      
    </div>
  )
}

SectionTitle.propTypes = {
    heading: PropTypes.any,
    subHeading: PropTypes.any

}

export default SectionTitle
