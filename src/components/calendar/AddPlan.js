import "./scheduleModal.css";

function AddPlan(props) {
  console.log(props.selected);
  const selected = props.selected;
  return (
    <div className="schedule-wrapper">
      <div className="container">
        <h4>
          {`${selected.year}년 ${selected.month}월 ${selected.date}일`} 일정
          추가
        </h4>
        <input type="text" className="add-input" />
        <div className="btn-group">
          <button>저장하기</button>
          <button>취소하기</button>
        </div>
      </div>
    </div>
  );
}
export default AddPlan;
