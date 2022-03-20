import classes from './UserProfile.module.css';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router'
import jwt from 'jsonwebtoken'
import img1 from '../../assets/pic.png'
import Axios from 'axios'
import { AuthContext } from '../../shared/context/auth-context';

const UserProfile = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [account, setAccount] = useState('')
  const [balance, setBalance] = useState('')
  const [withD, setWithD] = useState('')
  const [dep, setDep] = useState('')
  const [withDrawButt, setWithDrawButt] = useState(false);
  const [depositButt, setDepositButt] = useState(false);

  const withButton = () => {
    setWithDrawButt((prevState) => !prevState);
  };

  const depButton = () => {
    setDepositButt((prevState) => !prevState);
  };



  const populateProfile = async () => {
    const req = await fetch(`${process.env.REACT_APP_BACKEND_URL}/profile`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token
      }
    })
    const data = await req.json()
    if (data.status === 'ok') {
      setAccount(data.account)
      setName(data.name)
      setBalance(data.balance)
    }
    else {
      alert('error')
    }

  }


  useEffect(() => {
    const token = auth.token
    if (token) {
      const user = jwt.decode(token)
      if (!user) {
        localStorage.removeItem('token')
        navigate('/')
      } else {
        populateProfile()
      }
    }

  })

  const onWithDraw = async (event) => {
    event.preventDefault()
    const newBalance = Number(balance) - Number(withD)

    Axios.put(`${process.env.REACT_APP_BACKEND_URL}/withdraw`,
      { name: name, balance: newBalance },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      },
      setBalance(newBalance)

    )

  }


  const onDeposit = async (event) => {
    event.preventDefault()
    const newBalance = Number(balance) + Number(dep)
    setBalance(newBalance)

    Axios.put(`${process.env.REACT_APP_BACKEND_URL}/deposit`,
      { name: name, balance: newBalance },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      },
      setBalance(newBalance)

    )

  }


  const onDelete = async (event) => {
    event.preventDefault()
    try {
      Axios.put(`${process.env.REACT_APP_BACKEND_URL}/delete`,
        { name: name },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.token
          }
        },
        auth.logout(),
        navigate('/')
      )
    } catch (err) {
      console.log(err)
    }

  }






  return (
    <section className={classes.page}>
      <div className={classes.profile}>
        <Card className={classes.pic} >
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title><h2>{name}</h2></Card.Title>
          </Card.Body>
          <div>
            <Button className={classes.butt} onClick={depButton}>Deposit</Button>
            <Button className={classes.butt} onClick={withButton}>Withdraw</Button>
            <Button className={classes.butt2} onClick={onDelete} variant='danger'>Delete</Button>
          </div>
        </Card>
        <div className={classes.info}>
          <Card >
            <Card.Body>
              <Card.Title><h3>Account Number</h3></Card.Title>
              <Card.Text>
                <h4>{account || 'Not Found'}</h4>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title><h3>Balance</h3></Card.Title>
              <Card.Text>
                <h4>{balance || 'Not Found'}</h4>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title><h3>Description</h3></Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Card.Text>
            </Card.Body>
          </Card>
          <div>
            {
              withDrawButt ?
                <form onSubmit={onWithDraw}>
                  <InputGroup>
                    <FormControl
                      placeholder="Enter Withdraw Amount"
                      aria-label="Recipient's username"
                      value={withD}
                      type='number'
                      onChange={(e) => setWithD(e.target.value)}
                      required
                    />
                    <button>Submit</button>
                  </InputGroup>
                </form> : null
            }
          </div>
          <div>
            {
              depositButt ?
                <form onSubmit={onDeposit}>
                  <InputGroup>
                    <FormControl
                      placeholder="Enter Deposit Amount"
                      aria-label="Recipient's username"
                      value={dep}
                      type='number'
                      onChange={(e) => setDep(e.target.value)}
                      required
                    />
                    <button>Submit</button>
                  </InputGroup>
                </form> : null
            }
          </div>
        </div>
      </div>
    </section>
  );
}


export default UserProfile;

