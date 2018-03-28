import React from 'react';
import PropTypes from 'prop-types';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import ProductInfo from '../ProductInfoPage/ProductInfo'
import '../css/product.css'

class Product extends React.Component {

    constructor(props) {
        super()
        this.state = {
            open: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = value => {
        this.setState({open: false})
    }

    render() {
        const imageUrl = 'https://' + this.props.itemInfo.image
        return (
            <Card elevation={0} className='cardhover'>
                <CardMedia
                    onClick={this.handleClickOpen}
                    component='img'
                    className="product"
                    alt='Product Image'
                    image={imageUrl}
                    title={this.props.itemInfo.name}
                />
                <CardContent>
                    <Typography variant="subheading" gutterBottom>
                        {this.props.itemInfo.brand}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        {this.props.itemInfo.name}
                    </Typography>
                    {
                        !this.props.itemInfo.is_safe &&
                        <Avatar style={{
                            position: 'absolute',
                            right: '10px',
                            top: '10px',
                            margin: 10,
                            backgroundColor: '#ff0000',
                            width: 30,
                            height: 30
                        }}>!</Avatar>
                    }
                    <ProductInfo open={this.state.open} onClose={this.handleClose} item={this.props.itemInfo}/>
                </CardContent>
            </Card>
        );
    }
}


Product.propTypes = {
    itemInfo: PropTypes.object.isRequired
};

export default Product