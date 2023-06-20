import Head from 'next/head'
import Media from '../Components/MediaPage/Media';
import HeadTag from '../Components/HeadTag';

const media = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='Media'/>
            <div>
                <Media currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default media
