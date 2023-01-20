import { InputBase, List, ListItem } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import useStyle from './styles/SearchBarStyle'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts} from '../../redux/actions/productActions';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const classes = useStyle();
    const [text, setText] = useState();
    const [open, setOpen] = useState(true);

    const getText = (text) => {
      setText(text);
      console.log(text);
      setOpen(false);
    }
    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className={classes.search}>
            <InputBase
              placeholder="Search for products"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => getText(e.target.value)}
            />
            <div className={classes.searchIcon}>
                <Search />
            </div>

              {
                text && 
                  <List className={classes.list} hidden={open}>
                    {
                      products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase()))
                        .map(product => (
                          <ListItem>
                            <Link 
                              to={`/product/${product.id}`}
                              onClick={() => setOpen(true)} 
                              style={{color: 'inherit', textDecoration: 'none'}} 
                            >
                              {product.title.longTitle}
                            </Link>
                          </ListItem>
                        ))
                    }
                  </List>
              }
          </div>
    )
}

export default SearchBar
