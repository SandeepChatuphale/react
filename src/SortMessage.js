import { Fragment } from "react"

const SortMessage = (props) => {

    return (
        <Fragment>
            Id asc <input type="radio" name="sort" onChange={ () => { props.sort('ASC')}}/>
            Id DESC <input type="radio" name="sort" onChange={ () => { props.sort('DESC')}}/>
        </Fragment>
    )
}

export default SortMessage