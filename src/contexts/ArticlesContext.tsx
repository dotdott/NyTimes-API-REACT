import { GetStaticProps } from "next";
import {useEffect} from 'react';
import { ParsedUrlQuery } from "node:querystring";
import { createContext, ReactNode, useState } from "react";

interface ArticlesContextData {
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
    searchInput: string;
    PrevPage: () => void;
    NextPage: () => void;
    pagination: number;
    articles: any[];
    setArticles: React.Dispatch<React.SetStateAction<any[]>>;
    FetchedArticles: () => Promise<any>;
}


interface ArticlesProviderProps {
    children: ReactNode;
}

export const ArticlesContext = createContext({} as ArticlesContextData);

export function ArticlesProvider({children}: ArticlesProviderProps) {
    const [searchInput, setSearchInput] = useState('');

    const [pagination, setPagination] = useState(1);

    const [articles, setArticles] = useState([]);

    const NextPage = () => {
        setPagination(page => page + 1)
    }

    const PrevPage = () => {
        if(pagination > 1){
            setPagination(page => page - 1)            
        } else return;
    }

    useEffect(() => {
        FetchedArticles()
    }, [pagination])
    
    async function FetchedArticles(){
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=${searchInput}&fq=document_type:(%22article%22)&page=${pagination}&api-key=QI7w1zAAn8tH2t7RLpnR1PPxotBbZQxU`
        
        console.log(url);
        const response = await fetch(url)
        const data = await response.json();

        setArticles(data.response.docs);
    }

    console.log(articles)


    return(
        <ArticlesContext.Provider value={{
            setSearchInput,
            searchInput,
            PrevPage,
            NextPage,
            pagination,
            setArticles,
            articles,
            FetchedArticles
        }}>
            {children}
        </ArticlesContext.Provider>
    )
}