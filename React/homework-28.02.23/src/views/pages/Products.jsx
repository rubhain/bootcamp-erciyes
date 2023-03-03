import {useEffect, useState} from 'react'
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid"
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true);
    const [open, setOpen] = useState(false);
    const [productKey, setProductKey] = useState();
    let navigate = useNavigate();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



    const handleClickOpen = (item) => {
        setOpen(true);
        setProductKey(item.id);
      };
    
    const handleClose = () => {
        setOpen(false);
      };
    
      const deleteProduct = () => {
        setloading(true);
        axios.delete('https://northwind.vercel.app/api/products/' + productKey)
        .then(res => {
            handleClose();
            loadData();
        })
    }

    useEffect(() => {

        loadData();

    }, [])

    const loadData = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setProducts(res.data);
                setloading(false)
            })
    }



    let columns = [
        {
            headerName: 'Id',
            field: 'id',
            flex: 0.3

        },
        {
            headerName: 'Name',
            field: 'name',
            flex: 1
        },
        {
            headerName: 'UnitPrice',
            field: 'unitPrice',
            flex: 1
        },
        {
            headerName: 'UnitsInStock',
            field: 'unitsInStock',
            flex: 1
        },        {
            headerName: 'QuantityPerUnit',
            field: 'quantityPerUnit',
            flex: 1
        },{
            headerName: 'Buttons',
            renderCell: (item) =>{
                return (<>
                <Button color='primary' variant='contained' onClick={() => navigate("/products/" + item.id) }>Go to Detail</Button>    
                <Button color='error' variant='contained' onClick={() => handleClickOpen(item)} >Delete</Button>
                </>)
            },
            flex: 1
        },

    ]


    return (<>
        <div style={{ height: 1100, width: '100%' }}>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={30}
                loading={loading}
            />
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Do you really want to delete this data?
                    This process cannot be undone.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Disagree
                </Button>
                <Button onClick={deleteProduct} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        </div>

    </>
    )
}

export default Products