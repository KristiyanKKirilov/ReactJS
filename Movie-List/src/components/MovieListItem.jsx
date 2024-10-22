export default function MovieListItem(props) {
    return (
        <li style={{ color: 'red' }}>
            <a href={props.url || '#'} target="_blank">
                {props.children}
            </a>
        </li>
    );
}
