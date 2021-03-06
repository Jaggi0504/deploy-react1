import React from 'react';
import { Grid, Cell } from 'react-mdl'

class Education extends React.Component {
    render(props) {
        return (
            <Grid>
                <Cell col={4}>
                    <h4 style={{fontSize:'18px'}}> {this.props.startYear} - {this.props.endYear}</h4>

                </Cell>
                <Cell col={6}>
                    <h4 style={{ marginTop: '18px', fontSize:'18px' }}>{this.props.schoolName} </h4>
                    <h4 style={{fontSize:'18px'}}> {this.props.schoolCity} </h4>
                </Cell>
                <Cell col={2}>
                    <h4 style={{ marginTop: '18px', fontSize: '18px'}}>{this.props.percentage} </h4>
                </Cell>
            </Grid>
        )
    }
}


export default Education;