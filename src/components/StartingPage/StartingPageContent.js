import classes from './StartingPageContent.module.css';
import { Bank, Person, People, CurrencyDollar, ArrowDown } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../shared/context/auth-context';
import { useContext } from 'react';

const StartingPageContent = () => {
    const auth = useContext(AuthContext)
    return (
        <section className={classes.main}>
            <div className={classes.sec1}>
                <h1>Welcome To React Banking</h1>
                <div className={classes.icon1}>
                    <Bank size={150} />
                </div>
            </div>
            <div className={classes.sec2}>
                <div>
                    <h2>Our Services</h2>
                </div>
                <div>
                    <ArrowDown size={50} />
                </div>
            </div>
            <div className={classes.sec3}>
                <div className={classes.services}>
                    <div className={classes.link}>
                        <Link to='/auth'>
                            <div>
                                <Person size={60} />
                            </div>
                            <div>
                                <h3>Create User</h3>
                            </div>
                        </Link>
                    </div>
                    <div className={classes.link}>
                        {auth.isLoggedIn && (
                            <Link to='/profile'>
                                <div>
                                    <CurrencyDollar size={60} />
                                </div>
                                <div className={classes.title}>
                                    <h3>Make Transaction</h3>
                                </div>
                            </Link>
                        )}
                        {!auth.isLoggedIn && (
                            <Link to='/login'>
                                <div>
                                    <CurrencyDollar size={60} />
                                </div>
                                <div className={classes.title}>
                                    <h3>Make Transaction</h3>
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className={classes.link}>
                        <Link to='/users'>
                            <div>
                                <People size={60} />
                            </div>
                            <div>
                                <h3>View Users</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartingPageContent;
