const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )

}
const Part = (props) => <p>{props.name} {props.exercises}</p>

const Content = (props) => <div>{props.course.parts.map(part =><Part key={part.id} name={part.name} exercises = {part.exercises}/>)}</div>

const Total = (props) => {
    return (
    <div>
        <b>total of {props.course.parts.reduce((s,p) => s + p.exercises,0)} exercises</b>
    </div>
    )
}

const Course = ({course}) => {

    return (
        <div>
         <Header course={course}/>
         <Content course={course}/>
         <Total course={course}/>
        </div>
    )

}

export default Course;