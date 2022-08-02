import Head from 'next/head'
import Gigs from '../Components/Gigs';
import HeadTag from '../Components/HeadTag';

const gigs = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='Gigs'/>
            <div>
                <Gigs currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default gigs
