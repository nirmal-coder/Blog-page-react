import './index.css'

const BlogItem = props => {
  const {obj} = props
  const {title, description, publishedDate} = obj

  return (
    <li className="list-container">
      <div className="content-container">
        <h1>{title}</h1>
        <p className="des">{publishedDate}</p>
      </div>
      <p className="des">{description}</p>
    </li>
  )
}
export default BlogItem
