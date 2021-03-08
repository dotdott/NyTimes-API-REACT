import styles from '../styles/Articles.module.css';

const Articles = ({
    fontURL,
    headline,
    description,
    keywords,
    image
}) => {

    return (
        <div className={styles.container}>


            <div className={styles.articleContainer}>
                {image ? (

                    <img src={'http://www.nytimes.com/' + image} />
                ) : (
                    <img src="./nytimes.jpg" alt="New York Times enterprise"/>
                )}


            <div className={styles.articleInfos}>
                <a href={fontURL}>
                    {headline}
                </a>
                <p>
                    {description}
                </p>
                    
                <p>
                    Keywords: <br/>
                    <small>
                        {keywords}
                    </small>
                </p>
            </div>
        </div>
    </div>
    )
}

export default Articles;