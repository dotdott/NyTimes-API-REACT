import { useContext, useEffect } from 'react';
import { ArticlesContext } from '../contexts/ArticlesContext';
import styles from '../styles/SearchArticle.module.css';
import Articles from './Articles';

import { nanoid } from 'nanoid';

const SearchArticle = () => {
    const { 
            setSearchInput,
            FetchedArticles,
            articles,
            pagination,
            PrevPage,
            NextPage
        } = useContext(ArticlesContext);

    
    const ArticleResults = articles.map(article => (
        <Articles 
            key={nanoid()}
            description={article.abstract}
            headline={article.headline.main}
            fontURL={article.web_url}
            image={(article.multimedia.length > 0) && article.multimedia[0].url}
            keywords={article.keywords.map(keywords => keywords.value)}
        />
    ))

    return (
        <div className={styles.container}>
            <h1>NY Times article search</h1>

            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="search-field">
                    Type your search:
                </label>
                    <input 
                        type="text" 
                        id="search-field" 
                        placeholder="Enter only one paramenter!..."
                        onChange={e => setSearchInput(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        onClick={FetchedArticles}
                    >
                        Search
                    </button>
            </form>

            <div className={styles.controllers}>
                <button onClick={PrevPage}>Previous</button>    
                <p>
                    Page {pagination}
                </p>  
                <button onClick={() => NextPage()}>Next</button>   
            </div>

            {ArticleResults}      
        </div>
    )
}

export default SearchArticle;