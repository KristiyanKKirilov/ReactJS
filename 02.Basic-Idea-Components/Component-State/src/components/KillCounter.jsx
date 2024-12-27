export default function KillCounter(props) {

    let title = 'Kill Counter';
    //Contional rendering with if statements
    if (props.count == 1) {
        return <h3>First Blood!</h3>;
    }

    //Conditional rendering - ternary operator/elvis
    title = props.count == 3 ? 'Tripple Kill!' : 'Kill Counter';

    //Conditional rendering - if operator asigning new value to the primitive
    if (props.count == 2) {
        title = 'Double Kill!';
    }
    else if (props.count > 5){
        title = 'Unstoppable!';
    }


    return (
        <h3>{title}</h3>
    );
}
