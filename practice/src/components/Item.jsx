function Item({somu}) {
    let array = [];
    for (let i = 0; i < somu.length; i++) {
        array.push(<div id="item" key={i}><p>{somu[i]}</p></div>);
    }
    return array;
}
export default Item;