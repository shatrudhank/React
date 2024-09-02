export default function Cell({value,onClick}) {
   
    return (
        <button className="square" onClick={onClick}>{value}</button>
    );
}