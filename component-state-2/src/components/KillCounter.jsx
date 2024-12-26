export default function KillCounter(props){
    let killCounterText = 'Initial kills';


    if(props.count < 0){
        killCounterText = 'Credit kills';
    }
    else if(props.count < 3){
        killCounterText = 'Single kill';
        
    }
    else if(props.count < 4){
        killCounterText = 'Tripple kill';
    }else if(props.count > 4){
        killCounterText = 'Penta kill';
    }
    
    return (
        <>
            {
                props.count == 6 
                ? <h4>Hexa kill</h4>
                :  <h4>{killCounterText}</h4>
            }
        </>
    );
}
