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
                <DialogContent>
                    <div>
                        <div className="infoContainer">
                            <img src={imageUrl} width={window.innerWidth / 5} height={window.innerWidth / 5} alt="Product"/>
                            <div>
                                <br/>
                                <Typography variant="headline">
                                    {item.category}
                                </Typography>
                                <br/>
                                <Typography variant="headline">
                                    {item.name}
                                </Typography>
                                <br/>
                            </div>
                        </div>

                        <div>
                            <ProductInfoTab itemInfo={item}/>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}

ProductInfo.propTypes = {
    item: PropTypes.object.isRequired
};

export default ProductInfo
