import React from 'react';
import Typography from 'material-ui/Typography'
import '../css/styles.css'
import Paper from 'material-ui/Paper';

const skincare_ingredients_to_avoid = ['lead', 'triclosan', 'oxybenzone', 'bht',
    'butylated hydroxyanisole', 'bha',
    'butylated hydroxytoluene', 'coal tar', 'paraben', 'phthalates',
    'formaldehyde',
    'eda', 'dithanolamine', 'triethanolamine', 'toluene', 'retinoids',
    'retin a',
    'salycylic acid', 'bpa', 'bithionol',
    'chlorofluorocarbon propellants', 'chloroform',
    'hexachlorophene', 'mercury', 'methylene chloride', 'vinyl chloride',
    'zirconium', 'talc']


const getHighlightedText = (text, higlight) => {
    let re = '(' + higlight.join('|') + ')'
    let parts = text.split(new RegExp(re, 'gi'));
    return <span> {parts.map((part, i) =>
        <span key={i}
              style={higlight.some(function (item) {
                  return part.toLowerCase() === item.toLowerCase()
              })
                  ? {
                      backgroundColor: 'yellow',
                  } : {}}>
            {part}
        </span>)
    } </span>;
}


const ResultDisplay = ({length, onreturn, content, unsafe}) => {
    if (length > 0) {
        let displayContent = getHighlightedText(content, unsafe)
        return (
            <div>
                <div className="alert alert-danger fadeIn" role="alert">
                    UNSAFE! Harmful ingredients found!
                </div>
                <Paper elevation={4} style={{padding: '20px'}}>
                    <Typography variant='body1' gutterBottom={true}>
                        {displayContent}
                    </Typography>
                </Paper>
                <button className="btn btn-primary btn-lg btn-block" onClick={onreturn}>Back</button>
            </div>
        )
    } else {
        return (
            <div>
                <div className="alert alert-primary fadeIn" role="alert">
                    SAFE! No harmful ingredients found.
                </div>
                <Paper elevation={4} style={{padding: '20px'}}>
                    <Typography variant='body1' gutterBottom={true}>
                        {content}
                    </Typography>
                </Paper>
                <button className="btn btn-primary btn-lg btn-block" onClick={onreturn}>Back</button>
            </div>
        )
    }

}


const CheckDisplay = ({onChange, onClick, onPress}) =>

    <form>
        <Typography variant='display1' gutterBottom={true}>Harmful Ingredients Checking Tool</Typography>
        <textarea placeholder="Enter or Paste the ingredients into this field" onChange={onChange} autoFocus={true}
                  className="form-control" onKeyPress={onPress}
                  rows="5"></textarea>
        <input type="button" onClick={onClick} className="btn btn-primary btn-lg btn-block"
               value='Run'/>
    </form>


class IngredientsCheck extends React.Component {

    constructor() {
        super()
        this.state = {
            unsafe: [],
            checked: false,
            content: ''
        }
        this.onPress = this.onPress.bind(this)
        this.onclick = this.onclick.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onclickreturn = this.onclickreturn.bind(this)
    }

    checkIngre = (content) => {
        let contentlower = content.toLowerCase();
        let unsafeIng = [];
        skincare_ingredients_to_avoid.forEach(function (ing) {
            if (contentlower.includes(ing)) {
                unsafeIng.push(ing);
            }
        })
        return unsafeIng;
    }

    onPress = (e) => {
        var validation = /[a-zA-Z]/;
        if (e.key === 'Enter' && validation.test(this.state.content)) {
            this.onclick(e)
        }
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onclick = (e) => {
        if (this.state.content !== '') {
            this.setState({
                checked: true,
                unsafe: this.checkIngre(this.state.content)
            })
        }
    }

    onclickreturn = (e) => {
        this.setState({
            checked: false,
            content: ''
        })
    }

    render() {
        return (
            <div className="container ingrebox">
                {
                    this.state.checked ?
                        <ResultDisplay length={this.state.unsafe.length} onreturn={this.onclickreturn}
                                       content={this.state.content}
                                       unsafe={this.state.unsafe}/> :
                        <CheckDisplay onChange={this.onChange} onClick={this.onclick} onPress={this.onPress}/>
                }
            </div>
        )
    }
}

export default IngredientsCheck;