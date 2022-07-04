import Author from "./Author";


const Article = ({ title, subtitle, paragraph }) => {

  title='React is so cool';
  subtitle='Today we are seeing props properties';
  paragraph='Lorem ipsum...';

  const name = 'Jose Valenzuela';

  return (
    <>
      <div>{ title }</div>
      <div>{subtitle}</div>
      <div>{paragraph}</div>
      <Author name={name}/>
    </>
  )
}

export default Article;