

const TableBody = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.account}</td>
                <td>{props.balance}</td>
            </tr>
        </tbody>
    )
}

export default TableBody