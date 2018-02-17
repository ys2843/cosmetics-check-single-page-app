import React from 'react';
import PropTypes from 'prop-types';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/ButtonBase';
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
            <Card style={{paddingTop: 15, width: window.innerWidth / 7}} elevation={0}>
                <CardMedia
                    style={{height: window.innerWidth / 7}}
                    image={imageUrl}
                    title={this.props.itemInfo.name}
                />
                <CardContent style={{height: 90, paddingTop: 10}}>
                    <Typography variant="subheading" gutterBottom>
                        {this.props.itemInfo.brand}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        {this.props.itemInfo.name}
                    </Typography>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <Button onClick={this.handleClickOpen}>Details</Button>
                        {
                            !this.props.itemInfo.is_safe &&
                            <Avatar style={{
                                margin: 10,
                                backgroundColor: '#ff0000',
                                width: 20,
                                height: 20
                            }}>!</Avatar>
                        }
                    </div>
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