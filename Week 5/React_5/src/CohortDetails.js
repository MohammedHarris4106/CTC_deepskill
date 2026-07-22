import cohortStyles from './CohortDetails.module.css';

function CohortDetails(props) {
    const status = (props.cohort.currentStatus || '').toString().toLowerCase();
    const h3Class = status === 'ongoing' ? cohortStyles.ongoing : cohortStyles.other;

    return (
        <div className={cohortStyles.box}>
            <h3 className={h3Class}>
                {props.cohort.cohortCode} -
                <span>{props.cohort.technology}</span>
            </h3>
            <dl>
                <dt>Started On</dt>
                <dd>{props.cohort.startDate}</dd>
                <dt>Current Status</dt>
                <dd>{props.cohort.currentStatus}</dd>
                <dt>Coach</dt>
                <dd>{props.cohort.coachName}</dd>
                <dt>Trainer</dt>
                <dd>{props.cohort.trainerName}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;