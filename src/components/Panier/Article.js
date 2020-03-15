import React from 'react';

export const ArticleContext = React.createContext(null);

const ArticleProvider = (props) => {
  const [article, setArticle] = React.useState([]);

  const providedData = {
    get: () => article,
    
    add: item => {
      const existingItem = article.find(element => element.id === item.id);
      if (existingItem) {
        providedData.increaseQty(existingItem.id);
      } else {
        const itemToInsert = { ...item, qty: 1, key: item.id };
        setArticle([...article, itemToInsert]);
      }
    },
    
    remove: id => {
      const newArticle = article.filter(item => item.id !== id);
      setArticle(newArticle);
    },
    
    increaseQty: id => {
      const item = article.find(item => item.id === id);
      if (item) {
        const newArticle = article.map(item => {
          if (item.id === id) {
            item.qty++;
          }
          return item;
        });
        setArticle(newArticle);
      }
    },
    
    decreaseQty: id => {
      const item = article.find(item => item.id === id);
      if (item && item.qty > 1) {
        const newArticle = article.map(item => {
          if (item.id === id) {
            item.qty--;
          }
          return item;
        });
        setArticle(newArticle);
      }
    },
    
    length: () => {
      let i = 0;
      article.map(item => { i += item.qty });
      return i;
    },
    
    totalPrice: () => {
      let price = 0;
      article.map(item => { price += item.price * item.qty });
      return price;
    }
  };

  return (
    <ArticleContext.Provider value={ providedData }>
      {props.children}
    </ArticleContext.Provider>
  );
};

export const withArticleProvider = Component => props => (
  <ArticleProvider>
    <Component {...props}></Component>
  </ArticleProvider>
);

export const withArticle = Component => props => (
<ArticleContext.Consumer>
    {article => <Component {...props} article={article} />}
  </ArticleContext.Consumer>
);