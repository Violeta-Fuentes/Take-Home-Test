import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { getCommits } from "../../actions";
import style from './Home.module.css'

function Home(props){
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getCommits())
    }, [])

    return(
        <div>
           <div className='navbar'>
                Take Home Test
           </div>
           <div>
               {props.commitsHistory ? props.commitsHistory.map(commit => {
                   return (
                    <div className={style.container}>
                       <span className={style.name}>{commit.commit.author.name}</span>
                       <span className={style.message} >{commit.commit.message}</span>
                   </div>
                   )
               }) 
               : 
                <div>
                   You haven't made any commits yet!
                </div>}
           </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        commitsHistory : state.commitsHistory
    }
}

export default connect(mapStateToProps)(Home)