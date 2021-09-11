import ExpenseDate from "./ExpenseDate"
import ExpenseItem from "./ExpenseItem"
function ExpenseData(props) {
    return (
        <div>
            <ExpenseItem
                title={props.title}
                amount={props.amount}
                date={props.date}>
            </ExpenseItem>
        </div>

    )
};

export default ExpenseData;