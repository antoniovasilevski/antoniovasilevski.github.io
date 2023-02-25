const Education = (props) => {
  const { classes, company, field, year } = props

  return (
    <div className={classes}>
      <div className="education-content company">{company}</div>
      <div className="education-content field">{field}</div>
      <div className="year">{year}</div>
    </div>
  )
}

export default Education
