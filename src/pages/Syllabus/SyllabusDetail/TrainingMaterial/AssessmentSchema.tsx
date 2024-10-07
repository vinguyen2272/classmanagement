import styles from './TrainingMaterial.module.css'

const AssessmentSchema = () => {
  return (
    <>
      <p className={styles.schemaHeader}>Assessment Schema</p>
      <div className={styles.schemaContent}>
        <div className={styles.schemaTotal}>
          <ul>
            <li className={styles.SchemaTagname}>
              Quiz * <span className={styles.schemaPercent}>15%</span>
            </li>
            <li className={styles.SchemaTagname}>
              Assignment * <span className={styles.schemaPercent}>15%</span>
            </li>
            <li className={styles.SchemaTagname}>
              Final * <span className={styles.schemaPercent}>70%</span>
            </li>
          </ul>
        </div>
        <div className={styles.schemaFinal}>
          <ul>
            <li className={styles.SchemaTagname}>
              Final Theory * <span className={styles.schemaPercent}>40%</span>
            </li>
            <li className={styles.SchemaTagname}>
              Final Practice * <span className={styles.schemaPercent}>60%</span>
            </li>
          </ul>
        </div>
        <div className={styles.schemaPassing}>
          <p className={styles.passing}>Passing criteria</p>
          <p className={styles.SchemaTagname}>
            GPA * <span className={styles.schemaPercent}>70%</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default AssessmentSchema
