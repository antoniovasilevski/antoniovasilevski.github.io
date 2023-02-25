const Project = (props) => {
  const { classes, title, content, image, repo } = props

  return (
    <div className={classes}>
      <img src={image}></img>
      <h3>{title}</h3>
      <div className="project-content">{content}</div>
      <div className="project-links">
        <a className="repo" href={repo} target="_blank">
          Repo
        </a>
      </div>
    </div>
  )
}

export default Project
