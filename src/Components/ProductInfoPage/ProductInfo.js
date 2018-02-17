import React from 'react';
import PropTypes from 'prop-types';
import Dialog, {DialogContent} from 'material-ui/Dialog';
import '../css/styles.css'
import Typography from 'material-ui/Typography'
import ProductInfoTab from './ProductInfoTab'

class ProductInfo extends React.Component {


    render() {
        const {item, open, onClose} = this.props;
        const imageUrl = 'https://' + item.image
        return (
            <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={onClose}>
                <DialogContent className="dialogContainer">
                    <div className="infoContainer">
                        <img src={imageUrl} width={window.innerWidth / 6} height={window.innerWidth / 6}
                             alt="Product"/>
                        <div className="productInfoTextContainer">
                            <Typography variant="title">
                                {item.category}
                            </Typography>
                            {
                                item.sub_category !== item.category &&
                                <Typography variant="subheading">
                                    {item.sub_category}
                                </Typography>
                            }
                            <Typography variant="body1">
                                {item.name}
                            </Typography>
                            <Typography variant="body1">
                                {item.price}
                            </Typography>
                        </div>
                    </div>
                    <ProductInfoTab itemInfo={item}/>
                </DialogContent>
            </Dialog>
        );
    }
}

ProductInfo.propTypes = {
    item: PropTypes.object.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.func

};

export default ProductInfo
