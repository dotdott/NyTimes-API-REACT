import SearchArticle from '../components/SearchArticle';
import { ArticlesProvider } from '../contexts/ArticlesContext';


export default function Home({docs}) {
  console.log(docs);

  return (
      <>
      <ArticlesProvider>

        <SearchArticle />

      </ArticlesProvider>
      </>
  )
}