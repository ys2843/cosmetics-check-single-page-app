import React from 'react';
import PropTypes from 'prop-types';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import ProductInfo from '../ProductInfoPage/ProductInfo'


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
            <div>
                <Card style={{width: window.innerWidth / 6}}>
                    <CardMedia
                        style={{height: window.innerWidth / 6}}
                        image={imageUrl}
                        title="Product Image"
                    />
                    <CardContent style={{height: 80}}>
                        <Typography variant="headline" component="h6">
                            {this.props.itemInfo.brand}
                        </Typography>
                        <Typography component="p">
                            {this.props.itemInfo.name}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary" onClick={this.handleClickOpen}>
                            Details
                        </Button>
                        {!this.props.itemInfo.is_safe && <Avatar style={{
                            margin: 10,
                            backgroundColor: '#ff0000',
                            width: 20,
                            height: 20
                        }}>!</Avatar>}
                    </CardActions>
                </Card>
                <ProductInfo open={this.state.open} onClose={this.handleClose} item={this.props.itemInfo}/>
            </div>
        );
    }
}


Product.propTypes = {
    itemInfo: PropTypes.object.isRequired
};

export default Product