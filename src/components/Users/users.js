import { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import TableBody from "./userTable"
import classes from './user.module.css'


const Users = () => {
    const [table, setTable] = useState([])

    useEffect(() => {
        const fetchTable = async () => {
            try {
                const req = await fetch(
                    `${process.env.REACT_APP_BACKEND_URL}/users`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
                )
                const data = await req.json();
                setTable(data.users)
            } catch (err) {
                console.log(err)
            }
        }
        fetchTable();
    }, []);



    const tableList = table.map(table => <TableBody key={table.id} name={table.name || 'Not Found'} account={table.account || 'Not Found'} balance={table.balance || 'Not Found'} />)
    return (
        <main className={classes.background}>
            <h1>All Users</h1>
            <div className={classes.table}>
                <Table responsive striped bordered hover>
                    <thead className={classes.head}>
                        <tr>
                            <th>Name</th>
                            <th>Account Number</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    {tableList}
                </Table>
            </div>
        </main>
    )
}

export default Users