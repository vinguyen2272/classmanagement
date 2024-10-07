import { useEffect } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { setCreateStage } from '../../../../features/syllabus/syllabusCreateSlice';
import TimeAllocation from '../TimeAllocation/TimeAllocation';
import AssessmentSchema from './AssessmentSchema';
import styles from './TrainingMaterial.module.css';

const TrainingMaterial: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCreateStage('other'));
  }, [dispatch]);

  const timeAllocationData: number[] = [54, 29, 9, 1, 6];

  return (
    <div className={styles.tabElement}>
      <div className={styles.timeAllocation}>
        <TimeAllocation data={timeAllocationData} height={210} width={210} />
      </div>
      <div className={styles.assessmentSchema}>
        <AssessmentSchema />
      </div>
    </div>
  );
}

export default TrainingMaterial;
