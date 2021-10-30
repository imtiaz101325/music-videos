import PropTypes from 'prop-types'

export function DisplayArea({ items }) {
  return <div>
    {
      items?.map(
        ({ image_url, title, id }) => <img src={image_url} alt={title} key={id} />
      )
    }
  </div>
}

DisplayArea.propTyes = {
  items: PropTypes.array.isRequired
}