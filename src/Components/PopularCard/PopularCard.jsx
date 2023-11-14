import PropTypes from 'prop-types'

const PopularCard = ({item}) => {
    const {image,name,recipe,price} = item
  return (
    <div className='flex justify-center'>
      <img src={image} className='mt-6 rounded-r-[200px] rounded-b-[200px] md:w-40 object-cover' alt="" />
      <div className='ml-8 mt-4 space-y-2'>
        <h2 className='text-xl font-bold'>{name}---------------</h2>
        <p>{recipe}</p>
      </div>
      <p className='text-yellow-600'>{price}$</p>
    </div>
  )
}

PopularCard.propTypes = {
item: PropTypes.object
}

export default PopularCard
