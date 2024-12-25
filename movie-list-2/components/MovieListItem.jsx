export default function MovieListItem(props) {
    return (
        <li style={{ color: 'skyblue' }}>
            <a href={props.url || '#'} target="_blanket">
                {props.children}
            </a>
        </li>
    );
}
